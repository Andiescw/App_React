import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const CartContainer = () => {
  const {cartList, emptyCart, removeItem} = useCartContext()

  return (
    <div>
      {cartList.map(product => (
        <div className="card w-50">
          <img className="w-15" src={product.photo} />
          <label>${product.price} MXN</label>
          <label>Cantidad: {product.quantity}</label>
          <button onClick={removeItem} className="btn btn-primary" >Eliminar</button>
        </div>
      ))}
      <button onClick={emptyCart} className="btn btn-primary" >Vaciar Carrito</button>
    </div>
  )
}
