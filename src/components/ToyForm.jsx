import React, { Component } from 'react';

class ToyForm extends Component {

  handleSubmit(event) {
    event.preventDefault()
    const toy = {
      name: event.target.name.value,
      image: event.target.image.value,
    }
    fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(toy)
    })
  
  }



  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
