// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera"
import Listado from "./components/Listado"
import React, { useState } from "react";

const lista = [
  {
    id: "1",
    producto: {
      nombre: "Zapatillas Nike Revolution 6 Next Nature",
      descripcion: "Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes."
    },
    stock: 5
  },
  {
    id: "2",
    producto: {
      nombre: "Zapatillas Puma Shuffle",
      descripcion: "Las zapatillas Puma Shuffle ADP están confeccionadas en materiales sintéticos. De caña baja, con ajuste personalizado gracias al sistema de cordones, sus perforaciones le dan un estilo urbano que se fusiona con la inserción del logo PUMA N°1 y PUMA N°2 para que camines la calle de la ciudad con un calzado sofisticado."
    },
    "stock": 1
  },
  {
    id: "3",
    producto: {
      nombre: "Zapatillas Adidas Coreracer",
      descripcion: "Urbanas, livianas y frescas, las Zapatillas adidas Coreracer están pensadas para cumplir con las demandas de los corredores más exigentes. Su suela tiene un estabilizador de talón y su capellada es transpirable para mantener el confort que mereces durante todo tu trayecto."
    },
    "stock": 3
  }
]

function App() {
  const [count, setCount] = useState(0)//cabecera
  const [items, setItems] = useState(lista)//items

  function comprar(event, id){//cantidad de productos
    const currentCount = count+1
    setCount(currentCount)
    

    const newItems = items.map((item) => {//stock de items
      if(item.id === id){
        item.stock = item.stock - 1
      }
      return item
    })

    setItems(newItems)

  }

  return (
    <div className="App">
      <Cabecera  cantidad={count} />
      <Listado list={items} eventoComprar={comprar} />
    </div>
  );
}

export default App;
