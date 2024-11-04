
import {Route, Routes} from 'react-router-dom';

import Aprovacao from '../pages/Aprovacao';
import Priorizacao from '../pages/Priorizacao';
import Implantacao from '../pages/Implantacao';
import Monitoramento from '../pages/Monitoramento';
import Inteligencia from '../pages/Inteligencia';

export default function AppRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Aprovacao/>} /> 
            <Route path="/priorizacao" element={<Priorizacao/>} />
            <Route path="/implantacao" element={<Implantacao/>} />
            <Route path="/monitoramento" element={<Monitoramento/>} />
            <Route path="/inteligencia de dados" element={<Inteligencia/>} />
        </Routes> 
    )
}

