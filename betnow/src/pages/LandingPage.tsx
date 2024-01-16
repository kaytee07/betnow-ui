import LandingPageNav from "../LandingPageNav";
import "./styles/LandingPage.css";
import BuyOddsBtns from "../BuyOddsBtns";


const LandingPage = () => {
    return (
        <div>
            <section className="main">
                <div className="header">
                     <LandingPageNav/>
                     <div className="main-text-btn">
                        <h1>Buy your accurately</h1>
                        <h1>predicted winning ticket here</h1>
                        <BuyOddsBtns/>
                     </div>
                </div>
            </section>
            <footer>

            </footer>
        </div>
    )
}

export default LandingPage;