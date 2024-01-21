import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import JavaScript from './pages/JavaScript';
import MySQL from './pages/MySQL';
import React from './pages/React';
import { Route, Routes } from "react-router-dom";
import './Main.css';
 
function App() {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path ="/" element={<Homepage/>} />
                    <Route path ="/HTML" element={<HTML/>} />
                    <Route path ="/CSS" element={<CSS/>} />
                    <Route path ="/JavaScript" element={<JavaScript/>} />
                    <Route path ="/MySQL" element={<MySQL/>} />
                    <Route path ="/React" element={<React/>} />
                </Routes>
            </div>
            <Footer/>
        </>
    );    
}

export default App;
