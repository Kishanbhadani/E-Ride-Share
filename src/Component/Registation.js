import React from 'react';
import {Link} from 'react-router-dom';

function Registation(props) {
  let msgclass = ["text-center"];
    if(props.type){
        msgclass.push("text-success")
    } else{
        msgclass.push("text-danger")
    }

    return (
        <section className="text-center">
        <div className="p-5 bg-image part1"></div>
        
        <div className="card mx-4 mx-md-5 shadow-5-strong part2">
        <p>Alredy Register? <Link to="/login" style={{color: "blue"}}>Log in</Link> </p>
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="font-weight-bold mb-5 formTitle">Registater Form</h2>
                <p className={msgclass.join(" ")}>{props.message}</p>
                <form onSubmit={props.submit}>
                <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example1">First name</label>
                        <input type="text" id="form3Example1" placeholder='Enter First name' className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example2">Last name</label>
                        <input type="text" id="form3Example2" placeholder='Enter Last name' className="form-control" />
                        </div>
                    </div>
                  </div>
        
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" name='email' placeholder='Email Address' className="form-control" />
                  </div>
        
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" name='password' placeholder='Password' className="form-control" />
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" name='conPassword' placeholder='Confirm Password' className="form-control" />
                  </div>
        
                  <div className="form-check d-flex justify-content-center mb-4">
                  <input type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                  </div>
        
                  
                  <button type="submit" className="btn btn-primary btn-block mb-4 bg-primary">
                    Registation
                  </button>
        
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <a href='https://www.facebook.com/login/'>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button></a>

                  <a href='https://accounts.google.com/signin'>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button></a>

                  <a href='https://twitter.com/i/flow/login'>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button></a>

                  <a href='https://github.com/login'>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
    );
}

export default Registation;
