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
                <div id = "header" style={{display:'flex', justifyContent: 'space-between' }}>
                    <div>
                        <img src={icon} id="icon"></img>
                    </div>
                    <div>
                        <h3 id="custom-h4">
                            Home
                        </h3>
                    </div>
                    <div >
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
            <div style={{marginLeft: '200px', marginTop: '70px'}}>
                <div style={{display:'flex', flexDirection: 'row'}}>
                    <div >
                        <Link to="news-page" className="link-style" >
                            <h2 id="custom-h6">
                                <p style={{textDecoration:'none'}}> Extra! Extra! </p>
                                <p style={{textDecoration:'none'}}> Read All </p>
                                <p style={{textDecoration:'none'}}> About It! </p>
                            </h2>
                        </Link>
                    </div>
                    <div style={{ marginLeft: 'auto', paddingRight: '200px', paddingTop: "250px"}}>
                        <Link to="art-page" className="link-style">
                            <h1 id="custom-h5">
                                Art Gallery
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
      );
}

export default HomePage;