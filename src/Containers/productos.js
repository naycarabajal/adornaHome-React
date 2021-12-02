const products =
    [
        {
            nombre: 'maseta',
            precio: 1000,
            id: 1,
            categoria:'decoración'
        },
        {
            nombre: 'cuadro',
            precio: 1500,
            id: 2,
            categoria:'decoración'
        },
        {
            nombre: "velador",
            precio: 6000,
            id: 3,
            categoria:"decoración"
        },
    ]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
