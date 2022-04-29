import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {deletePostAction} from '../../actions/posts.actions';
import MessageEmpty from '../message/MessageEmpty';

const CardList = () => {

    const {postReducer}=useSelector(state=>state)

    console.log(postReducer.posts);

    const posts=useSelector(state=>state.postReducer.posts);
    if(posts.length<=0) {
        console.log('no hay')
    } else {
        console.log(posts);
    }

  return (
      <>
        {
          postReducer.posts.length<=0 ? (<MessageEmpty />) 
          : (posts.map((item)=><Posting key={item.id} item={item} />))
        }
    </>
    );
};

const Posting=({item})=>{

    const dispatch=useDispatch();

    const deletePost=(id)=>{
        dispatch(deletePostAction(id))
    };

    return (
        <Card className='mb-3' >
            <Card.Body>
                <Card.Title>
                    {item.name}
                </Card.Title>
                <Card.Text>
                    {item.posting}
                </Card.Text>
                <Button variant='dark' onClick={()=>deletePost(item.id)} >Eliminar</Button>
            </Card.Body>
        </Card>
    )
};

export default CardList;