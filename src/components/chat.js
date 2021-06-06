import React,{useState,useEffect} from 'react'
import Message from './message';
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
import './chat.css'
import {selectChannelName,selectChannelId} from '../features/appslice'
import {useSelector} from 'react-redux'
import {Selectuser} from '../features/userslice';
import db from '../firebase';
import firebase from 'firebase'



function Chat() {
  const user = useSelector(Selectuser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setinput] = useState("");
  const [message,setmessage]=useState([]);
  

  const handleInputChange = (e) => {
    setinput(e.target.value);
  };
  

  useEffect(()=> {
    if(channelId){
      db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setmessage(snapshot.docs.map((doc) => doc.data()))
    );
    }

  },[channelId]);

  const Sendmessage=(e)=> {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message:input,
      user:user,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setinput("");


  }
 


  return (
    <div className="chat">
      <div className="chatheader">
        <div className="headerleft">
        <h3>
            <span className="headerhash">#</span>
            {channelName}
          </h3>

        </div>
        <div className="headerright">
        <NotificationsIcon />
          <EditLocationRoundedIcon />
          <PeopleAltRoundedIcon />

          <div className="headersearch">
            <input type="text" placeholder="Search" />
            <SearchRoundedIcon />
          </div>

          <SendRoundedIcon />
          <HelpRoundedIcon />

        </div>
      </div>

      <div className="chatmessages">
      {message.map((messages)=>(
          <Message
          timestamp={messages.timestamp}
          message={messages.message}
          user={messages.user}/>
        ))}

      </div>


      <div className="chatinput">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
           disabled={!channelId}
            onChange={handleInputChange}
            type="text"
            placeholder={`Message #Youtube`}
          />
          <button onClick={Sendmessage} type="submit" className="inputbutton">
            send message
          </button>
        </form>
        <div className="inputicons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
     

    </div>
  )

}
export default Chat
