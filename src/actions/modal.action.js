import { TYPES } from "../types/typesReducer";

//actualizará el estado del modal en true o false
export const openCloseAddPostModalAction=state=>{

    return {
        type: TYPES.MODAL.ADD_POST,
        payload: state
    };
};