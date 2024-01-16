import SignUpForm from "../SignupForm";
import "./styles/SignUpPage.css"

const  SignUpPage = () => {
    return (
        <div className="signiup-page">
            <div className="main-signup">
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