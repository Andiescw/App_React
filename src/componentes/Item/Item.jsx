// div de la card
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const Item = ({id, photo, name, price, description}) => {
  const [lgShow, setLgShow] = useState(false);

  const handleShow = () => setLgShow(true);


  return (
    <>
            <Card key={id} style={{ width: '24rem' }}>

                    <Link to={`/detail/${id}`}>
                      <Card.Img src={photo} className="card-img-top" />
                    </Link>
                    
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{name} </Card.Title>
                        <Card.Subtitle>${price}.00 MXN </Card.Subtitle>
                        <Card.Text className="card-text">{description}</Card.Text>

                        <Link to={`/detail/${id}`}>
                            <Button onClick={handleShow}>Detalle</Button>{' '}
                            {/* <ItemDetail show={show} handleClose={handleClose}/> */}
                        </Link>
                    </Card.Body>
            </Card>
    </>
  )
}
    
