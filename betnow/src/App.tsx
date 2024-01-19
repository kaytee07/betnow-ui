import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import GetFiveOddsPage from './pages/GetFiveOddsPage';
import GetTwoOddsPage from './pages/GetTwoOddsPage';
import GetSevenOddsPage from './pages/GetSevenOddsPage';
GetSevenOddsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api/login" element={<SignInPage />} />
        <Route path="/api/signup" element={<SignUpPage />} />
        <Route path="/api/home" element={<Dashboard />} />
        <Route path="/api/fiveodds" element={<GetFiveOddsPage />} />
        <Route path="/api/twoodds" element={<GetTwoOddsPage />} />
        <Route path="/api/sevenodds" element={<GetSevenOddsPage />} />
        <Route path="/api/createuser" element={<SignUpPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
