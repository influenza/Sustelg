export default function Carrosel(props){

    const image1 = props.imagem1;
    const image2 = props.imagem2;
    const image3 = props.imagem3;
    const id = props.id;

    return(
        <div id={id} className="Carrosel">
            <ul>
                <li>
                <img src={image1} alt="" />
                </li>
                <li>
                <img src={image2} alt="" />
                </li>
                <li>
                <img src={image3}alt="" />
                </li>
            </ul>
        </div>
    )
}