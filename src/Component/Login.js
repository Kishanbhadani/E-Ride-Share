import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
  let msgclass = ["text-center"];
  if (props.type) {
    msgclass.push("text-success")
  } else {
    msgclass.push("text-danger")
  }

  const goTOTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <section className="text-center">
      <div className="p-5 bg-image part1"></div>

      <div className="card mx-4 mx-md-5 shadow-5-strong part2 ">
        <p>Not Register ? <Link to="/registation" style={{ color: "blue" }}>Registation</Link> </p>

        <div className="card-body py-5 px-md-5">

          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="font-weight-bold mb-5 formTitle">Login Form</h2>
              <p className={msgclass.join(" ")}>{props.message}</p>
              <form onSubmit={props.submit}>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" name='email' placeholder='Email Address' className="form-control" />
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" name='password' placeholder='Password' className="form-control" />
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>


                <button type="submit" className="btn btn-primary btn-block mb-4 bg-primary">
                  Log in
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
          <Link to='/'>
            <button className='btn setBackHome pl-4 pr-4 mt-4' onClick={goTOTop}>GO TO HOME</button>
          </Link>
        </div>
      </div>
    </section>

  );
}

export default Login;
