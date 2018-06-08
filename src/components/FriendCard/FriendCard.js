import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  
  <div onClick={(e) =>{
    // console.log(e.target);
    
    props.shuffleFriends(e)}} className="card bg-dark" id={props.id}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
       
      </ul>
    </div>
      
  </div>
    
);

export default FriendCard;
