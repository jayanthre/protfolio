
import './index.scss';
import log from '../../assets/images/logo44.PNG'

import { Link } from 'react-router-dom';

const Home=()=>{
    return(
        
   <div className="continer Home-page">
       <img   className='dd' src={log} alt='loo'/>
   <div className="text-zone">
   <h2>Hello!<br/> </h2>
   <h1>I'm <span style={{color:"yellow"}}>Jayanth k R</span><br/> a Web Designer </h1>
   <h3>REACT JS | CORE JAVA | SQL </h3>
   <Link to="/contact" className="flat">CONTACT ME</Link>
   </div>
   </div>
    )
}  
export default Home;