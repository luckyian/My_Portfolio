import React, { Component } from "react";
import Container from "../components/Container";
import Project from "../components/Project";
import data from "../data/projects.json"

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
              <Project      _id={data.projects[0]._id}
                            cardTitle={data.projects[0].cardTitle}
                            cardText={data.projects[0].cardText}
                            src={data.projects[0].src}
                            alt={data.projects[0].alt}
                            github={data.projects[0].github}
                            project={data.projects[0].project}
                            />
              
              <Project      _id={data.projects[1]._id}
                            cardTitle={data.projects[1].cardTitle}
                            cardText={data.projects[1].cardText}
                            src={data.projects[1].src}
                            alt={data.projects[1].alt}
                            github={data.projects[1].github}
                            project={data.projects[1].project}
                            />

              <Project      _id={data.projects[2]._id}
                            cardTitle={data.projects[2].cardTitle}
                            cardText={data.projects[2].cardText}
                            src={data.projects[2].src}
                            alt={data.projects[2].alt}
                            github={data.projects[2].github}
                            project={data.projects[2].project}
                            /> 

              <Project      _id={data.projects[3]._id}
                            cardTitle={data.projects[3].cardTitle}
                            cardText={data.projects[3].cardText}
                            src={data.projects[3].src}
                            alt={data.projects[3].alt}
                            github={data.projects[3].github}
                            project={data.projects[3].project}
                            />
              
              <Project      _id={data.projects[4]._id}
                            cardTitle={data.projects[4].cardTitle}
                            cardText={data.projects[4].cardText}
                            src={data.projects[4].src}
                            alt={data.projects[4].alt}
                            github={data.projects[4].github}
                            project={data.projects[4].project}
                            />
              
              <Project      _id={data.projects[5]._id}
                            cardTitle={data.projects[5].cardTitle}
                            cardText={data.projects[5].cardText}
                            src={data.projects[5].src}
                            alt={data.projects[5].alt}
                            github={data.projects[5].github}
                            project={data.projects[5].project}
                            /> 
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
