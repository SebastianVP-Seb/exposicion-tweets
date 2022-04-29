import {validationAddPostAction} from '../../../src/actions/validation.action';
import {TYPES} from '../../../src/types/typesReducer';
import {storeMock} from '../store.mock';

describe('testing de validation.action', ()=>{
    test('validation', ()=>{

        const store=storeMock();
        const state=true;

        store.dispatch(validationAddPostAction(state));

        const [actionValidationAddPost]=store.getActions();
        expect(actionValidationAddPost.type).toStrictEqual(TYPES.VALIDATION.FORM_ADD_POST);
    });
});