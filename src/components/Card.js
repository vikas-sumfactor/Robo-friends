import React from 'react';
 
const Card = (props)=>{
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
        {/* <h1>RoboFriends</h1> */}
        <div>
            <img alt='roboto' src={`https://robohash.org/${props.id}?1000*1000`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        </div>
    );
}

export default Card;