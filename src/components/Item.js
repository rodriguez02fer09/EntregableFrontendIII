// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {
  const {id, title, description, stock, eventoComprar} = props

  const validar = (currentStock) => {
    return currentStock === 0
    ?  <h5>En stock <span> Agotado </span> </h5>
    :  <h5>En stock {stock} </h5>
  }
const renderBotton = (currentStock) => {
return currentStock === 0
?  <button disabled= {true} onClick={(event) => eventoComprar(event,id)}>SIN STOCK</button>
:  <button onClick={(event) => eventoComprar(event,id)}>COMPRAR</button>
}

  return (
    <div className="producto">
      <h3>{title}</h3>
      <p>{description}</p>
      { validar(stock) }
      { renderBotton(stock) }
    </div>
  );
}
