import React from 'react'
import Formulario from '../formulario/Formulario'
import ModalComponent from '../modal/Modal'

const ComponentContainer = () => {
  return (
    <div>
        <ModalComponent>
            <Formulario />
        </ModalComponent>
    </div>
  )
}

export default ComponentContainer