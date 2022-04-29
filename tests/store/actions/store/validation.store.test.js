import {validationAddPostAction} from '../../../../src/actions/validation.action';
import {configureStore} from '../../../../src/store/index';

describe('testing de validation store redux', ()=>{

    test('actualización de store en validation', ()=>{
        const payload=true;
        const store=configureStore();
        console.log(store.getState());
        const beforeState=store.getState();
        //El dispatch se encargará de mandar la acción para actualizar el estado
        store.dispatch(validationAddPostAction(payload));
        const afterState=store.getState();
        console.log(store.getState());

        //el estado ha cambiado, se ha actualizado
        expect(afterState.validationReducer.errorFormPost).toStrictEqual(payload);
        //el estado no es igual al estado inicial
        expect(beforeState.validationReducer.errorFormPost).not.toStrictEqual(payload);
    });
});