import Image from 'next/image'
import { Container, ProgressBar } from 'react-bootstrap'

function LangSkills() {

    const logo = {
        javaScript : "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        php : "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        html: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
        java : "/java.png",
        css : "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
      }
    
      const lang_left = [
        {
          name: "Java Script",
          logo: logo.javaScript,
          percent : 70
        },
        {
          name: "PHP",
          logo: logo.php,
          percent : 80
        },
        {
          name: "HTML",
          logo: logo.html,
          percent : 90
        },
      ]
    
      const lang_right = [
        {
          name: "Python",
          logo: logo.python,
          percent : 40
        },
        {
          name: "CSS",
          logo: logo.css,
          percent : 60
        },
        {
          name: "Java",
          logo: logo.java,
          percent : 25
        },
      ] 

    return (<>
    
    <div className="row justify-content-center my-bg-blue-darken">

        <div className="col-10 shadow my-bg-blue mb-3 mt-5 col-md-8 px-4 py-3 rounded">
        <h2 className='text-white fw-bold'>Language Skills</h2>
        <div className="p-3 row justify-content-start">

            <div className="col-6">
            {lang_left.map((skill, index) => {
                return (
                <div className="mb-3" key={index}>
                    <div className='my-2 text-white fw-bold'><Image src={skill.logo} className="my-logo" alt="" /> {skill.name}  </div>
                    <ProgressBar now={skill.percent} label={skill.percent + "%"} variant="orange" className=''></ProgressBar>
                </div>                     
                )
            })}
            
            </div>
            <div className="col-6">
            {lang_right.map((skill, index) => {
                return (
                <div className="mb-3" key={index}>
                    <div className='my-2 text-white fw-bold'><Image src={skill.logo} className="my-logo" alt="" /> {skill.name}  </div>
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

export default LangSkills