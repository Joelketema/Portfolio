
import SkillCard from './SkillCard'
import html from '../Resources/html.png'
import css from '../Resources/css.png'
import js from '../Resources/javascript.png'
import react from '../Resources/react.png'
import cpp from '../Resources/c++.png'
import java from '../Resources/java.png'
import git from '../Resources/git.png'
import node from '../Resources/node.ico'
import { useState,useEffect } from 'react'

import '../Style/skillStyle.css'
import '../Style/projectStyle.css'

const Skill = () => {

    
    var x = 0;
    const languages = [{
        Name: "HTML",
        Catagory: ["all","front"],
        image:html
    },{
        Name: "CSS",
        Catagory: ["all", "front"],
        image:css
    },{
        Name: "JavaScript",
        Catagory: ["all","front"],
        image:js
    },{
        Name: "React",
        Catagory: ["all","front"],
        image:react
    },{
        Name: "Node js",
        Catagory: ["all","back"],
        image:node
    },{
        Name: "C++",
        Catagory: ["all","other"],
        image:cpp
    },{
        Name: "Java",
        Catagory: ["all","other"],
        image:java
        },
        {
        Name: "Git",
        Catagory: ["all","other"],
        image:git
        },
    ]
    const [lang, setLang] = useState(languages)

    const show = (e) => {
        if (e.target.className === "all")
        {
            
            setLang(languages)
        }

        else if (e.target.className === "front") {
            
            const newData = languages.filter(l => (l.Catagory[1]==="front"))
            setLang(newData)
            
        }

        else if (e.target.className === "back")
        {
          
            const newData = languages.filter(l => (l.Catagory[1] === "back"))
            setLang(newData)
        }
        else if (e.target.className === "other")
        {
            
            const newData = languages.filter(l => (l.Catagory[1] === "other"))
            setLang(newData)
            }
    }

    const check = (e) => {
        const btns = document.querySelectorAll("#act")
        btns.forEach(b => {
            if (e.target.className === b.className)
            {
                b.classList.add("active")
            }
            else
                b.classList.remove("active")
        })
    }


    const apply = () => {
        const cards = document.querySelectorAll("#card")
       
        cards.forEach(c => {
            c.classList.add("active")
        })      
    }

    useEffect((apply),[])
    return (
        <div className="holder">
            <h2 id='prof'>Proficient <span className="name"> Languages</span></h2>

            <div className="topPart">
                <h3>Click on the Tags to filter</h3>
                <div className="choiceBtns" onClick={check}>
                    <div className="first">
                            <button className="all" onClick={show} id="act">All</button>
                            <button className="front" id="act" onClick={show}>FrontEnd Development</button>
                    </div>

                    <div className="second">
                            <button className="back" id="act" onClick={show}>BackEnd Development</button>
                            <button className="other" id="act" onClick={show}>Others</button>
                    </div>

                </div> 
            </div>

            <div className="projectsPart" id='renderPart' onLoad={apply}>
                {
                    lang.map(l => (
                        <SkillCard name={l.Name} image={l.image} Catagory={l.Catagory} key={x++}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Skill;