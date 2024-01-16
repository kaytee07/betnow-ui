import SignInForm from "../SignInForm";
import "./styles/SignInPage.css";

const  SignInPage = () => {
    return (
        <div className="signin-page">
            <div className="main-signin">
                <div className="card">
                    <h2>Betnow</h2>
                    <h4>Sign in</h4>
                    <SignInForm/>
                </div>
                
            </div>
            
        </div>
    )
}

export default SignInPage;