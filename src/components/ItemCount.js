
import React, {useState} from "react";

const   ItemCount = () => {

  const [contador,setContador] = useState (0)

  const suma = () =>{
      setContador(contador + 1);
  }

  const resta = () =>{
    if(contador<1){
      setContador(0);
    }else{
    setContador(contador - 1);
    }
}

  return(
    <div 
    className =  "ItemCount">
      <span>{contador}</span>
      <button onClick ={suma}>suma</button>
      <button onClick ={resta}>resta</button>

    </div>
  )
}

export default ItemCount