import prisma from "./db"
import * as nodemailer from 'nodemailer'
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;


export const getUser = async (email: string) => {
    // @ts-ignore
    const user = await prisma.tnp_user.findUnique({
        where: {
            email
        }
    })
    return user
}

async function createTransporter() {
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject();
            }
            resolve(token);
        });
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            type: 'OAuth2',
            user: process.env.USER_EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
        },
    } as nodemailer.TransportOptions);

    return transporter;
}








export const sendEmail = async (emailOptions:any) => {

    let _ = {
        subject: 'New Tour Request For You',
        text: 'New Request is received',
        to: "siddiquiusman328@gmail.com",
        from: process.env.USER_EMAIL,
    }

    let emailTransporter = await createTransporter();

    await emailTransporter.sendMail(emailOptions);

}
