import React, { Component } from 'react';

class ToyCard extends Component {

  

  render() {
    const toy = this.props.toy
    return (
      <div className="card">
        <h2>{toy.name /* Toy's Name */}</h2>
        <img src={toy.image /* Toy's Image */} alt={toy.name /* Toy's Name */} className="toy-avatar" />
        <p>{toy.likes /* Toy's Likes */} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

  handleDonate = event => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "DELETE"
    })
  }

  handleLike = event => {
    let likess = parseInt(this.props.toy.likes)
    likess++
    console.log(likess)
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        likes: likess
      })
    })
  }

}

export default ToyCard;
