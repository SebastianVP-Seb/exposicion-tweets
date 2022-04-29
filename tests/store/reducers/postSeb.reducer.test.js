import {postReducer} from '../../../src/store/reducers/post.reducer';
import {addPostAction, deletePostAction} from '../../../src/actions/posts.actions';
import {postReducer as fakePostReducer} from '../initial-state.mock';

describe('testing de post reducer, Seb', ()=>{
    
    test('case TYPES.POSTING.ADDING_POST', ()=>{
        const initialState={
            posts: [{}]
        };

        const payload={
            id: 'uuid()',
            name: 'Seb',
            posting: 'Ejemplo 1',
            date: 44534534
        };

        const newAction=addPostAction(payload);
        // console.log(newAction.payload);
        const newState=postReducer(fakePostReducer, newAction);
        // console.log(fakePostReducer);
        // console.log(newState.posts);
        //verificando que se manda:
        expect(newState.posts[0]).toStrictEqual(newAction.payload);
    });

    test('case TYPES.DELETING.DELETING_POST', ()=>{
        const initialState={
            posts: [
                {
                    id: 5
                }, 
                {
                    id: 6
                }
            ]
        };
        const id=7;
        const newAction=deletePostAction(id);
        console.log(newAction);

        const newState=postReducer(initialState, newAction);
        console.log(newState);
        expect(newState).not.toStrictEqual(newAction);
    });

    test('default case', ()=>{
        const newAction=[]; //no puede ser null o undefined, porque después se preguntaría por el payload
        const newState=postReducer(fakePostReducer, newAction);
        // console.log(newState);
        // console.log(newAction);
        // console.log(fakePostReducer);
        expect(newState).toStrictEqual(fakePostReducer);
    });

    test('inicialización a través de props', ()=>{
        //debería retornar el estado inicial delcarado en el reducer
        const initialState={
            posts: []
        };

        const newAction={};
        const newState=postReducer(undefined, newAction);
        // console.log(newState);
        expect(newState).toStrictEqual(fakePostReducer);
        expect(newState).toStrictEqual(initialState);
    });
    
});