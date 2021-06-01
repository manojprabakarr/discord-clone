import React,{useState,useEffect} from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Avatar } from "@material-ui/core";
import HeadsetIcon from "@material-ui/icons/Headset";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebarchannel from './sidebarchannel'
import './sidebar.css'
import {auth} from '../firebase';
import db from '../firebase'
import  {Selectuser} from '../features/userslice';
import {useSelector} from 'react-redux'

function Sidebar() {
  const user = useSelector(Selectuser);
  const [channels,setchannels]=useState([]);
  

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setchannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const Logout=()=> {
    auth.signOut();
 }

 const handlechannel=()=> {
   const channelname=prompt("add channel name");
   if(channelname){
     db.collection("channels").add({
       channelname:channelname,
     })
   }
 }

    return (
        <div className="sidebar">
            <div className="sidebarheader">
        <h3>Manoj Prabakar</h3>
         <ExpandMoreIcon />
      </div>
      <div className="sidebarchannels">
        <div className="sidebarchannelsHeader">
          <div className="sidebarchannelHeader">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handlechannel}  className="sidebaraddChannel" />
        </div>
        <div className="sidebarchannelList">
         
            {channels.map(({id,channel})=>(
              <Sidebarchannel key={id} id={id} channel={channel.channelname}/>
            ))}
         
        </div>
      </div>
      <div className="sidebarvoice">
        <SignalCellularAltIcon className="sidebarvoiceIcon" fontSize="large" />
        <div className="sidebarvoiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebarvoiceIcon">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebarprofile">
        <Avatar
          className="userimage"
          src={user.photo}
          onClick={Logout}
         
         
        />
        <div className="sidebarprofileInfo">
          <h3>{user.displayName}</h3>
          <p>{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebarprofileIcon">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
        </div>
    )
}

export default Sidebar
