import {addPostAction} from '../../../../src/actions/posts.actions';
import {configureStore} from '../../../../src/store/index';

describe('testing de post.store redux', ()=>{

    test('test para agregar un post', ()=>{
        const state={
            id: 'uuidv4()',
            name: 'Seb',
            posting: 'Ejemplo de un post',
            date: 32353646
        };

        const store=configureStore();
        console.log(store.getState());
        const beforeState=store.getState();
        //el dispatch se encargará de actualiar el estado
        store.dispatch(addPostAction(state));
        const afterState=store.getState();
        console.log(store.getState().postReducer.posts);

        //Se comprueba que el estado ha cambiado
        expect(afterState.postReducer.posts[0]).toStrictEqual(state);
        //que no sea igual al estado inicial
        expect(beforeState.postReducer.posts).not.toStrictEqual(state);
    });
});