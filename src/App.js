import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Producer from './components/Producer/Producer';
import User from './components/User/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<User />} />
        <Route path='/producer' element={<Producer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
