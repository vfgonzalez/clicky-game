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
    currentScore : 0,
    topScore : 0,
    cardSelected : []
  };

  highScore = () =>{
    if (this.state.currentScore > this.state.topScore){
      this.setState({topScore : this.state.currentScore})
    }
  }
  
  cardSelected = () =>{
    if (this.state.friends.id !== this.cardSelected.find(this.state.friends.id)){
      alert("Sorry, already Chosen!")
      this.setState({currentScore:0})
    }else{
      this.cardSelected.push(this.state.friends.id)
    }
  }

  cardClicked = () =>{
    this.setState({currentScore : this.state.currentScore +1})
    if (this.state.currentScore > this.state.topScore){
      this.setState({topScore : this.state.currentScore})
    }
  }

  handleClick = (e) => {
    this.cardClicked()
    // this.cardSelected()
    // this.highScore()
    this.shuffleFriends()
    console.log();
    

  }

  

  shuffleFriends = () => {

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
    // currentScore= +1
    // console.log(this.state.friends.id);
    
  }
  


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
    <Title
      topScore ={ this.state.topScore}
      currentScore = {this.state.currentScore}
    >Toy Story Fun!</Title>
        {this.state.friends.map(friend => (
          
          
          <FriendCard
            shuffleFriends={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            
          />
      ))}
      </Wrapper>
    );
  }
}

export default App;
