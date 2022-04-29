import {openCloseAddPostModalAction} from '../../../src/actions/modal.action';
import {TYPES} from '../../../src/types/typesReducer';
import {storeMock} from '../store.mock';

describe('testing de modal.action.js', ()=>{

    test('modal action', ()=>{
        const store=storeMock();
        let state=true;

        console.log(store.getActions());
        store.dispatch(openCloseAddPostModalAction(state));

        console.log(store.getActions());
        const [actionOpenCloseModal] = store.getActions();
        expect(actionOpenCloseModal.payload).toStrictEqual(state);

        state=false;
        // store.dispatch(openCloseAddPostModalAction(state));
        console.log(actionOpenCloseModal);
        expect(actionOpenCloseModal.type).toStrictEqual(TYPES.MODAL.ADD_POST);
    });
});