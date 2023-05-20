import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formx = ({formData, handleOnChange, errors, validateForm}) => {

    const handleOnsubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('Enviando', formData)
        }
    }

    return (
         <section>
                <Form onSubmit={handleOnsubmit}>

                    <Form.Group className="mb-3" controlId="FormName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                                type="text" 
                                name="name" 
                                placeholder="ingrese su nombre" 
                                onChange= {handleOnChange}
                                value={formData.name}
                                />
                            <Form.Text className="text-muted"> 
                            Por favor, ingresa tu nombre completo tal y como aparece en tu tarjeta bancaria. 
                            </Form.Text>
                    <br />
                    {errors && errors.name && <span>{errors.name}</span>}
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                                type="email"
                                name="email" 
                                placeholder="ingrese su email" 
                                onChange= {handleOnChange}
                                value={formData.email}
                                />
                            <Form.Text className="text-muted"> Por favor, ingresa tu correo. </Form.Text>
                    </Form.Group>
                    <br />
                    {errors && errors.email && <span>{errors.email}</span>}

                    <Button >Enviar</Button>{' '}

                </Form>
         </section>
  )
}