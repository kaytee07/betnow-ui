import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pages/styles/LandingPageNav.css"
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';


const LandingPageNav = ({isMenuOpen}) => {
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const logout = async () => {
    console.log("dog");

    try {
        const response = await axios.post(
        'http://localhost:5000/api/logout',
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
    } else {
        console.log("already loaded")
    }
}, [isLoggedOut])


    return (
        <header className="land-nav">
            <div className="logo">
                <h3>Betnow</h3>
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