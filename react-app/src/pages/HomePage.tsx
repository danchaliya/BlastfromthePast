 //import Header from '../components/Header';
//import Button from '../components/Button';
import Line from '../components/Line';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import icon from '../assets/icon.png';
import './landingpage.css';
function HomePage() {
    return (
        <div>
            <div>
                <div id = "header" style={{display:'flex'}}>
                    <div>
                        <img src={icon}></img>
                    </div>
                    <div>
                        <h1 id="custom-h3">
                            Home
                        </h1>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <Link to="/log-in">
                            <img src={profile} id="profileicon"></img>
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
                    <h2 id="custom-h1">
                        Extra! Extra! 
                        Read All About It!
                    </h2>
                    <h1 id="custom-h1">
                        Art Gallery
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

export default HomePage;