import React, { useState } from 'react';
import './formulario.scss';
import {Form, Button, Alert, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { validationAddPostAction } from '../../../src/actions/validation.action';
import { addPostAction } from '../../../src/actions/posts.actions';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { openCloseAddPostModalAction } from '../../../src/actions/modal.action';

const Formulario = () => {

    const [formValue, setFormValue]=useState({
        name: '',
        posting: ''
    });

    const dispatch=useDispatch();
    //función para ejecutar la acción
    const validateErrorForm=(state)=>{
        dispatch(validationAddPostAction(state));
    };

    //obteniendo valor del estado de la validación del form
    const valueFormError=useSelector(state=>state.validationReducer.errorFormPost);

    //Acción para enviar el post
    const addPost=(state)=>{
        dispatch(addPostAction(state));
    };

    //Para cerrar el modal cuando el post se envía correctamente
    const closeModal=(state)=>{
        dispatch(openCloseAddPostModalAction(state))
    };

    const onChange=(e)=>{
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(formValue);
        const {name, posting}=formValue;
        if(!name || !posting) {
            validateErrorForm(true);
        } else {
            validateErrorForm(false);
            addPost({
                id: uuidv4(),
                name,
                posting,
                date: moment()
            });
            closeModal(false);
        };
    };

  return (
    <Form onChange={onChange} onSubmit={onSubmit} >
        <Form.Group>
            <Form.Control type='text' name='name' placeholder='Autor' autoComplete='off' />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control 
                as='textarea'
                name='posting'
                placeholder='Escribe aquí (:'
                rows={3}
            />
        </Form.Group>
        <Button type='submit' variant='dark' >
            Enviar Post
        </Button>
        {
            valueFormError && (
                <Alert variant='danger' className='mt-4'>
                    Completa todos los campos (:
                </Alert>
            )
        }
    </Form>
  );
};

export default Formulario;