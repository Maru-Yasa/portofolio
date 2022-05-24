
function ProjectComponent() {

    const projects = [
        {
            name : "Pixme",
            desc : "Secreto clone, but retro style",
            img : "/pixme.png",
            href : "https://github.com/Maru-Yasa/pixme"
        },
        {
            name : "Yukreview",
            desc : "1st Place for LKS Web Tech DIY 2022",
            img : "/yukreview.png",
            href : "https://github.com/Maru-Yasa/YukReview"
        },
        {
            name : "SnackIt",
            desc : "Price List for My Mom's Store",
            img : "/snackit.png",
            href : "https://snackit.maruyasa.repl.co/"
        },      
        {
            name : "Suit Online",
            desc : "Online game called 'Suit Online'",
            img : "/suitonline.png",
            href : "https://suit-online.maruyasa.repl.co/#/"
        }, 
        {
            name : "Brainly no Ads",
            desc : "Brainly Scapper for no Ads",
            img : "/brainly.png",
            href : "https://brainly-no-ads.maruyasa.repl.co/"
        },   
    ]

    return (

        <div className="row justify-content-center my-bg-blue-darken" id="projects">

        <div className="col-10 row justify-content-center mb-3 mt-5 col-md-8 px-4 py-3 rounded">
          <h2 className='fw-bold text-white'>Projects I&apos;ve Done</h2>
          <div className="col-11 row mt-5 justify-content-center">

            {projects.map((project, index) => {
                return (
                    <a href={project.href} key={index} data-aos='zoom-in' className="card shadow col-md-5 my-3 mx-3 p-0 border-0 my-bg-blue project-hover">
                        <img layout="fill" className='poster rounded' src={project.img} alt="" />
                        <h3 className='title text-white fw-bold'>{project.name}</h3>
                        <span className='desc text-white'>{project.desc}</span>
                    </a>                    
                )
            })}

          </div>
        </div>

      </div>

    )
}

export default ProjectComponent