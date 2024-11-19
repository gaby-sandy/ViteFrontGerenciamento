import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Tabs from './components/Tabs/Tabs';
import AppRouters from './routes/AppRouters';
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="content">
          <div className="header-container">
            <h1>Gerenciamento do PRA-MG</h1>
            <Tabs />
          </div>

          <AppRouters />
        </main>
        <Footer/> 
      </Router>
    </>
  );
}

export default App;
