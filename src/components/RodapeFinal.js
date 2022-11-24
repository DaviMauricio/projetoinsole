import "./RodapeFinal.css"

function RodapeFinal() {

    return (
    <div>
     <footer className="rodape">
       <a href="https://insole.com.br/" className="rodapefinal">
        <img src="https://insole.com.br/wp-content/uploads/2021/10/Logo.png" alt="teste"/> 
       </a>
       
      <div className="rodapeprimeiro">

        <p id="titulo"> Menu</p>

        <a href="https://insole.com.br/" target="_blank"><p>Inicio</p></a>
        <a href="https://insole.com.br/a-insole/" target="_blank"><p>A insole</p></a>
        <a href="https://insole.com.br/a-nova-moeda/" target="_blank"><p>A nova moeda</p></a>
        <a href="https://insole.com.br/insole-pay/" target="_blank"><p>Insole Pay</p></a>
        <a href="https://insole.com.br/seja-insole/" target="_blank"><p>Seja um franqueado</p></a>
        <a href="https://insole.com.br/blog/" target="_blank"><p>Blog</p></a>
        <a href="https://insole.com.br/contato/" target="_blank"><p>Contato</p></a>
        <a href="https://insole.com.br/politica-de-privacidade/" target="_blank"><p>Aviso de Privacidade</p></a>
        <a href="https://insoleenergiasolar.solides.jobs/" target="_blank"><p>Trabalhe conosco</p></a>
        </div>

        <div className="rodapemeio">
          <p id="titulo">ENTRE EM CONTATO</p>
          <p>Insole Energia Solar S.A.</p>
          <p>C.N.P.J.: 22.208.173/0001-32</p>
          <p>81 4042 9626</p>
          <p>comercial@insole.com.br</p>

        </div>
        

        <div className="rodapeultimo">
          <p id="titulo">ONDE ESTAMOS </p>
          <p id="titulocidade"> RECIFE (Matriz)</p>
          <p>Rua da Moeda, 50</p>
          <p>Recife Antigo, Recife – PE –Brasil</p>
          <p>50030-040</p>
          <p id="titulocidade">SÃO PAULO</p>
          <p>Rua Prof. Atílio Innocenti, 165</p>
          <p>Itaim Bibi, São Paulo – SP – Brasil</p>
          <p>04538-000</p> 
        </div>  
     </footer>
    </div>
    )
}

export default RodapeFinal
