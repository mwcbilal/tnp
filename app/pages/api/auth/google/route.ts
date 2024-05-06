import axios from 'axios'
import { redirect } from 'next/navigation';

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = 'http://localhost:3000/pages/api/auth/google/callback';

// Initiates the Google Login flow
export async function GET(req: Request) {
    console.log("RECEIVEDDD")
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email`;
        console.log(url)
    redirect(url);
};

// Callback URL for handling the Google Login response

//// Logout route
//router.get('/logout', (req, res) => {
//  // Code to handle user logout
//  res.redirect('/login');
//});


