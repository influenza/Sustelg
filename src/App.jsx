
import { Navbar } from './Navbar'
import './App.css'
import "./Inicio.css"
import Carrosel from './Carrosel'
import Rotas from './Centralderota'
import Introducao from './introducao'
import Rodape from './Rodape'
import Objetivo from './objetivo'
import Sustentabilidade from './Sustentabilidade'
import Instagram from './instagram'
import "./480px.css"
export default function App() { 
      
    return(
        <>
        <Navbar id2="App"/>
        <Introducao/>

        <Objetivo/>
        <Sustentabilidade/>
        <Rotas/>
        <Instagram/>
        <Rodape/>
        </>
        
  )
}


