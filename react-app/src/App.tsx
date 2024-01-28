import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
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
        <Route path="/sign-in" element={ <SignIn />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;