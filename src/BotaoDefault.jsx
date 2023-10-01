import { Link } from "react-router-dom"

export default function BotaoDefault(props){
    const rotas = props.rotas 
    return(
        <button type="submit" className="button1"><Link to={rotas}>Saiba Mais</Link></button>
    )
}