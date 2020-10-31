import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { useParams } from 'react-router-dom'
import db from './firebase'



function Chat() {

    const [seed , setSeed] = useState('');
    const [input , setInput] = useState('');
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput('');
    };

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [roomId]);

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(
                snapshot => (
                    setRoomName(snapshot.data().name)
                )
            )
        }
    }, [roomId])

    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">
                        yash
                    </span>
                    hey guys
                    <span className="chat__timestamp">
                        6:45 pm
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="Type a message" value={input} 
                    onChange = { (e) => setInput(e.target.value) }  />

                    <button type="submit" onClick={sendMessage} >
                        Send a message
                    </button>
                    
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
