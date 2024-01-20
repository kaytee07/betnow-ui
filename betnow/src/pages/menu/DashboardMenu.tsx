import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DashboardMenu = () => {
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const logout = async () => {

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
        <div className="dropdown-menu">
            <ul className="profile-menu">
                <li className="menu-item"><Link to="/api/createuser"> create user </Link></li>
                <li className="menu-item"><Link to="/api/twoodds"> two odds </Link></li>
                <li className="menu-item"><Link to="/api/fiveodds"> five odds </Link></li>
                <li className="menu-item"><Link to="/api/sevenodds"> seven odds </Link></li>
                <li className="menu-item logout" onClick={logout}>logout</li>
            </ul>
        </div>
    )
}

export default DashboardMenu;