import React, { Component } from "react";
import Card from "../components/Card";


class Contact extends Component {







  // state = {
  //   image: "",
  //   match: false,
  //   matchCount: 0
  // };

  // // When the component mounts, load the next dog to be displayed
  // componentDidMount() {
  //   this.loadNextDog();
  // }

  // handleBtnClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };

  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;

  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  //   this.setState(newState);
  //   this.loadNextDog();
  // };

  // loadNextDog = () => {
  //   API.getRandomDog()
  //     .then(res =>
  //       this.setState({
  //         image: res.data.message
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (


      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Contact</h1>



          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1"
                placeholder="Jane Doe"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com"></input>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comments/Questions</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>


    );
  }
}

export default Contact;
