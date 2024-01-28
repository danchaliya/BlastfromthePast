import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

async function App(){
  // const [name, setName] = useState('')
  // useEffect(() => {
  //   const response = fetch('http://100.67.67.75:7473/').then
  //   (response => response.json()).then(data => console.log(data['choices'][0]['message']['content']));
  //   // const value = response.json();
  //   // console.log(value);
  // }, [])

  
  
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