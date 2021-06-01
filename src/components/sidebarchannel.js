import React from 'react'
import './sidebarchannel.css'


function Sidebarchannel({id,channel}) {
  
  

    return (
        <div className="sidebarchannel"
       
       >
             <h4>
        <span className="channelhash">#</span>
        {channel}
      </h4>
            
        </div>
    )
}

export default Sidebarchannel
