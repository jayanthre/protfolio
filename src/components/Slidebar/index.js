import './index.scss';
import { Link, NavLink,  } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Sidebar=()=>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>   
            <img src={LogoS} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer'   href="https://www.linkedin.com/in/jayanth-k-r-a68b9b184" >
                    <FontAwesomeIcon icon={faLinkedin} color='white'/>
                </a>
           </li>
                <li>
                <a target='_blank' rel='noreferrer'   href="https://github.com/jayanthre" >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
                </li>
                <li>
                <a target='_blank' rel='noreferrer'   href="https://www.youtube.com/channel/UCofjDruZiz1E5WSTmCPHMvg" >
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                </a>
                </li>
                <li>
                <a target='_blank' rel='noreferrer'   href="https://www.instagram.com/jay_.411/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
                </li>
        </ul>
    </div>
)

export default Sidebar;