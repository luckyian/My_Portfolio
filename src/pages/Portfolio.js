import React from "react";
import Project from "../components/Project";
import data from "../data/projects.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Portfolio() {


  return (
    
    <Container>
      <Card className="portfolioCard">
        

          <Project _id={data.projects[0]._id}
            cardTitle={data.projects[0].cardTitle}
            cardText={data.projects[0].cardText}
            src={data.projects[0].src}
            alt={data.projects[0].alt}
            github={data.projects[0].github}
            project={data.projects[0].project}
          />
        
      </Card>
      <Card className="portfolioCard">
        

          <Project _id={data.projects[8]._id}
            cardTitle={data.projects[8].cardTitle}
            cardText={data.projects[8].cardText}
            src={data.projects[8].src}
            alt={data.projects[8].alt}
            github={data.projects[8].github}
            project={data.projects[8].project}
          />
        
      </Card>
      <Card className="portfolioCard">
        

        <Project _id={data.projects[7]._id}
          cardTitle={data.projects[7].cardTitle}
          cardText={data.projects[7].cardText}
          src={data.projects[7].src}
          alt={data.projects[7].alt}
          github={data.projects[7].github}
          project={data.projects[7].project}
        />
      
    </Card>
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[1]._id}
            cardTitle={data.projects[1].cardTitle}
            cardText={data.projects[1].cardText}
            src={data.projects[1].src}
            alt={data.projects[1].alt}
            github={data.projects[1].github}
            project={data.projects[1].project}
          />
        
      </Card >
      
      
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[2]._id}
            cardTitle={data.projects[2].cardTitle}
            cardText={data.projects[2].cardText}
            src={data.projects[2].src}
            alt={data.projects[2].alt}
            github={data.projects[2].github}
            project={data.projects[2].project}
          />
        
      </Card >
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[3]._id}
            cardTitle={data.projects[3].cardTitle}
            cardText={data.projects[3].cardText}
            src={data.projects[3].src}
            alt={data.projects[3].alt}
            github={data.projects[3].github}
            project={data.projects[3].project}
          />
        
      </Card >
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[4]._id}
            cardTitle={data.projects[4].cardTitle}
            cardText={data.projects[4].cardText}
            src={data.projects[4].src}
            alt={data.projects[4].alt}
            github={data.projects[4].github}
            project={data.projects[4].project}
          />
        
      </Card >
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[5]._id}
            cardTitle={data.projects[5].cardTitle}
            cardText={data.projects[5].cardText}
            src={data.projects[5].src}
            alt={data.projects[5].alt}
            github={data.projects[5].github}
            project={data.projects[5].project}
          />
        
      </Card >
      <Card className="portfolioCard">
        

        <Project _id={data.projects[6]._id}
          cardTitle={data.projects[6].cardTitle}
          cardText={data.projects[6].cardText}
          src={data.projects[6].src}
          alt={data.projects[6].alt}
          github={data.projects[6].github}
          project={data.projects[6].project}
        />
      
    </Card>
    
    </Container >
    
  );

}

export default Portfolio;
