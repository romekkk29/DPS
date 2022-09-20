import './App.css';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './vistas/home';
import CrearCuenta from './vistas/crearCuenta';
import IniciarSesion from './vistas/inciarSesion';
import Sucursales from './vistas/sucursales';
import Organizacional from './vistas/organizacional';
import Servicios from './vistas/servicios';
import Profesionales from './vistas/profesionales';

function App() {
  return (
   <>
     
     <BrowserRouter>
        <Routes>
              <Route path="/DPS/" element={<Home></Home>}/>
              <Route path="/DPS/iniciar-sesion" element={<IniciarSesion/>}/>
              <Route path="/DPS/crear-cuenta" element={<CrearCuenta></CrearCuenta>}/>
              <Route path="/DPS/sucursales" element={<Sucursales></Sucursales>}/>
              <Route path="/DPS/servicios" element={<Servicios></Servicios>}/>
              <Route path="/DPS/profesionales" element={<Profesionales></Profesionales>}/>
              <Route path="/DPS/organizacional" element={<Organizacional></Organizacional>}/>
              <Route path="*" element={<Navigate to='/DPS/'></Navigate>}/>

       </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
