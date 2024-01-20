import SignUpForm from "../SignupForm";
import "./styles/SignUpPage.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

const  SignUpPage = () => {
    return (
        <div className="signup-page">
            <div className="main-signup">
                <Link to="/api/home"><i className="bi bi-box-arrow-left"></i></Link>
                <div className="card">
                    <h2>Betnow</h2>
                    <h4>Sign up</h4>
                    <SignUpForm/>
                </div>
                
            </div>
            
        </div>
    )
}

export default SignUpPage;