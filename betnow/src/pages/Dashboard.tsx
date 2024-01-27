import "./styles/Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import LandingPageNav from "../LandingPageNav";
import Uploadform from "../Uploadform";
import DashboardMenu from "./menu/DashboardMenu";



const Dashboard = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  }

  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        const response = await axios.get('https://happy-pocket-seal.cyclic.app/api/auth', {
          withCredentials: true
        });

        if (response.data.success === 'ok') {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
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
        <LandingPageNav isMenuOpen={toggleMenu}/>
        {openMenu ? <DashboardMenu /> : ""}     
        <div className="upload-section">
          <Uploadform />
        </div>
      </section>
    );
  } else {
    navigate('/api/login');
  }
};

export default Dashboard;
