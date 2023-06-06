
import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal';



export function ItemDetail({product}, lgShow, handleClose) {
  const [isQty, setIsQty] = useState(false)
  const {addToCart} = useCartContext()

  const onAdd = (quantity) => {
    setIsQty(quantity)
    // const product = {
    // id, name, price
    // }

    addToCart(product, quantity)
  }


  return (
    <>
      <Modal size="lg" show={lgShow}>
        <Modal.Header >
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={product.photo}/>
            <h3>${product.price} MXN</h3>
            <p>{product.description}</p>
            <h6>{product.category}</h6>
        </Modal.Body>
        <Modal.Footer>
        {
                !isQty ?
                  <ItemCount onAdd={onAdd} />
              :
                <>
                  <Link to='/cart'>
                    <Button>Ir a Pagar</Button>
                  </Link>

                </>
              }

            <Link to='/'>
              <Button>Regresar</Button>
            </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
