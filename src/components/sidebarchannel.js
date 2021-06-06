import React from 'react'
import './sidebarchannel.css'
import {setChannelInfo} from '../features/appslice';
import {useDispatch} from 'react-redux'


function Sidebarchannel({id,channel}) {
  const dispatch = useDispatch();
  
  

    return (
        <div className="sidebarchannel"
        onClick={() =>
          dispatch(setChannelInfo({ channelId: id, channelName: channel }))
        }
       >
         
             <h4>
        <span className="channelhash">#</span>
        {channel}
      </h4>
            
        </div>
    )
}

export default Sidebarchannel
