import AdminProfile from "../../components/AdminComponents/AdminProfile";
import cookie from 'cookie'
import { API_URL } from "../../config";

export async function getServerSideProps(context) {
    const jwt = await cookie.parse(context.req.headers.cookie).JWT;  
    let url = `${API_URL}/api/v1/auth/me` 
    const response = await( await fetch(url,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })).json()
    const user = response.data
    return {
      props: {
        user
      },
    }
  }

export default function Admin({ user }){
    return (<>

        <AdminProfile user={user} />

    </>)
}