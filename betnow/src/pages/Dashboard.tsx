import "./styles/Dashboard.css";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import LandingPageNav from "../LandingPageNav";
import Uploadform from "../Uploadform";



const Dashboard = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth', {
          withCredentials: true
        });

        if (response.data.success === 'ok') {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          navigate('/api/login');
        }
      } catch (err) {
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    isAuthenticated();
  }, []);

  if (isLoading) {
    // You can render a loading spinner or any other indicator
    return <div>Loading...</div>;
  }

  if (isAuthorized) {
    return (
      <section className="body">
        <LandingPageNav />
        <div className="upload-section">
          <Uploadform />
        </div>
      </section>
    );
  } else {
    return null; 
  }
};

export default Dashboard;
