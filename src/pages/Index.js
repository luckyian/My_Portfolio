import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Index() {
 
  
  
  return (


    <div>
      <div className="mt-5">
        <div className="p-5">
          <Card className="aboutBack">
            <Card.Body>
              <Card.Title><h1><u>About Me</u></h1></Card.Title>
              <div className="float-left" >
                <Card.Img src="./assets/Ian.jpg" className="p-2" alt="Ian Wren"></Card.Img>
              </div>
              <div>
             <p><h4> My name is Ian Wren and I live in Seattle, WA.  I
                am looking for work as a front-end or full-stack developer.  I enjoy learning new 
                technologies and enjoy math and science.
             <br></br>
             <br></br>
             I am looking expand my career as software developer with a focus on web based development, and would love to explore more options. I currently work freelance for individuals and groups to design, build and deploy websites. My current projects include
             a website for a baker in western Washington state, and developing several projects with new technologies to keep my skills sharp.
             <br></br>
             <br></br>
             I would like to work full-time for a software firm that allows me more time to spend with my loved ones, including my spouse and
             two feline fur-babies.
             <br></br>
             <br></br>
             Some of my hobbies include playing video games, gardening, home improvement on my current
             residence, hiking, trying new foods and drinks and travelling.  My youngest fur baby, Fox "Spooky" Mulder
             enjoys going on walks or adventures around the neighborhood on his leash.
             </h4></p>
             <br></br>
             <br></br>
             <br></br>
             <p>
                  <h2><u>Contact Info</u></h2>
                  <br></br>
                  <h3>Email: ian.wren81@gmail.com</h3>
                  <h3>Phone: Contained in Resume</h3>
                  <h3><a href="https://1drv.ms/b/s!AnD0ThTIlXlzg4RLgi7JB7s5Z0fHoQ?e=4CyJ0z">Resume</a></h3>
                  <h3>        
                    <a href="https://www.linkedin.com/in/ian-wren/">LinkedIn</a>
                  </h3>
                  <h3>
                    <a href="https://github.com/luckyian">GitHub</a>
                  </h3>

              </p>

            </div>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>








  );
}

export default Index;
