import { Link } from "react-router-dom";
import Carrosel from "./Carrosel";
import BotaoDefault from "./BotaoDefault";

export default function Cards(props){
    const titulo = props.titulo
    const img1 = props.img1
    const img2 = props.img2
    const img3 = props.img3
    const rotas = props.rotas
    return(
        <div className="cardcon">
                <div>{titulo}</div>
                <Carrosel imagem1={img1} imagem2={img2} imagem3={img3}/>
                <BotaoDefault rotas={rotas} />
        </div>
    )
}