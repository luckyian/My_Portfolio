import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
  return (
    <div>
      <div className="mt-5">
        <div className="p-5">
          <Card>
            <Card.Body>
              <Card.Title><u>About Me</u></Card.Title>
              <div className="float-left" >
                <Card.Img src="../assets/Ian.jpg" className="p-2" alt="Ian Wren"></Card.Img>
              </div>
              <div>
             <p> My name is Ian Wren and I live in Seattle, WA.  I am 38 years old and
                attend the University of Washington's full-stack coding bootcamp.
             <br></br>
             I am looking to have a career as software developer with a focus on web
             development. I currently work in retail where I have been in management
             and trained, developed and coached associates to reach thier highest potential.
             <br></br>
             I am switching careers now to a vocation that challenges me on different
             levels and allows me more time to spend with my loved ones, including my wife and
             two feline fur-babies.
             <br></br>
             Some of my hobbies include playing video games, gardening, home improvement on my current
             residence, hiking, trying new foods and drinks and travelling.  My youngest fur baby, Fox "Spooky" Mulder
             enjoys travelling with my wife, Drea, and I and he also enjoys hikes while on a leash.
             </p>
             <br></br>
             <p>
                  <h3><u>Contact Info</u></h3>
                  <h4>Email: ian.wren81@gmail.com</h4>
                  <h4>Phone: Contained in Resume</h4>
                  <h4><Link href="https://drive.google.com/file/d/1repu1_TLSkM5UwfJFO3LysVLink6wazq6Is/view?usp=sharing">Resume</Link></h4>
                  <h4>
                    <Link href="https://linkedin.com/in/ian-wren-53b382112">LinkedIn</Link>
                  </h4>
                  <h4>
                    <Link href="https://github.com/luckyian">GitHub</Link>
                  </h4>

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
