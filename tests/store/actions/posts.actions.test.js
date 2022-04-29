import {addPostAction, deletePostAction} from '../../../src/actions/posts.actions';
import {TYPES} from '../../../src/types/typesReducer';
import {storeMock} from '../store.mock';

describe('testing de post.actions.js', ()=>{

    test('add post', ()=>{

        const store=storeMock();
        const payload={
            id: 'uuidv4()',
            name: 'Seb',
            posting: 'Ejemplo de post',
            date: 23534534
        };

        // console.log(store.getActions());
        store.dispatch(addPostAction(payload));
        console.log(store.getActions());
        const [actionAddPost]=store.getActions();

        expect(actionAddPost.type).toStrictEqual(TYPES.POSTING.ADDING_POST);
        expect(actionAddPost).toMatchObject({type: TYPES.POSTING.ADDING_POST, payload: {
            id: 'uuidv4()',
            name: 'Seb',
            posting: 'Ejemplo de post',
            date: 23534534
        }})
    });

    test('delete post', ()=>{
        const store=storeMock();
        const payload=5;

        // console.log(store.getActions());
        store.dispatch(deletePostAction(payload));
        // console.log(store.getActions());
        const [actionDeletePost]=store.getActions();

        expect(actionDeletePost.type).toStrictEqual(TYPES.DELETING.DELETING_POST);
    });
});