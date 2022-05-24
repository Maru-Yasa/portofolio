import Image from "next/image"

function Profile() {
    const profilePict = "https://media-exp1.licdn.com/dms/image/C4E03AQHoYXy-4o1BFA/profile-displayphoto-shrink_200_200/0/1645504624862?e=1658966400&v=beta&t=B1rbCKZsTkyAuxwLo1s80kPaONn5_CxWh6SVzq9ceNw"

    return (<>
    
    
    <div className="my-bg-blue-darken row justify-content-center">

<div className="col-10 row justify-content-center mt-5 p-3 text-center">
        <div className="col-md-6 text-center text-md-end mb-3 px-5">
            <Image src={profilePict} className='img-thumbnail shadow rounded-circle avatar' alt="" />
        </div>
        <div className="col-md-6 text-center text-md-start">
            <span className='fs-1  text-white fw-bold'>
                Hi There! 👋
                <br />
                I&apos;m <span className="my-text-orange">Maru yasa</span>
            </span>
            <br />
            <hr className="text-white col-md-6" />
            <p className="text-white">Full Stack Web Developer <span className="fw-bold my-text-orange">Enthusiast</span></p>
            <div className="mt-3">
                <a href='https://github.com/maru-yasa' className="btn">
                <div className='my-bg-blue px-3 py-2 card-hover shadow rounded'>
                    <i className='bi bi-github text-white'></i>
                </div>              
                </a>
                <a href='https://www.instagram.com/maruf_ilyasa' className="btn">
                <div className='my-bg-blue px-3 py-2 card-hover shadow rounded'>
                    <i className='bi bi-instagram text-white'></i>
                </div>              
                </a>
                <a href='https://www.linkedin.com/in/ma-ruf-ilyasa-3032481b0/' className="btn">
                <div className='my-bg-blue px-3 py-2 card-hover shadow rounded'>
                    <i className='bi bi-linkedin text-white'></i>
                </div>              
                </a>
            </div>            
        </div>

</div>

</div>
    
    
    
    </>)
}

export default Profile