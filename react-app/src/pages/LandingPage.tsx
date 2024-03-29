 //import Header from '../components/Header';
//import Button from '../components/Button';
import Line from '../components/Line';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import './landingpage.css';
function LandingPage() {
    return (
        <div>
            <div>
                <div id = "header" style={{display:'flex'}}>
                    <div>
                        <img src={icon} width="100" height="100"></img>
                        </div>
                    <div style={{marginLeft:'auto'}}>
                        <Link to="/log-in">
                            <button id="loginButton">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', flexDirection: 'column'}} id= "lines">
                <Line />
                <Line />
            </div>
            <div style={{marginLeft: '155px', marginTop: '150px'}}>
                <div id="main">
                    <h2 id="custom-h3">
                        welcome to...
                    </h2>
                    <h1 id="custom-h1">
                        Blast From The Past!
                    </h1>
                </div>
                <div id="signup-button">
                    <div style={{marginLeft:'auto'}}>
                        <Link to="/sign-up">
                            <button id="loginButton">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
      );
}

export default LandingPage;