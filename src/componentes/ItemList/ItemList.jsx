// product map es item ist

import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    <div className="cntnr">
      {products.map( ({id, photo, name, price, description}) => (
        <Item 
            key={id} 
            id={id}
            photo={photo} 
            name={name} 
            price={price}
            description={description}
        />
      ))}

    </div>
  )
}
