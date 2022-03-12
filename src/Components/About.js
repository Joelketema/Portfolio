
import laptop from "../Resources/laptop.svg"
import '../Style/about.css'

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus recusandae autem. Voluptatibus, animi debitis?</p>   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus recusandae autem. Voluptatibus, animi debitis?</p>   
                </div>
              
                <div className="socials">
                    
                   <a href="https://github.com/Joelketema" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a>
                   <i className="fab fa-facebook"></i>
                   <a href="https://linkedin.com/in/eyuel-ketema-b0225921a" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <i className="fab fa-twitter"></i>
                 </div>
            
            </div>
                
           


        </div>
    )
}

export default About
