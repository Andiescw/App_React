import { useState } from 'react';
import { Formx } from './Formx';
import { formValidation } from './FormValidation';


const FormValid = formValidation(Formx)

export function Formulario (){

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleOnChange = (evt) => {
        //console.log('name: ', evt.target.name)
        //console.log('value: ', evt.target.value)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return <FormValid formData={formData} handleOnChange={handleOnChange}/>
}