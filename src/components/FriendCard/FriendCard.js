import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <a onClick={() => props.shuffleFriend(props.id)} className="shuffle">
  <div className="card bg-dark">
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
    </a>
);

export default FriendCard;
