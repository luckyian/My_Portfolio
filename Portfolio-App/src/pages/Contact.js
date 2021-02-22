import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {

  return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Contact</h1>



          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"
                placeholder="Jane Doe"></input>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com"></input>
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Comments/Questions</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>


    );
  
}

export default Contact;
