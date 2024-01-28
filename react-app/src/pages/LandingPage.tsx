import Header from '../components/Header';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import icon from "../assets/icon.png";
import './landingpage.css'
function LandingPage() {
    return (
        <div>
            <Link to="/sign-in">
            <Button>Log In</Button>
            </Link>
            <Header/>
            <div style={{display:'flex'}}>
                <div><img src={icon} id="logo"></img></div>
                <div style={{marginLeft:'auto'}}><button id="loginButton">Login</button></div>
            </div>
            <h2> Login </h2>
        </div>
      );
}

export default LandingPage;