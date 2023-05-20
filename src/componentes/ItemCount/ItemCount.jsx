import React from 'react'
import { useCounter } from '../../Hook/useCounter'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';

export function ItemCount({ stock=5, inicial=1, onAdd}) {
    const { counter, handleAdd, handleRemove } = useCounter(inicial, 1, stock)
  return (
     <ButtonGroup>
        <InputGroup>
        <Button onClick={ handleAdd }> + </Button>{' '}
        <InputGroup.Text id="btnGroupAddon"> { counter }</InputGroup.Text>
        <Button onClick={ handleRemove }> - </Button>{' '}
        
        <Button onClick={ ()=>{onAdd(counter)} }>Agregar al Carrito</Button>{' '}
        </InputGroup>
      </ButtonGroup>
  )
}
