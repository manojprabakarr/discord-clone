import React from 'react'
import {Avatar} from '@material-ui/core'
import './message.css'

function Message({message,user,timestamp}) {
    return (
        <div className="message">

<Avatar src={user.photo} />
      <div className="messageinfo">
        <h4>
          {user.displayName}
          <span className="messagetimestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
            
        </div>
    )
}

export default Message
