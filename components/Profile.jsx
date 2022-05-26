
function Profile() {
    const profilePict = "/me.jpeg"
    return (<>
    
    
    <div className="my-bg-darken row justify-content-center">

<div className="col-10 row justify-content-center mt-5 p-3 text-center">
        <div className="col-md-6 text-center text-md-end mb-3 px-5">
            <img src={profilePict} layout="fill" className='img-thumbnail shadow rounded-circle avatar' alt="" />
        </div>
        <div className="col-md-6 text-center text-md-start">
            <span className='fs-1  my-text fw-bold'>
                Hi There! 👋
                <br />
                I&apos;m <span className="text-orange">Maru yasa</span>
            </span>
            <br />
            <hr className="my-text col-md-6" />
            <p className="my-text">Full Stack Web Developer <span className="fw-bold my-text-orange">Enthusiast</span></p>
            <div className="mt-3">
                <a href='https://github.com/maru-yasa' className="btn">
                <div className='my-bg px-3 py-2 card-hover shadow rounded'>
                    <i className='bi bi-github my-text'></i>
                </div>              
                </a>
                <a href='https://www.instagram.com/maruf_ilyasa' className="btn">
                <div className='my-bg px-3 py-2 card-hover shadow rounded'>
                    <i className='bi bi-instagram my-text'></i>
                </div>              
                </a>
                <a href='https://www.linkedin.com/in/ma-ruf-ilyasa-3032481b0/' className="btn">
                <div className='my-bg px-3 py-2 card-hover shadow rounded'>
                    <i className='bi bi-linkedin my-text'></i>
                </div>              
                </a>
            </div>            
        </div>

</div>

</div>
    
    
    
    </>)
}

export default Profile