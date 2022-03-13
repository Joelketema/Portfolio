import Project from './Project'

import '../Style/projectStyle.css'
import ag from '../Resources/AASTU gebeta.PNG'
import task from '../Resources/taskX.PNG'
import bitz from '../Resources/2bitz.PNG'
import port from '../Resources/port.PNG'

const Projects = () => {

    console.log(ag)
    const projects = [
        {
            Name: "TaskX",
            image: task,
            link:"https://github.com/Joelketema/Task-Manager-FULL_React",
            description:"Task Manager Made with React"
        },
        {
            Name: "AASTU GEBETA",
            image: ag,
            link:"https://github.com/Joelketema/AASTU-GEBETA-Final",
            description:"Food Deliverying and Ordering System"
        },
        {
            Name: "2BitZ",
            image: bitz,
            link:"https://github.com/Joelketema/Project-2BitZ-Responsive",
            description:"Convert Any Numbering System to the Other"
        },
        {
            Name: "Protfolio Page",
            image: port,
            link:"https://github.com/Joelketema/Project-2BitZ-Responsive",
            description:"My Portfolio site made with React"
        },
    ]
    return (
        <div className="holder">
        <h2>My <span className="name">Projects</span> </h2>
        <div className="projectsPart">
            {
                projects.map(p => (
                    <Project name={p.Name} image={p.image} git={p.link} description={p.description} key={p.git}/>
                ))
            }
            </div>
        </div>
    )
}

export default Projects;