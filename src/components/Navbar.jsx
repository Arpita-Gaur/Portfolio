
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    
    return (
         <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
               <h1 className="mx-2 w-full text-purple-300">Hey!! If you're watching this feel free to connect at my socials.</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/arpita-gaur-0bb33123b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Arpita-Gaur" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/arpitagaur_05/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
        </div>
         </nav>
     
     
    );

};

export default Navbar;