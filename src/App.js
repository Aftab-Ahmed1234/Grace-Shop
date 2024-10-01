
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route,  Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

import AllProducts from "./components/AllProducts"




function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path={'/'} element={< WelcomePage/>} />
         <Route path={'/contact'} element={<Contact/>} />    
         <Route path={'/about'} element={<AllProducts/>} />    
      
      </Routes>   
      <Footer/>
      
    </>
  );
}

export default App;
