import { openCloseAddPostModalAction } from '../../../src/actions/modal.action';
import React from 'react';
import { useDispatch } from 'react-redux';
import './menu.scss';


const Menu = () => {

  const dispatch=useDispatch();

  //el btn actualiza el estado del modal
  const setOpenCloseModal=(state)=>{
    dispatch(openCloseAddPostModalAction(state));
  };

  const openModal=()=>{
    setOpenCloseModal(true);
  };

  return (
    <div className='menu'>
        <p>Simulador de Tweets</p>
        <button className='menu_btn' onClick={openModal} >
            Crear Post
        </button>
    </div>
  );
};

export default Menu;