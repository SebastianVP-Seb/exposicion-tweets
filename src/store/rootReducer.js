import { combineReducers } from 'redux';
import { modalReducer } from './reducers/modal.reducer';
import { validationReducer } from './reducers/validation.reducer';
import { postReducer } from './reducers/post.reducer';

const reducers = {
  modalReducer,
  validationReducer,
  postReducer,
};

export const rootReducers = combineReducers(
  reducers
);
