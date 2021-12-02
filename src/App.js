import { useState } from 'react'
import './App.css'
import NavBs from './components/Nav-BS/Nav-bs'
import ItemListContainer from './Containers/ItemListContainer'


const App = () => {
  const [title,setTitle] = useState(1)

  return (
    <div className="App">
      {}
        <img src={"./logo.png"} />
        <NavBs/>
        <ItemListContainer/>       
    </div>

  );
}

export default App;