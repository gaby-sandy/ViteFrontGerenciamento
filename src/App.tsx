
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import AppRouters from './routes/AppRouters';
import Tabs from './components/Tabs/Tabs';

import './App.css'


function App() {
 
  return (
    <>
    <Router>
        <div className="container">
          <NavBar/>    
          <h1> Gerenciamento do PRA-MG</h1>
          <Tabs/>
          <AppRouters/>
          
         <Footer/> 
        </div>
    </Router>
   
    </>
  )
}

export default App
