import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <Router>
      <Routes>
          <Route path='/api/signin' Component={SignInPage}/>
          <Route path='/api/signup' Component={SignUpPage}/>
          <Route path='/api/home' Component={Dashboard}/>
          <Route path='/' Component={LandingPage}/>
      </Routes>
    </Router>
  )
}

export default App
