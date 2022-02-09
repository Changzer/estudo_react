import pokebola from './pokeball.svg';
import './App.css';
import pikachu from './pikachu.png';
import React, {useState} from "react";

function App() {
  const [imagem, setImagem] = useState(pokebola);

  const setNovaImagem = () => {
      if (imagem == pokebola) setImagem(pikachu);
      else setImagem(pokebola)
  }

  return (
    <div className="App">
      <header className="App-header">

          <div onClick={() => setNovaImagem()}>
          <img src={imagem} className="App-logo" alt="logo"  />
          </div>
          <p>
          ooiii testando o ambiente React no tablet
        </p>
        <p>
          sera que demora pra compilar? sera?
        </p>
        <p>
          ta rodando liso!aaa
        </p>

      </header>
    </div>
  );
}

export default App;
