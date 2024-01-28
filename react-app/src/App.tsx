import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;