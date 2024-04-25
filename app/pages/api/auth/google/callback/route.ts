import { NextRequest } from "next/server";
import axios from "axios";
import { redirect } from "next/navigation";

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET =process.env.CLIENT_SECRET
const REDIRECT_URI = 'http://localhost:3000/pages/api/auth/google/callback';

export async function GET(req : NextRequest) {
 //  const { code } = req.query;
   const searchParams = req.nextUrl.searchParams
  const code = searchParams.get('code')
  console.log("Hello1",code,searchParams)

  try {
    // Exchange authorization code for access token
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    });

  console.log("Hello2", data)
    const { access_token, id_token } = data;

    // Use access_token or id_token to fetch user profile
    const { data: profile } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    console.log("DATAAAAAAAAA",profile)

    // Code to handle user authentication and retrieval using the profile data

    redirect('/');
  } catch (error) {
    redirect('/pages/login');
  }
};
