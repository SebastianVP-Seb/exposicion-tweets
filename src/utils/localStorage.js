import React from 'react';
import MessageEmpty from "../components/message/MessageEmpty";

export const getLocalStorage=()=>{
    const postsStorage=localStorage.getItem('posts');
    if(postsStorage===null) {
        // return null;
        console.log('there is not data')
        // return (
        //      <MessageEmpty />
            
        // );
    } else {
        return JSON.parse(postsStorage);
    };
};

export const setStateLocalStorage=(state)=>{
    localStorage.setItem('posts', JSON.stringify(state));
};