import { TYPES } from "../../types/typesReducer";

const initialState={
    errorFormPost: false
};

export const validationReducer=(state=initialState, action)=>{
    switch(action.type) {
        case TYPES.VALIDATION.FORM_ADD_POST:
            return {
                ...state,
                errorFormPost: action.payload
            };
        default:
            return state;
    };
};