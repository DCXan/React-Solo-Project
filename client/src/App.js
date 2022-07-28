import './App.css';
import React from 'react'
import io from 'socket.io-client'
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3001')

function App() {

  // Room State
  const [room, setRoom] = useState('')

  // Messages State
  const [message, setMessage] = useState('')
  const [messageDisplay, setMessageDisplay] = useState('')

  const roomInput = (e) => {
    setRoom(e.target.value)
  }

  const joinRoom = () => {
    if (room !== '') {
      socket.emit("join_room", room)
    }
  }

  const messageInput = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    socket.emit("send_message", {message, room})
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageDisplay(data.message)
    })
  }, [socket])

  return (
    <div className="App">
      <div>
        <input onChange={roomInput} placeholder="Select Room" name='room'/>
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <div>
        <input onChange={messageInput} placeholder="Message" name='message'/>
        <button onClick={sendMessage}>Send Message</button>
      </div>
      <h1>Message History</h1>
      <h4>{messageDisplay}</h4>
    
    </div>
  );
}

export default App;
