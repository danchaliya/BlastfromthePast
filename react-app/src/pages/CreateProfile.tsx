import TextBox from '../components/TextBox';
import TextBox2 from '../components/TextBox2';
import Line2 from '../components/Line2';
import './landingpage.css';
import ExitButton from '../assets/ExitButton.png';
import { Link } from 'react-router-dom';

function CreateProfile(){
    return(
        <div>
            <div style={{display:'flex'}}>
                <div style={{marginLeft:'auto',  marginRight: '50px', marginTop: '30px'}}>
                    <Link to="/home-page">
                        <img src={ExitButton}></img>
                    </Link>
                </div>
            </div>
            <div style={{display:'flex', flexDirection: 'column'}} id="box" >
                <div>
                    <h2 id="custom-h2">Create Your Profile</h2>
                </div>
                <div style={{display:'flex', flexDirection: 'column'}} id= "lines-2">
                    <Line2/>
                    <Line2/>
                </div>
                <div>
                    <TextBox customLabel="Enter Username:" />
                    <TextBox2 customLabel="Enter Password:" />
                    <TextBox2 customLabel="Re-enter Password:" />
                </div>
                <div>
                    <Link to="/create-profile">
                        <button id="Button">Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile;