import { NextRequest } from "next/server";
import axios from "axios";
import { redirect } from "next/navigation";
import { getUser } from "../../../utils";
import prisma from "../../../db";
import { createJWT, hashPassword } from "../../../auth";

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = 'http://localhost:3000/pages/api/auth/google/callback';

export async function GET(req: NextRequest) {
    //  const { code } = req.query;
    const searchParams = req.nextUrl.searchParams
    const code = searchParams.get('code')

    // Exchange authorization code for access token
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
    });

    const { access_token, id_token } = data;

    // Use access_token or id_token to fetch user profile
    const { data: profile } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: { Authorization: `Bearer ${access_token}` },
    });

    let user = await getUser(profile.email)

    if (!user) {
        user = await prisma.tnp_user.create({
            // @ts-ignore
            data: {
                name: profile.given_name,
                lname: profile.family_name,
                // @ts-ignore
                email: profile.email,
            }
        })
        console.log(user)
    }



    redirect(`/?id=${user?.id}`);
};
