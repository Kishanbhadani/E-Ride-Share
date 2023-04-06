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
        <section class="text-center">
        <div class="p-5 bg-image part1"></div>
        
        <div class="card mx-4 mx-md-5 shadow-5-strong part2">
        <p>Alredy Register? <Link to="/login" style={{color: "blue;"}}>Log in</Link> </p>
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Registater now</h2>
                <p className={msgclass.join(" ")}>{props.message}</p>
                <form onSubmit={props.submit}>
                <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="form3Example1">First name</label>
                        <input type="text" id="form3Example1" placeholder='Enter First name' class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="form3Example2">Last name</label>
                        <input type="text" id="form3Example2" placeholder='Enter Last name' class="form-control" />
                        </div>
                    </div>
                  </div>
        
                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" name='email' placeholder='Email Address' class="form-control" />
                  </div>
        
                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4" name='password' placeholder='Password' class="form-control" />
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4" name='conPassword' placeholder='Confirm Password' class="form-control" />
                  </div>
        
                  <div class="form-check d-flex justify-content-center mb-4">
                  <input type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                  </div>
        
                  
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Registation
                  </button>
        
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-facebook-f"></i>
                    </button>
        
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-google"></i>
                    </button>
        
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-twitter"></i>
                    </button>
        
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-github"></i>
                    </button>
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