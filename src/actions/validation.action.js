import { TYPES } from "../types/typesReducer";

export const validationAddPostAction=(state)=>{
    return {
        type: TYPES.VALIDATION.FORM_ADD_POST,
        payload: state
    };
};