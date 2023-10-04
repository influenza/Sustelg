
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
      const [Vaso, SetVaso] = useState([])
      const [SUstentabilidade, SetSUstentabilidade] = useState([])
      const [Tucas, SeTucas] = useState([])
      const [Onca, SeOnca] = useState([])
      const [Cobra, SetCobra] = useState([])
      const [Sapo, SetSapo] = useState([])
      const [Terra, SetTerra] = useState([])
      const [Jardineira, SetJardineira] = useState([])
      const [Selfie, SetSelfie] = useState([])
      const [Jardineira2, SetJardineira2] = useState([])



  useEffect(()=>{
    console.log(larguraTabela)
    const svg =()=>{
      if((larguraTabela<=500) && (larguraTabela >= 480)){
        SetAbelha([100,120])
        SetMico([180,180])
        SetCapivara([200,220])
        SetLivro([125,125])
        SetZelador([225,225])
        SetAlvo([120,220])
        SetCheck([300,210])
        SetVaso([200,200])
        SetSUstentabilidade([200,200])

      }
     else if((larguraTabela<=480) && (larguraTabela >= 460)){
        SetAbelha([95,115])
        SetMico([175,175])
        SetCapivara([195,215])
        SetLivro([120,120])
        SetZelador([220,220])
        SetAlvo([115,215])
        SetCheck([295,205])
        SetVaso([195,195])
        SetSUstentabilidade([195,195])


      }
      else if((larguraTabela<=460) && (larguraTabela >= 440)){
        SetAbelha([90,110])
        SetMico([160,160])
        SetCapivara([190,210])
        SetLivro([115,115])
        SetZelador([220,220])
        SetAlvo([110,210])
        SetCheck([290,210])
        SetVaso([190,190])
        SetSUstentabilidade([190,190])

      }
      else if(larguraTabela<=440){
        SetMico([150,150])
        SetCapivara([170,190])
      }
      else if(larguraTabela<=420){
        SetMico([140,140])
        SetCapivara([160,180])
      }
      else{
        SetMico([300,300])
        SetCapivara(320,340)
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
        <DescProjeto Mico={Mico} Capivara={Capivara}/>
        <Central Zelador={Zelador} Livro={Livro}/>
        <Objetivo Alvo={Alvo} Check={Check}/>
        <Sustentabilidade Vaso={Vaso} Sustentabilidade={SUstentabilidade}/>
        <Rotas Tucas={Tucas} Onca={Onca} Cobra={Cobra} Sapo={Sapo} Terra={Terra} Jardineira={Jardineira2}/>
        <Instagram Selfie={Selfie}/>
        <Rodape classname="Normal"Jardineira2={Jardineira2}/>
        </>
        
  )
}


