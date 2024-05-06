import axios from 'axios';
import { redirect } from 'next/navigation'

export async function signUp(userData : any) {
    const response = await axios.post('/pages/api/signUp', userData);
    return response
}

export async function signIn(userData : any) {
    const response = await axios.post('/pages/api/signIn', userData);
    return response
}
const REDIRECT_URI = 'http://localhost:3000/pages/api/auth/google/callback';

export async function signInWithGoogle() {
//    const response = await axios.get('/pages/api/auth');
//    return response
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=206550019220-gch048ktlcdklsj5g9h85dj06462vvfg.apps.googleusercontent.com&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email`;
    window.location.assign(url) 
}

export async function fetchUserById(id : any) {
    const response = await axios.get('/pages/api/user',{
        params:{
            id
        }
    });
    return response
}


export async function fetchDestinations() {
    const response = await axios.get('/pages/api/destinationHotel');
    return response?.data?.destinationsWithHotels
}

export async function postHotelBooking( data: any, userData :any ) {
    const response = await axios.post('/pages/api/hotelBooking',data,{
        headers: {
            Authorization: `Bearer ${userData?.token}`
        }
    });
    return response?.data
}


