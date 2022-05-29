import { API_URL } from "../../../config";
import { serialize } from 'cookie'


export default async function login(req, res) {
    try {
        const { email, password } = req.body
        const url = `${API_URL}/api/v1/auth/login`
        let response = await fetch(url, {
            headers : {
                "Content-Type" : "application/json"
            },
            method: "POST",
            body : JSON.stringify({email, password})
        })
        const statusCode = response.status
        response = await response.json()

        if(statusCode != 200){
            return res.json({
                status: statusCode,
                message:response.message,
            })            
        }
        
        let token = response.data.token
        const serialized = serialize("JWT", token ,{
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        return res.json({
            status: 200,
            message: "Success login"
        })

    } catch (error) {
        console.log(error);
    }

}
  