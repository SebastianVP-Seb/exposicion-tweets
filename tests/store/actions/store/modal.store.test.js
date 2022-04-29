import {openCloseAddPostModalAction} from '../../../../src/actions/modal.action';
import {configureStore} from '../../../../src/store/index';

describe('testing de modal store redux', ()=>{
    test('debería hacer el store del moda', ()=>{
        const payload=true;
        const store=configureStore();
        console.log(store.getState());
        const beforeState=store.getState();
        //el dispatch se encargará de actualizar el estado
        store.dispatch(openCloseAddPostModalAction(payload));
        const afterState=store.getState();
        console.log(store.getState());

        //el estado ha cambiado
        expect(afterState.modalReducer.modalAddPost).toStrictEqual(payload);
        //que no sea igual a su estado inicial
        expect(beforeState.modalReducer.modalAddPost).not.toStrictEqual(payload);
    });
});