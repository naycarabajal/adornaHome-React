//import logo from './logo.svg';
import './App.css';
import NavBs from './components/Nav-BS/Nav-bs';
import Nav from './components/Nav/Nav';
import './components/Nav/styles.scss';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
 <Nav></Nav>
 
  <NavBs/>
    </div>

  );
}

export default App;