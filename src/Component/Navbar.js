import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light">
      <i className="bi bi-car-front-fill p-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-car-front-fill" viewBox="0 0 16 16">
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
      </svg></i>
      <a className="navbar-brand font-weight-bolder" href="#">
        Ride-Share
      </a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link text-uppercase text-info font-weight-bold" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-info font-weight-bold" to="/How-works">How it works?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-info font-weight-bold" to="/Contact">Contact us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-info font-weight-bold" to="/About">About more</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Link to="/registation"><button className="btn btn-outline-dark my-2 my-sm-0 font-weight-bold" type="submit">Registation</button></Link>
          <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0 m-2 font-weight-bold" type="submit">Login</button></Link>
        </form>
      </div>
    </nav>

  );
}

export default Navbar;