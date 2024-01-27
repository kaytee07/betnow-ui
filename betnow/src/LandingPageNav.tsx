import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pages/styles/LandingPageNav.css"
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
interface LandingPageProp {
    isMenuOpen: () => void
}

const LandingPageNav: React.FC<LandingPageProp> = ({isMenuOpen}) => {
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const logout = async () => {

    try {
        const response = await axios.post(
        'https://happy-pocket-seal.cyclic.app/api/logout',
        {},
        {
            headers: {
            "Content-Type": "application/json"
            },
            withCredentials: true
        }
        );

        if (response.status === 200) setIsLoggedOut(true)
    } catch (error) {
        console.error("Logout error:", error);
    }
};

useEffect(() => {
    if (isLoggedOut) {
        window.location.reload();
    } 
}, [isLoggedOut])


    return (
        <header className="land-nav">
            <div className="logo">
                <img src="https://res.cloudinary.com/dbyubqmb0/image/upload/v1705767327/BETNOW_LOGO_jgvfbm.png" alt="" />
            </div>
                <ul className="lists">
                    <li className="items">
                        <Link to="/api/createuser"> create user </Link> 
                    </li>
                    {/* <li className="items">
                        <Link to=""> all users </Link>
                    </li> */}
                    <li className="items">
                        <Link to="/api/twoodds"> two odds </Link>
                    </li>
                    <li className="items">
                        <Link to="/api/fiveodds"> five odds </Link>
                    </li>
                    <li className="items">
                        <Link to="/api/sevenodds"> seven odds </Link>
                    </li>
                </ul>
            <ul className="user-profile">
                <li className="logout" onClick={logout}>logout</li>
                <li onClick={isMenuOpen} className="menu">
                    <i className="bi bi-list"></i>
                </li>
                {/* <li className="user">
                    <h3>KT</h3>
                </li> */}
            </ul>
        </header>
    )
};

export default LandingPageNav;