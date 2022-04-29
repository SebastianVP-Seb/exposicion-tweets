import { TYPES } from "../../types/typesReducer";

const initialState= {
    modalAddPost: false
};

//el payload es el valor del nuevo estado
export const modalReducer=(state=initialState, action)=>{
    switch(action?.type) {
        case (TYPES.MODAL.ADD_POST):
            return {
                ...state, 
                modalAddPost: action.payload
            };
        default:
            return state;
    };
};