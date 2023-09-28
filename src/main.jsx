import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Plantas } from './plantas.jsx';
import { Pinturas } from './Pinturas.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/plantas' element={<Plantas />}/>
    <Route path='/pinturas' element={<Pinturas />}/>
  </Routes>
</Router>,
)