//import Header from '../components/Header';
import Button from '../components/Button';
import Line from '../components/Line';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import './landingpage.css';
function LandingPage() {
    return (
        <div>
            <div>
                <div style={{display:'flex'}}>
                    <div>
                        <img src={icon} id="logo"></img>
                        </div>
                    <div style={{marginLeft:'auto'}}>
                        <Link to="/sign-in">
                            <button id="loginButton">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Line />
                <Line />
            </div>

        </div>
        
      );
}

export default LandingPage;