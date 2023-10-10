import { useState,useEffect } from "react";
import { Navbar } from "./Navbar";
import Processos from "./Processos";
import Rodape from "./Rodape";

export default function ProcessosApp(){
    const [larguraTabela, SetTabela] = useState(window.innerWidth)
    const [abelha, SetAbelha] = useState([])
    const [caixadeferramenta, SetCaixadeferramenta] = useState([])
  useEffect(()=>{
    console.log(larguraTabela)
    const svg =()=>{
      if((larguraTabela<=500) && (larguraTabela >= 480)){
        SetAbelha([100,120])
        SetCaixadeferramenta([180,280])

      }
     else if((larguraTabela<=480) && (larguraTabela >= 460)){
        SetAbelha([95,115])
        SetCaixadeferramenta([175,275])

      }
      else if((larguraTabela<=460) && (larguraTabela >= 440)){
        SetAbelha([90,110])
        SetCaixadeferramenta([170,270])

      }
      else if((larguraTabela<=440) && (larguraTabela >= 420)){
        SetAbelha([90,110])
        SetCaixadeferramenta([165,265])

      }
      else if((larguraTabela<=420) && (larguraTabela >= 400)){
        SetAbelha([90,110])
        SetCaixadeferramenta([160,260])
      }
      else if((larguraTabela<=400) && (larguraTabela >= 380)){
        SetAbelha([90,110])
        SetCaixadeferramenta([160,260])
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
        <Processos classname="Processos" caixadeferramenta={caixadeferramenta}/>
        <Rodape/>
        </>
    )
}