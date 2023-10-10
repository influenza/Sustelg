import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Processos from './Processos.jsx';
import PlantaApp from './plantasApp.jsx';
import PinturaApp from './PinturaApp.jsx';
import ProcessosApp from './ProcessosApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/plantas' element={<PlantaApp />}/>
    <Route path='/pinturas' element={<PinturaApp />}/>
    <Route path='/processos' element={<ProcessosApp/>}/>
  </Routes>
</Router>,
)