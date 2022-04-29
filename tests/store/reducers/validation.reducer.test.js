import { validationAddPostAction } from '../../../src/actions/validation.action';
import {validationReducer} from '../../../src/store/reducers/validation.reducer';
import {validationReducer as fakeValidationReducer} from '../initial-state.mock';

describe('testing de validation.reducer', ()=>{

    test('debería actualizar el valor del estado', ()=>{

        const initialState={
            errorFormPost: false
        };

        const payload=true;
        const newAction=validationAddPostAction(initialState);
        console.log(newAction);
        const newState=validationReducer(fakeValidationReducer, newAction);
        console.log(newState);
        expect(newState.errorFormPost).toStrictEqual(newAction.payload);
    });

    test('default case', ()=>{
        const newAction={type: 'default case', payload:{}};
        const newState=validationReducer(fakeValidationReducer, newAction);
        expect(newState).not.toEqual(newAction.payload);
        expect(newState).toStrictEqual(fakeValidationReducer);
    });

    test('inicialización a través de props', ()=>{
        const initialState={
            errorFormPost: false
        };
        const newAction={type: 'state undefined', payload:{}};
        const newState=validationReducer(undefined, newAction);
        expect(newState).toStrictEqual(initialState);
    });
    
});