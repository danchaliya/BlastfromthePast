import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
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