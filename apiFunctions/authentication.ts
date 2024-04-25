import axios from 'axios';

export async function signUp(userData : any) {
    const response = await axios.post('/pages/api/signUp', userData);
    return response
}

export async function signIn(userData : any) {
    const response = await axios.post('/pages/api/signIn', userData);
    return response
}
