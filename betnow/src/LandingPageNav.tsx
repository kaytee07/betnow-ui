import "./pages/styles/LandingPageNav.css"

const LandingPageNav = () => {
    return (
        <header className="land-nav">
            <div className="logo">
                <h3>Betnow</h3>
            </div>
                <ul className="lists">
                    <li className="items">
                        create user
                    </li>
                    <li className="items">
                        all users
                    </li>
                    <li className="items">
                        two odds
                    </li>
                    <li className="items">
                        five odds
                    </li>
                    <li className="items">
                        seven odds
                    </li>
                </ul>
            <div className="user">
                <h3>KT</h3>
            </div>
        </header>
    )
};

export default LandingPageNav;