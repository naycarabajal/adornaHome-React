//import logo from './logo.svg';
import { useState } from 'react'
import './App.css'
import NavBs from './components/Nav-BS/Nav-bs'
import Button from './components/Button'
import Counter from './components/Counter/Counter'
import ItemListContainer from './components/ItemListContainer'
import './components/Nav/styles.scss'


const App = () => {
  const [title,setTitle] = useState(0)

  return (
    <div className="App">
      {}
        <img src={"./logo.png"} />
        <NavBs/>
        <ItemListContainer/>
        <h1>{title}</h1>
        <button onClick={() => setTitle('cambiamos el titulo 1')}/>
        <button onClick={() => setTitle('cambiamos el titulo 2')}/>
        <Counter/>
        
        
    </div>

  );
}

export default App;