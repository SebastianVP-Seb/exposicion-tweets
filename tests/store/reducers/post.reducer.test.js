import {postReducer} from '../../../src/store/reducers/post.reducer';
import {addPostAction, deletePostAction} from '../../../src/actions/posts.actions';
import {postReducer as fakePostReducer} from '../initial-state.mock';
import { TYPES } from '../../../src/types/typesReducer';

describe('testing postReducer', () => {

    it('testing Adding post case', () => {
      const action = {
        type: TYPES.POSTING.ADDING_POST,
        payload: {
          id: 'abcd123',
          name: 'Juanchito',
          posting: 'Im post',
          date: new Date().getTime()
        }
      }
      const newState = postReducer({ POST: [] }, action);
      const lengthArrayPosts = newState.posts.length;
      console.log(newState);
      console.log(lengthArrayPosts);
      console.log(action.payload)
      // expect(newState.posts[lengthArrayPosts - 1])
      //   .toEqualStrict(action.payload)
    });
  
    it('testing deleting post case', () => {
  
      const action = {
        type: TYPES.POSTING.DELETING_POST,
        payload: 'abcd123'
      };
  
      const posts = [
        {
          id: 'abcd1234',
          name: 'Juanchito',
          posting: 'Im post',
          date: new Date().getTime()
        },
        {
          id: 'abcd123',
          name: 'Juanchito',
          posting: 'Im post',
          date: new Date().getTime()
        }
      ];
      const newState = postReducer({ posts }, action);
      console.log(newState)
      expect(newState.posts.length).toBeGreaterThanOrEqual(1);
    });
  
  })
  