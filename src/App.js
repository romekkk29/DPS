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
              <Route path="/del-plata/" element={<Home></Home>}/>
              <Route path="/del-plata/iniciar-sesion" element={<IniciarSesion/>}/>
              <Route path="/del-plata/crear-cuenta" element={<CrearCuenta></CrearCuenta>}/>
              <Route path="/del-plata/sucursales" element={<Sucursales></Sucursales>}/>
              <Route path="/del-plata/servicios" element={<Servicios></Servicios>}/>
              <Route path="/del-plata/profesionales" element={<Profesionales></Profesionales>}/>
              <Route path="/del-plata/organizacional" element={<Organizacional></Organizacional>}/>
              <Route path="*" element={<Navigate to='/del-plata/'></Navigate>}/>

       </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
