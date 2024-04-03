
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import './style/Home.css';
import Hamburger from './Components/Hamburger';
import './style/Hamburger.css';
import Career from './pages/Career';
import './style/Career.css';
import Resources from './pages/Resources';
import './style/Resources.css';
import Jobs from './pages/Jobs';
import './style/Jobs.css';
import SignIn from './pages/SignIn';
import './style/SignIn.css';
import SignUp from './pages/SignUp';
import './style/SignUp.css';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div>
        <Hamburger onToggleMenu={toggleMenu} />
        {showMenu && <div className="menu-options"></div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career-help" element={<Career />} /> 
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/jobs" element={<Jobs />} /> 
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;