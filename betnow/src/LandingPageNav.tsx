import { useEffect, useState } from "react";
import "./pages/styles/LandingPageNav.css"
import axios from "axios";


const LandingPageNav = () => {
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
            <ul className="user-profile">
                <li className="logout" onClick={logout}>logout</li>
                <li className="user">
                    <h3>KT</h3>
                </li>
            </ul>
        </header>
    )
};

export default LandingPageNav;