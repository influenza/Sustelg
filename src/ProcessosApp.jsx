import { useState,useEffect } from "react";
import { Navbar } from "./Navbar";
import Processos from "./Processos";
import Rodape from "./Rodape";

export default function ProcessosApp(){
    const [larguraTabela, SetTabela] = useState(window.innerWidth)
    const [abelha, SetAbelha] = useState([])
  useEffect(()=>{
    console.log(larguraTabela)
    const svg =()=>{
      if((larguraTabela<=500) && (larguraTabela >= 480)){
        SetAbelha([100,120])
   

      }
     else if((larguraTabela<=480) && (larguraTabela >= 460)){
        SetAbelha([95,115])


      }
      else if((larguraTabela<=460) && (larguraTabela >= 440)){
        SetAbelha([90,110])


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
        <Navbar id2="processos" Abelha={abelha}/>
        <Processos classname="Processos"/>
        <Rodape/>
        </>
    )
}