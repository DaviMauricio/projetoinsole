import { useState } from 'react'
import RodapeInicial from "./components/RodapeInicial"
import RodapeFinal from "./components/RodapeFinal"
import "./components/RodapeInicial.css"

function App() {
  const [cidade, setCidade] = useState("")
  const [previsaoTempo, setprevisaoTempo] = useState(null)



  const handleChange = (e) => {
    setCidade(e.target.value)
  }

  const handleSearch = () => {
    //requisição para api
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=998f573c37794b5281151317221511&q=${cidade}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then((data) => {
        setprevisaoTempo(data)
        console.log(data)
      });

  };

  return (
    <div>
      <main className="container">
        <div className="jumbotron">
          <div className="imagensRodapeInicial">
            <RodapeInicial
              logo={"https://www.insole.com.br/wp-content/uploads/2021/10/Logo.png"}
            />
          </div>

          <title>Previsão Insole</title>
          <br></br>
          <h1>Previsão de tempo da Insole</h1>
          <br></br>
          <h3>
            Verifique agora a previsão do tempo da sua cidade
          </h3>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                value={cidade} />
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-outline-success btn-lg">
            Pesquisar
          </button>

          {previsaoTempo ? (
            <div>
              <div className="nt-4 d=flex align-items-center">
                <div>
                  <h3> Hoje o dia está {previsaoTempo.current.condition.text}<img src={previsaoTempo.current.condition.icon} alt="logo1" /></h3>
                  <h6>Análise atualizada em:</h6>

                  <p className="lead">
                    Data e Hora: {previsaoTempo.current.last_updated}
                  </p>
                  <p className="lead">
                    País: {previsaoTempo.location.country}
                  </p>
                  <p className="lead">
                    Estado: {previsaoTempo.location.region}
                  </p>
                  <p className="lead">
                    Cidade: {previsaoTempo.location.name}
                  </p>
                  <p className="lead">
                    Temperatura: {previsaoTempo.current.temp_c}°
                  </p>
                  <p className="lead">
                    Umidade: {previsaoTempo.current.humidity}
                  </p>

                </div>


              </div>
            </div>
          ) : null}
        </div>
    
      </main>
      <RodapeFinal/>
    </div> 
  )
}

export default App;
