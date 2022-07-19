
import laptop from "../Resources/laptop.svg"
import '../Style/about.css'
import { Link } from "react-router-dom"
const About = () => {

    return (
        <div className="about">
            <div className="picture">
                <img src={laptop} alt="tis is a pic" id="pic" />
            </div>

            <div className="description">
                <div className="aboutMe">
                   <h1>Hey! <span className="name">My Name is Eyuel Ketema</span></h1>
                    <p>I am a Software Enginner/Web Developer from Addis Ababa, Ethiopia</p>
                    <p>I have been working on Web Development for 2Years As of now (2022)</p>   
                    <p>Use any of my Social Media Link to Chat!</p>   
                </div>
              
                <div className="socials">
                    
                   <a href="https://github.com/Joelketema" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a>
                   <Link to={"/Contact"}><i className="fab fa-google"></i></Link>
                   <a href="https://linkedin.com/in/eyuel-ketema-b0225921a" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                   <a href={'https://t.me/therealpetergriffin'} target="_blank"><i className="fab fa-telegram"></i></a> 
                 </div>
            
            </div>
                
           


        </div>
    )
}

export default About
