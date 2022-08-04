import React from 'react';
import { sendGif, sendMessage } from '../../services/firebase';
import {  useSelector } from 'react-redux';

const GifList = (props) => {

  const user = useSelector((state) => state.authStatus.user)
    console.log(user)

    const items = props.gifs.map((results, index) => {

      

      return <Item key={index} url={results.url} roomId={props.roomId} user={user} />;
    });
    return <div className="text-container">{items}</div>;
  };



const Item = (props) => {

  const gifClick = (event) => {
    console.log(props.roomId)

    event.preventDefault();
    sendMessage(props.roomId.roomId, props.user, props.url);
    
  }

  return (
    <div className="gif-item">
      <img src={props.url} onClick={gifClick}/>
    </div>
  );
};
export default GifList;