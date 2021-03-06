import { motion } from 'framer-motion'

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
          <h2 className='fw-bold my-text'>Projects I&apos;ve Done</h2>
          <div className="col-11 row mt-5 justify-content-center">

            {projects.map((project, index) => {
                return (
                        <motion.a target="_blank" href={project.href} key={index} className='card shadow col-lg-5 my-3 mx-3 p-0 border-0' whileHover={{scale:1.1}} whileTap={{scale:0.9}} >
                            <img className='poster rounded img-fluid' src={project.img} alt="" />
                            <h3 className='title text-white fw-bold'>{project.name}</h3>
                            <span className='desc text-white'>{project.desc}</span>
                        </motion.a>
                )
            })}

          </div>
        </div>

      </div>

    )
}

export default ProjectComponent
