import React,{useState,useEffect} from 'react'
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifIcon from "@material-ui/icons/Gif";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import Message from './message';
import './chat.css'
import firebase from 'firebase';
import db from '../firebase';
import {useSelector} from 'react-redux';
import {selectchannelId,selectchannelname} from '../features/appslice';
import {Selectuser} from '../features/userslice';


function Chat() {
  const user = useSelector(Selectuser);
  const channelId=useSelector(selectchannelId);
  const channelname= useSelector(selectchannelname);
  const [input, setInput] = useState("");
  
  

  


 
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
    return (
        <div className="chat">
              <div className="chat_header">
        <div className="chat_headerLeft">
          <h3>
            <span className="chatHeader_hash">#</span>
            channelname
          </h3>
        </div>
        <div className="chat_headerRight">
          <NotificationsIcon />
          <EditLocationRoundedIcon />
          <PeopleAltRoundedIcon />

          <div className="chat_headerSearch">
            <input type="text" placeholder="Search" />
            <SearchRoundedIcon />
          </div>

          <SendRoundedIcon />
          <HelpRoundedIcon />
        </div>
      </div>
      {/* chat messages */}
      <div className="chat_messages">
       
          <Message
           
          />
       
      </div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
          
            onChange={handleInputChange}
            type="text"
            placeholder={`Message #Youtube`}
          />
          <button   type="submit" className="input_button">
            send message
          </button>
        </form>
        <div className="input_icons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
            
        </div>
    )
}

export default Chat
