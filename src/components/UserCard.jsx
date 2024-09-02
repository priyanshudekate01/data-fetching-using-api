import React from "react";

const UserCard = (props) =>{
    console.log(props.data);
    
    return (
        <div className="user-card">
            <img src="" alt="" className="user-image" />
            <h1>{props.data.name.first}</h1>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        </div>
    )
}

export default UserCard;