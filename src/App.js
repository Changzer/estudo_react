import logo from './pokeball.svg';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          testando o ambiente. mais uma vez.
        </p>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary">
            Um Botão
          </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
