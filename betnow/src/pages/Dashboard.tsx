import "./styles/Dashboard.css"
import LandingPageNav from "../LandingPageNav";
import Uploadform from "../Uploadform";

const Dashboard = () => {
    return (
        <section className="body">
            <LandingPageNav/>
            <div className="upload-section">
                <Uploadform/>
            </div>
        </section>
    )
}

export default Dashboard;