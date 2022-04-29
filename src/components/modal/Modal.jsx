import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import './modal.scss';
import {useDispatch, useSelector} from 'react-redux';
import { openCloseAddPostModalAction } from '../../../src/actions/modal.action';

const ModalComponent = ({children}) => {
    //los children se renderizarán dentro del modal

    const dispatch=useDispatch();

    const closeModal=state=>{
        dispatch(openCloseAddPostModalAction(state));
    };

    //useSelector, permite acceder a un valor en el store
    const isOpenModal=useSelector(state=>state.modalReducer.modalAddPost);

  return (
    <Modal
        show={isOpenModal}
        onHide={()=>closeModal(false)}
        centered    
    >
        <Modal.Header closeButton>
            <Modal.Title>Crea un post (:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;