
import { Navbar } from './Navbar'
import './App.css'
import "./Inicio.css"
import "./360px.css"
import Carrosel from './Carrosel'
import Rotas from './Centralderota'
import Introducao from './introducao'
import Rodape from './Rodape'
import Objetivo from './objetivo'
import Instagram from './instagram'
import "./480px.css"
import { useEffect, useState } from 'react'
import DescProjeto from './DescricaoProj'
import Central from './Central'
export default function App() { 
      const [larguraTabela, SetTabela] = useState(window.innerWidth)
      const [Mico,SetMico] = useState([])
      const [Capivara,SetCapivara] = useState([])
      const [Abelha, SetAbelha] = useState([])
      const [Zelador, SetZelador] = useState([])
      const [Livro, SetLivro] = useState([])
      const [Alvo, SetAlvo] = useState([])
      const [Check, SetCheck] = useState([])
      const [Onca, SeOnca] = useState([])
      const [Cobra, SetCobra] = useState([])
      const [Sapo, SetSapo] = useState([])
      const [Terra, SetTerra] = useState([])
      const [Selfie, SetSelfie] = useState([])
      const [Jardineira2,Setjardineira2] = useState([])



  useEffect(()=>{
    console.log(larguraTabela)
    const svg =()=>{
      if((larguraTabela<=500) && (larguraTabela >= 480)){
        SetAbelha([100,120])
        SetMico([180,180])
        SetLivro([125,125])
        SetCheck([300,210])


      }
     else if((larguraTabela<=480) && (larguraTabela >= 460)){
        SetAbelha([95,115])
        SetMico([175,175])
        SetCapivara([195,215])
        SetLivro([120,120])

        SetCheck([295,205])



      }
      else if((larguraTabela<=460) && (larguraTabela >= 440)){
        SetAbelha([90,110])
        SetMico([160,160])
        SetCapivara([190,210])
        SetLivro([115,115])

        SetCheck([290,210])

      }
      else if((larguraTabela<=440) && (larguraTabela >= 400)){
        SetAbelha([60,60])
        SetMico([150,150])
        SetLivro([125,125])
        SetCheck([180,180])
      }
      else if((larguraTabela<=400) && (larguraTabela >= 380)){
        SetAbelha([60,60])
        SetMico([120,100])
        SetLivro([125,125])
        SetCheck([170,170])
      }
      else if((larguraTabela<=360) && (larguraTabela >= 380)){

        SetAbelha([60,60])
        SetMico([110,100])
        SetLivro([115,115])
        SetCheck([150,130])
      }
      else if((larguraTabela<=360) && (larguraTabela >= 340)){

        SetAbelha([60,60])
        SetMico([110,100])
        SetLivro([115,115])
        SetCheck([160,180])
      }
      else if((larguraTabela<=340) && (larguraTabela >= 320)){

        SetAbelha([60,60])
        SetMico([110,100])
        SetLivro([115,115])
        SetCheck([150,150])
      }
      else{
        SetAbelha([60,60])
        SetMico([120,100])
        SetLivro([125,125])
        SetCheck([180,180])
      }
    }
    window.addEventListener('resize', svg);

    // Chame a função para configurar as larguras iniciais
    svg();

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', svg);
    };
  }, [larguraTabela]);
  

  return(
        <>
        <Navbar id2="App" Abelha={Abelha}/>
        <DescProjeto Mico={Mico} />
        <Central  Livro={Livro}/>
        <Objetivo  Check={Check}/>
        <Rotas Onca={Onca} Cobra={Cobra} />
        <Instagram Selfie={Selfie}/>
        <Rodape classname="Normal"Jardineira2={Jardineira2}/>
        </>
        
  )
}


