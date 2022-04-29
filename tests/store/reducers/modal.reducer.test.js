import {modalReducer} from '../../../src/store/reducers/modal.reducer';
import {openCloseAddPostModalAction} from '../../../src/actions/modal.action';
import {modalReducer as fakeModalReducer} from '../initial-state.mock';

describe('testing de modal.reducer', ()=>{

    test('modal.reducer TYPES.MODAL.ADD_POST', ()=>{
        const initialState= {
            modalAddPost: false
        };
        const newAction=openCloseAddPostModalAction(initialState);
        const newState=modalReducer(fakeModalReducer, newAction);
        // console.log(newAction.payload);
        // console.log(newState.modalAddPost);
        expect(newState.modalAddPost).toStrictEqual(newAction.payload);
    });

    test('default case', ()=>{
        const newAction={type: 'defaul case', payload:{}};
        const newState=modalReducer(fakeModalReducer, newAction);

        expect(newState).toStrictEqual(fakeModalReducer);
        // console.log(newState);
        console.log(fakeModalReducer);

        expect(newState).not.toEqual(newAction.payload);
        // console.log(newAction.payload);
    });

    test('inicialización a través de props', ()=>{

        const initialState= {
            modalAddPost: false
        };

        const newAction={type: 'state undefined', payload:{}};
        // const newAction={};
        // const newAction=[];
        // const newAction=null;
        // const newAction=undefined;
        //Proteger reducer con ?.

        const newState=modalReducer(undefined, newAction);

        expect(newState).toStrictEqual(initialState);
        expect(newState).not.toEqual(newAction.payload);
        // expect(newState).toBeGreaterThanOrEqual();

        console.log(newState);
        console.log(initialState);
    });
});