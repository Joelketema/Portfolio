import Project from './Project'

import '../Style/projectStyle.css'
import ag from '../Resources/Udemy c++.jpg'

const Certificates = () => {

   
    const projects = [
        {
            image: ag,
            description:"Udemy Mastering c++"
        },
        {
            Name: "Udemy Mastering c++",
            image: ag,
            description:"Udemy Mastering c++"
        },
        {
            Name: "Udemy Mastering c++",
            image: ag,
            description:"Udemy Mastering c++"
        },
    ]
    return (
        <div className="holder">
        <h2>My <span className="name">Certifications</span> </h2>
        <div className="projectsPart" id='cert'>
            {
                projects.map(p => (
                    <Project image={p.image} description={p.description}  key={p.git}/>
                ))
            }
            </div>
        </div>
    )
}

export default Certificates;