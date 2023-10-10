import { Navbar } from "./Navbar";
import Pinturas from "./Pinturas";
import Rodape from "./Rodape";
import { useState, useEffect } from "react";

export default function PinturaApp(){
    const [larguraTabela, SetTabela] = useState(window.innerWidth)
    const [abelha, SetAbelha] = useState([])
    const [seila, Setseila] = useState([])
    const [quadro, Setquadro] = useState([])

  useEffect(()=>{
    console.log(larguraTabela)
    const svg =()=>{
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
        <Navbar id2="Pintura"/>
        <Pinturas/>
        <Rodape/>
       </>
    )
}
