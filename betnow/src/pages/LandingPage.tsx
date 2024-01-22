import "./styles/LandingPage.css";
import BuyOddsBtns from "../BuyOddsBtns";


const LandingPage = () => {
    return (
        <div>
            <section className="main">
                <div className="header">
                     <header>
                        <div className="land-logo">
                            <img src="https://res.cloudinary.com/dbyubqmb0/image/upload/v1705767327/BETNOW_LOGO_jgvfbm.png" alt="" />
                        </div>
                     </header>
                     <div className="main-text-btn">
                        <h1>Buy your accurately</h1>
                        <h1 className="second-header">predicted winning ticket here</h1>
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