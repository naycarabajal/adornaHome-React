import React, {useState, useEffect} from "react";
import ItemCount from '../components/ItemCount';   
import ItemList from "../components/ItemList/ItemList";
import { getProducts } from './productos';

const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    console.log("recibo los producrtos")
    useEffect(() => {
        const list = getProducts()
        list.then(list =>{
            setProducts(list)
        })
        return (() => {
            setProducts([])
        })  
    }, [])

    
    return (
        <div className = 'ItemListContainer'>
            <ItemList products={products}/>
            <ItemCount/>
        </div>
        )
}

export default ItemListContainer

