import { BrowserRouter,Route, Routes } from "react-router-dom";
import Implementação from "./pages/implementacao";

import App from "./pages/Gerenciamento";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home";


function Main() {
  return(
    <div className="app">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path="/implementacao" element={<Implementação/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
  
 
  
}

export default Main;
