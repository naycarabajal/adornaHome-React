//import logo from './logo.svg';
import './App.css';
import NavBs from './components/Nav-BS/Nav-bs';
import ItemListContainer from './components/ItemListContainer'
import './components/Nav/styles.scss';

const Button = (props) =>{
  console.log(props)
  return (
    <button>{props.Label}</button>
  )
}

const App = () => {
  return (
    <div className="App">
      {}
        <img src={"./logo.png"} />
        <NavBs/>
        <ItemListContainer/>
        <Button Label="comprar"/>
    </div>

  );
}

export default App;