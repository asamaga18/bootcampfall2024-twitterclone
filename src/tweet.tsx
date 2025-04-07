// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

function Tweet(props) {

    const [liked, setLiked] = useState(false);
    const like = "❤️"
    const unlike = "🤍"

    return (
        <>
            <div className = "tweet">
                <h3 className = "handle">@{props.handle}</h3>
                <h4 className = "content">{props.content}</h4>
                <h6 className = "time">{props.time} ago</h6>
                <div className = "likes">
                    {liked? <button onClick={()=>setLiked(!liked)}>{like}</button> : <button onClick={()=>setLiked(!liked)}>{unlike}</button>}
                    {liked? <h6>{props.likes + 1} likes</h6> : <h6>{props.likes} likes</h6>}
                </div>


            </div>
        </>
    )
}

export default Tweet;
