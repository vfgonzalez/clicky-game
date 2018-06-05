import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    // topScore=0,
    // currentScore=0,
    // chosen=[],
    // images=[]
  };

  

  

  shuffleFriends = (id) => {

    let a = this.state.friends;
 
    // console.log("this.state.images is equal to" + a)
 
    // shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
 
    this.setState({ friends: a });

    // console.log(this.state.friends.id);
    
  }
  


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
    <Title>Toy Story Fun!</Title>
        {this.state.friends.map(friend => (
        
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
