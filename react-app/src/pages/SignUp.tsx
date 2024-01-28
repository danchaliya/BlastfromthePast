import TextBox from '../components/TextBox';
import Line2 from '../components/Line2';
import './landingpage.css';

function SignUp(){
    return(
        <div>
            <div id='subpage-title'>
                <h2 id="custom-h2">Sign Up Your Account</h2>
            </div>
            <div style={{display:'flex', flexDirection: 'column'}} id= "lines-2">
                <Line2/>
                <Line2/>
            </div>
            <div>
            <TextBox customLabel="Enter Username:" />
            <TextBox customLabel="Enter Password:" />
            <TextBox customLabel="Re-enter Password:" />
            </div>
        </div>
    )
}

export default SignUp;