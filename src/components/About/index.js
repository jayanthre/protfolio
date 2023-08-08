import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCss3, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    ABOUT ME
                </h1>
                <p className='jj'>
                  I am a highly motivated and accomplished Electronics and Communications Engineering graduate with a deep passion for technology and a strong background in web devlopment and software
               development.<br/> <br/>  I possess a unique blend of technical expertise
               in electronics and proficiency in Java and ReactJS
               programming. This combination allows me to create
               innovative solutions that seamlessly integrate hardware and
               software components. With a keen eye for detail and
               exceptional problem-solving skills, I thrive in challenging
               environments and consistently deliver high-quality results 
                </p>
                </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="blue" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
