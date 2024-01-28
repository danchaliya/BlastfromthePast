import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateProfile from './pages/CreateProfile';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/Profilepage';

function App(){
  const [name, setName] = useState('')
  useEffect(() => {}, [name])
  
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage />} />
        <Route path="/sign-up" element={ <SignUp />} />
        <Route path="/log-in" element={ <LogIn />} />
        <Route path="/create-profile" element={ <CreateProfile />} />
        <Route path="/home-page" element={ <HomePage />} />
        <Route path="/profile-page" element={ <ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;