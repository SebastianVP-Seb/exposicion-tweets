import { TYPES } from "../../types/typesReducer";

const initialState={
    posts: []
};

export const postReducer=(state=initialState, action)=>{
    switch (action.type) {
        case TYPES.POSTING.ADDING_POST:
            return {
                ...state, 
                posts: [...state.posts, action.payload]
            };

        case TYPES.DELETING.DELETING_POST:
            return {
                ...state,
                posts: state.posts.filter((item)=>item.id !== action.payload)
            };
    
        default:
            return state
    };
};