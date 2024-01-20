import SignInForm from "../SignInForm";
import "./styles/SignInPage.css";

const  SignInPage = () => {
    return (
        <div className="signin-page">
            <div className="main-signin">
                <div className="card">
                    <img src="https://res.cloudinary.com/dbyubqmb0/image/upload/v1705767327/BETNOW_LOGO_jgvfbm.png" alt="" />
                    <h4>Sign in</h4>
                    <SignInForm/>
                </div>
                
            </div>
            
        </div>
    )
}

export default SignInPage;