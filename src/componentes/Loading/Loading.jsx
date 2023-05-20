import React, { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'

export const Loading = () => {
    useEffect(()=>{
    })

  return (
    <div className="spinner">
        <Spinner animation="border" variant="danger" className="d-flex"/>
    </div>
  )
}