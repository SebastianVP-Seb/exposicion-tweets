import { TYPES } from "../types/typesReducer";

export const addPostAction=(state)=>{
    return {
        type: TYPES.POSTING.ADDING_POST,
        payload: state
    };
};

export const deletePostAction=(id)=>{
    return {
        type: TYPES.DELETING.DELETING_POST,
        payload: id
    };
};