import axios from "../utils/axios"
import { API_URL } from "../config"

const signIn = async (loginData) => {
    const url = API_URL + "/api/v1/auth/login"
    const response = await axios.post(url,loginData)
    console.log(url);
    return response.data
}

const verifyToken = async (token) => {
    const url = API_URL + "/api/v1/auth/verify"
    const response = await axios.get(url, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    return response.status == 200 ? true : false
}

export {
    signIn        
}