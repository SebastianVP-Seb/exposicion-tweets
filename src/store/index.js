import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { getLocalStorage, setStateLocalStorage } from '../utils/localStorage';
import { rootReducers } from './rootReducer';

// const localStorageState=getLocalStorage();

//el initialState se pasa para hacer los tests con el store, y se exporta el configureStore
export const configureStore = (initialState) => {
  
  const isDevelopment = process.env.ENVIROMENT === 'development';

  const middleware = [thunk];
  const middlewareEnhacer = applyMiddleware(...middleware);
  const enhacers = [ middlewareEnhacer ];

  const composeEnchancers = isDevelopment ? composeWithDevTools(...enhacers) : compose(...enhacers);
  return createStore(rootReducers, initialState, composeEnchancers);
}

const store = configureStore();

export default store ;

// import {createStore} from 'redux';

// const localStorageState=getLocalStorage();

// const store=createStore(
//   rootReducers, 
//   localStorageState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

//   store.subscribe(()=>{
//     setStateLocalStorage({
//       posts: store.getState().postReducer
//     });
//   })
  
// export default store;


