 import About from "./About";
import Projects from "./Projects";
import Certificates from './Certificates'
import Skill from "./Skill";
import Email from "./Email";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Wrapper = () => {
    return (
   
            <div className="wrapper">
                <Routes>
                    <Route path="/" exact element={<About/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Certification" element={<Certificates/>}/>
                    <Route path="/Skill" element={<Skill/>}/>
                    <Route path="/Contact" element={<Email/>}/>
                </Routes>
            </div>


    )
}

export default Wrapper;