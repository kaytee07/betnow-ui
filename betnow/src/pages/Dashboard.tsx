import "./styles/Dashboard.css";
import LandingPageNav from "../LandingPageNav";
import Uploadform from "../Uploadform";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


const Dashboard = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isAuthenticated = async () => {
        await axios.get('http://localhost:5000/api/auth', {
            withCredentials: true
        }).then((res) => {
             if (res.data.success === 'ok') {
                setIsAuthorized(true)
             } else {
                setIsAuthorized(false)
             }
        }).catch(err => {
            console.log(err)
            setIsAuthorized(false)
        })
       
    }

    isAuthenticated();
    
  }, [])

  const dashboard = () => {
    return (
        <section className="body">
            <LandingPageNav />
            <div className="upload-section">
                <Uploadform />
            </div>
        </section>
    )
  }

  return (
    isAuthorized ? dashboard() : <Navigate replace to="/api/login" />
  );
};

export default Dashboard;
