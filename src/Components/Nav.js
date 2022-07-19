import '../Style/navStyle.css'
import Svg from './Svg'
import Anchor from './Anchor';

import { Link } from 'react-router-dom'
const Nav = () => {


    return (
    
        <div className="navigation">
        <nav className="navv">
            
                <Svg />
                <div className="anchors">
                    <Link className="Link" to="/">
                        <Anchor cName={`fas fa-home`} name={"Home"}/>
                    </Link>

                    <Link className="Link" to='/Projects'>
                        <Anchor cName={`fas fa-project-diagram`} name={"Projects"}/>
                    </Link>

                    <Link className="Link" to="/Certification">
                        <Anchor cName={`fas fa-files`} name={"Certification"}/>
                    </Link>

                    <Link className="Link" to="/Skill">
                        <Anchor cName={`fas fa-keyboard`} name={"Skill"}/>
                    </Link>

                    <Link className="Link" to="/Contact">
                        <Anchor cName={`fas fa-mail-bulk`} name={"Contact Me"} />
                    </Link>
                </div>
            
            </nav>
            </div>
    )
}


export default Nav;