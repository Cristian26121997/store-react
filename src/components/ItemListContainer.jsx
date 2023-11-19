import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = () => {
  const productos = [
    {id:1, titulo: "producto A", descripcion: "descripcion del productoA", precio: 5.000 , categoria: "A"},
    {id:2, titulo: "producto B", descripcion: "descripcion del productoB", precio: 8.000 , categoria: "B"},
    {id:3, titulo: "producto C", descripcion: "descripcion del productoC", precio: 10.000 , categoria: "C"},
    {id:4, titulo: "producto D", descripcion: "descripcion del productoD", precio: 15.000, categoria: "D"}
  ]

  const mostrarProductos = new Promise((resolve, reject)=> {
    if(productos.leght > 0) {
      setTimeout(() => {
        resolve(prductos)
      }, 5.000)
    } else {
      reject("No se encontraron productos")
    }
  
  })

  mostrarProductos
  .then((resultado) => {
    console.log (resultado)
  })
  .cath((errot) => {
    console.log (error)
  })

  return (
    <div>
      {
      productos.map((p) => { 
        return (
          <div key={p.id}>
            <h2>producto: {p.titulo}</h2>
            <h4>${p.precio}</h4>
          </div>
        )
      }
      )
     }

     <itemList productos={productos}/>
     
      <ItemCount/>
    </div>
  )
}

export default ItemListContainer