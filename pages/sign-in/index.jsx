import axios from "../../utils/axios"
import { useEffect, useRef, useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useRouter } from "next/router"

export default function SignIn(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const MySwal = withReactContent(Swal)
    const router = useRouter()

    const [wasLogin, setWasLogin] = useState(false);
    
    const handleSubmit = async () => {
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const res = await axios.post("/api/auth/login", loginData)
        if(res.data.status !== 200) {
            await MySwal.fire({
                title: res.data.message,
                icon: 'error'
            })
        }else{
            await MySwal.fire({
                title: res.data.message,
                icon: 'success',
                didClose : () => {
                    setWasLogin(true)
                }
            })
        }
    }

    useEffect(() => {
        router.push('/admin')
    }, [wasLogin])

    return (<>
    
        <div className="row justify-content-center mt-5">
            <div className="col-10 col-md-5 my-bg px-4 py-3 my-rounded shadow">
                <h1 className="text-orange">Sign-in</h1>
                <div className="px-4 py-2 mt-3">
                    <div className="mb-3">
                        <input type="email" ref={emailRef} placeholder="Email" className="form-control" name="email" id="" />
                    </div>
                    <div className="mb-3">
                        <input type="password" ref={passwordRef} placeholder="Password" className="form-control" name="email" id="" />
                    </div>
                    <div className="mb-3">
                        <button onClick={handleSubmit} className="btn btn-orange">Sign-In</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}