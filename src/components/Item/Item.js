import './Item.css'

//este crea de a un item, de a un producto y debe tener las propiedades de mi objeto. arma de a una card

const Item = ({ product })=> {
    return (
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    {product.nombre}
                </h2>
            </div>
            <p className="info">
                categoria: {product.categoria}
            </p>
            <p className="info">
                categoria: {product.precio}
            </p>
            <button>ver detalle</button>
        </div>
    )
}

export default Item

//<img src={"product.img"} alt={product.nombre} className="ItemImg"/>

