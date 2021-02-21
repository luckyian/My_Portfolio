import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Project from "../components/Project";

class Portfolio extends Component {
  state = {
    projects: [],
    error: ""
  };

  // // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div class="card" id="portfolioCard">
        <div class="card-body" style="text-decoration-color: whitesmoke;">
          <h1 style="text-decoration-color: whitesmoke;" class="card-title">Portfolio</h1>
          <table class="table table-striped table-responsive align-middle">
            <thead>
              <tr>
                <th scope="col" class="table-dark">Project</th>
                <th scope="col" class="table-dark" id="tabletop">Example</th>
                <th scope="col" class="table-dark">Description/Github Repo</th>
              </tr>
            </thead>
            <tbody>
              <Project/>
            </tbody>

          </table>

        </div>
      </div>

      // <div>
      //   <Container style={{ minHeight: "80%" }}>
      //     <h1 className="text-center">Search By Breed!</h1>
      //     <Alert
      //       type="danger"
      //       style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
      //     >
      //       {this.state.error}
      //     </Alert>
      //     <SearchForm
      //       handleFormSubmit={this.handleFormSubmit}
      //       handleInputChange={this.handleInputChange}
      //       breeds={this.state.breeds}
      //     />
      //     <SearchResults results={this.state.results} />
      //   </Container>
      // </div>
    );
  }
}

export default Portfolio;
