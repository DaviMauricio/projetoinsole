import "./RodapeInicial.css"
import imagem1 from "../imgRodapeInicial/1.jpg"
import imagem2 from "../imgRodapeInicial/2.jpg"
import imagem3 from "../imgRodapeInicial/3.jpg"
import imagem4 from "../imgRodapeInicial/4.jpg"
import imagem5 from "../imgRodapeInicial/5.jpg"
import imagem6 from "../imgRodapeInicial/6.jpg"
import imagem7 from "../imgRodapeInicial/7.jpg"
import imagem8 from "../imgRodapeInicial/8.jpg"

function RodapeInicial({ logo }) {

    return (
        <div className="imagensRodapeInicial">
            <img src={logo} alt="Logo insole" href="https://www.insole.com.br/" />
            <img src= {imagem1} alt="img1"/> 
            <img src= {imagem2}alt="img1"/> 
            <img src= {imagem3}alt="teste"/> 
            <img src= {imagem4}alt="teste"/> 
            <img src= {imagem5}alt="teste"/> 
            <img src= {imagem6}alt="teste"/> 
            <img src= {imagem7}alt="teste"/> 
            <img src= {imagem8}alt="teste"/> 
        </div>
    )
}

export default RodapeInicial