import React from 'react';
import {mount} from 'enzyme';
import { Provider } from "react-redux";
// import {storeMock} from './store/store.mock';
import {validationAddPostAction} from '../src/actions/validation.action';
import Formulario from '../src/components/formulario/Formulario';
import {configureStore} from '../src/store/index'

describe('test de render component', ()=>{

    test('debería mostrar un mensaje de error', ()=>{

            // const store=storeMock();
            const store=configureStore();

            const wrapper=mount(
                <Provider store={store}>
                    {/* <Menu /> */}
                    <Formulario />
                    {/* <ModalComponent /> */}
                </Provider>
            );

        console.log(wrapper.debug());
        console.log(store.getState());
        

        const payload=true;
        store.dispatch(validationAddPostAction(payload));

        // console.log(store.getActions());
        console.log(store.getState());
        
        wrapper.find('button').invoke('onClick')().then(()=>{
            console.log('holaaa')
        })
        console.log(wrapper.debug());
        
        // const textoDiv=wrapper.find('div.alert-danger').text();

        // expect(wrapper.find('.modal-title.h4').text('Crea un post (:'));
        // expect(wrapper.find('div.alert-danger').text()).toEqual('Completa todos los campos (:');
    });
});