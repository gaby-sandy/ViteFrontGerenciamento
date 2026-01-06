import { BrowserRouter,Route, Routes } from "react-router-dom";
import Implementação from "./pages/implementacao";

import App from "./pages/Gerenciamento";
import Navbar from "./components/Navbar/Navbar";


function Main() {
  return(
    <div className="app">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path="/implementacao" element={<Implementação/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
  
 
  
}

export default Main;
