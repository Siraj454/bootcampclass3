import React from 'react';
import Avatar from './avatar';
import NameWithHandle from './namewithhandle';
import Message from './message';
import Time from './time';
import ReplyButton from './replybutton';

function Tweet() {
    return (

    <div className="tweet">
        <Avatar/>
        <div className="content">
            <NameWithHandle/>
            <br></br>
            <Message/>
            <Time/>
        
         </div>
         <div className="buttons">
             <ReplyButton/>
         </div>
    </div>
    );
   }
export default Tweet;   