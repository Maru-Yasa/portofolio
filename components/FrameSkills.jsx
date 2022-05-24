import { Container, ProgressBar } from 'react-bootstrap'

function FrameSkills() {

    
      const lang_left = [
        {
          name: "Laravel",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
          percent : 65
        },
        {
          name: "React.js",
          logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          percent : 35
        },
        {
            name: "Next.js",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
            percent : 25
        },
      ]
    
      const lang_right = [
        {
          name: "Express.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
          percent : 55
        },
        {
          name: "Vue.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
          percent : 40
        },
        {
          name: "Nuxt.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
          percent : 20
        },
      ] 

    return (<>
    
    <div className="row justify-content-center my-bg-blue-darken">

        <div className="col-10 shadow my-bg-blue mb-3 mt-5 col-md-8 px-4 py-3 rounded">
        <h2 className='text-white fw-bold'>Framework / Library Skills</h2>
        <div className="p-3 row justify-content-start">

            <div className="col-6">
            {lang_left.map((skill, index) => {
                return (
                <div className="mb-3" key={index}>
                    <div className='my-2 text-white fw-bold'><img src={skill.logo} className="my-logo" alt="" /> {skill.name}  </div>
                    <ProgressBar now={skill.percent} label={skill.percent + "%"} variant="orange" className=''></ProgressBar>
                </div>                     
                )
            })}
            
            </div>
            <div className="col-6">
            {lang_right.map((skill, index) => {
                return (
                <div className="mb-3" key={index}>
                    <div className='my-2 text-white fw-bold'><img src={skill.logo} className="my-logo" alt="" /> {skill.name}  </div>
                    <ProgressBar now={skill.percent} label={skill.percent + "%"} variant="orange" className=''></ProgressBar>
                </div>                     
                )
            })}  
            </div>


        </div>
        </div>

    </div>  
    
    </>)
}

export default FrameSkills