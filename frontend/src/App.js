import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
