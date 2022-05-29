import cookie from 'cookie';


function AdminProfile({ user }){
    const profile = "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5354cd550b76669af352ba_peep-32.png"
    return (<>
    
        <div className="row justify-content-center mt-5">
            <div className="col-10 row justify-content-center text-center">
                <h1 className="fw-bold">Hello!, <span className='text-orange'>{user.username}</span></h1>
            </div>

        </div>
    
    </>)

}

export default AdminProfile