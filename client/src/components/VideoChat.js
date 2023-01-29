import React, { useState, useCallback } from 'react';
import Room from './Room';
import Button from 'react-bootstrap/Button'

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('3dd23d98-7f61-48cd-acc1-73342b7e919c');
  const [token, setToken] = useState(null);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const data = await fetch('/video/token', {
        method: 'POST',
        body: JSON.stringify({
          identity: 'aarushi',
          room: '3dd23d98-7f61-48cd-acc1-73342b7e919c'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res)
        return (
          res.json()
        )
      });
      setToken(data.token);
    },
    [roomName, username]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  return (
    <>
        <Button onClick={handleSubmit}></Button>
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    </>
  )
};

export default VideoChat;