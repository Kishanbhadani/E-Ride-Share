import { event } from 'jquery';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home(props) {

  const navigate = useNavigate();

  const state = {
    button: 1
  }

  const routeRideHandler = (e) => {
    e.preventDefault();
    if (state.button === 1) {
      navigate('/findride')
    }
    if (state.button === 2) {
      navigate("/shareride")
    }
  }

  const [SubscribeBtn, SubscribeHandle] = useState(0);

  return (
    <div>
      <div src='../assets/img/hero-banner.png' className='baner_img_main'>
        <div className="card-img-overlay banerCont1">
          <br></br><h3 className="baner_font_text">Your</h3>
          <h3 className="baner_font_text">Super Ride</h3>
          <h3 className="baner_font_text">Awaits!</h3><br></br>
          <p className="card-text">E-Ride share with your Routes destination with lowest cost.</p>
          <p className="card-text">" Welcome to here all "</p><br></br>
          <h3 className="baner_font_text">Take Your Ride</h3><br></br>
          <button type="button" className="btn p-1 pl-3 pr-4 bg-light" onClick={() => { SubscribeHandle(!SubscribeBtn) }}>
            {SubscribeBtn ?

              <div style={{ display: 'flex' }}>
                <p className='pr-2'>Un-Subscribe</p>
                <i className="bi bi-bell-slash-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ display: 'inline-block' }} fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  |<path d="M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                </svg></i>
              </div> :

              <div style={{ display: 'flex' }}>
                <p className='pr-2'>Subscibe Now </p>
                <i className="bi bi-bell-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ display: 'inline-block' }} fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg></i>
              </div>}

          </button>
        </div>
      </div>
      <div className="card">
        <img src="../assets/img/sid1.avif" className="card-img" id="baner" alt="rideshare-banner"></img>
        <div className="card-img-overlay banerCont">
          <h5 className="card-title1">Hello, Everyone</h5>
          <p className="card-text1">The sharing of a car ride and bike by more than one person going to the same
            destination.</p><br></br>
          <p className="card-text1">Welcome for visiting</p>
        </div>
      </div>

      <div className="card container mt-4 mb-4 form-div">
        <div className="card-header">
          Powered by RideShare
        </div>
        <div className="card-body">
          <h5 className="card-title">For a Tour & Travel</h5>
          <form onSubmit={routeRideHandler}>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label >From</label>
                <input type='text' className="form-control" required></input>
              </div>
              <div className="form-group col-md-4">
                <label >To</label>
                <input type='text' className="form-control" required></input>
              </div>
              <div className="form-group col-md-3">
                <label >Date</label>
                <input type='date' className="form-control" required></input>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-3 mb-3">
                <label>State</label>
                <select className="custom-select" required>
                  <option selected disabled value="">Choose...</option>
                  <option>Gujrat</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label >Pin code</label>
                <input type='text' className="form-control" required></input>
              </div>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" required></input>
              <label className="form-check-label" for="disabledFieldsetCheck">
                Terms and Conditions
              </label>
            </div>

            <button type='submit' name='findRide' className='btn btn-primary mr-4 mt-2 bg-primary' onClick={() => { state.button = 1 }}>
              Find A Ride
            </button>
            <button type='submit' name='shareRide' className='btn btn-primary mt-2 bg-primary' onClick={() => { state.button = 2 }}>
              Give A Ride
            </button>
          </form>
        </div>
      </div>

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="card-body Feature ft1">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://cdn.blablacar.com/kairos/assets/images/phishing-b200bc23cc51c0950d45..svg"
                height="200px" alt="..."></img>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Your safety is our priority</h5>
                <p className="card-text">At E-RideShare,were working hard to make our platform as secure as it can
                  be. But when scams do happen, we want you to know exactly how to avoid and report them.
                  Follow our tips to help us keep you safe.</p><br></br>
                <a href="#" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body Feature ft2">
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Driving in your car soon?</h5>
                <p className="card-text">Lets make this your least expensive journey ever.</p>
                <p className='card-text'>we want you to know exactly how to avoid and report them.</p>
                <p className='card-text'>Follow our tips to help us.</p><br></br>
                <a href="#" className="btn btn-primary">Offer a ride</a>
              </div>
            </div>
            <div className="col-md-4">
              <img src="https://cdn.blablacar.com/kairos/assets/images/driver_masks-8bad4a96a1d6cbab177e..svg"
                alt="..." height="200px"></img>
            </div>
          </div>
        </div>
      </div>



      <h3 className='text-center h3_about'><i className="bi bi-hand-thumbs-up ml-5 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
      </svg></i> Help Center</h3>
      <div className="container">
        <div className="card-body part-cnt">
          <div className="row no-gutters">
            <div className="col-md-5">
              <div className="card-body">
                <h6 className="que-title"><i className="bi bi-arrow-right-circle" style={{ float: "left" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle mr-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></i> How do I book a E-ride?</h6>
                <p className="card-text">You can book a carpool ride on our mobile app, or on blablacar.com. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best! Some...</p>
                <a href="#" className="">read more</a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h6 className="que-title"><i className="bi bi-arrow-right-circle" style={{ float: "left" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle mr-3" style={{ float: "left" }} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></i> How do I publish a E-ride?</h6>
                <p className="card-text">Offering a ride on E-RideShare is easy. To publish your ride, use our mobile app or rideshare.com. Indicate your departure and arrival points, the date and time of your departure, how many...</p>
                <a href="#" className="">read more</a>
              </div>
            </div>
          </div><hr></hr>
          <div className="row no-gutters">
            <div className="col-md-5">
              <div className="card-body">
                <h6 className="que-title"><i className="bi bi-arrow-right-circle" style={{ float: "left" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle mr-3" style={{ float: "left" }} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></i> How do I cancel my E-ride?</h6>
                <p className="card-text">If you have a change of plans, you can always cancel your carpool ride from the 'Your rides' section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers...</p>
                <a href="#" className="">read more</a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h6 className="que-title"><i className="bi bi-arrow-right-circle" style={{ float: "left" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle mr-3" style={{ float: "left" }} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></i> What are the benefits of travelling by E-RideShare?</h6>
                <p className="card-text">There are multiple advantages to ride-share, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco...</p>
                <a href="#" className="">read more</a>
              </div>
            </div>
          </div><hr></hr>
          <div className="row no-gutters">
            <div className="col-md-5">
              <div className="card-body">
                <h6 className="que-title"><i className="bi bi-arrow-right-circle" style={{ float: "left" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle mr-3" style={{ float: "left" }} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></i> How much does a E-RideShare cost?</h6>
                <p className="card-text">The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more. It is also up to the driver to decide how much to charge...</p>
                <a href="#" className="">read more</a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h6 className="que-title"><i className="bi bi-arrow-right-circle" style={{ float: "left" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle mr-3" style={{ float: "left" }} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></i> How do I start E-RideShare?</h6>
                <p className="card-text">Offering a car/bike ride on ride-share is easy. To publish your ride, use our mobile app or blablacar.com. Indicate your departure and arrival points, the date and time of your departure, how many...</p>
                <a href="#" className="">read more</a>
              </div>
            </div>
          </div>
        </div><hr></hr>
      </div>


      <h2 className="pHead">Genral Information Describe</h2>
      <div className="pricing">
        <div className="wrapper">
          <div className="table basic">
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">mileage : 17.4 Km/litre</span>
              </li>
              <li>
                <span className="list-name">Vechicle life : 15 year</span>
              </li>
              <li>
                <span className="list-name">Runnig cost per month : Rs 5375/-</span>
              </li>
              <li>
                <span className="list-name">Annual maintenance cost : Rs 6500/-</span>
              </li>
            </ul>
            <div className="btn"><button>Deatils</button></div>
          </div>
          <div className="table premium">
            <div className="ribbon"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popular</span></div>
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">mileage : 312 Km</span>
              </li>
              <li>
                <span className="list-name">Vechicle life : 8-10 year</span>
              </li>
              <li>
                <span className="list-name">Runnig cost per month : Rs 560/-</span>
              </li>
              <li>
                <span className="list-name">Annual maintenance cost : Rs 5102/-</span>
              </li>
            </ul>
            <div className="btn"><button>Feature</button></div>
          </div>
          <div className="table ultimate">
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">mileage : 22.4 Km/litre</span>
              </li>
              <li>
                <span className="list-name">Vechicle life : 10 year</span>
              </li>
              <li>
                <span className="list-name">Runnig cost per month : Rs 3484/-</span>
              </li>
              <li>
                <span className="list-name">Annual maintenance cost : Rs 9500/-</span>
              </li>
            </ul>
            <div className="btn"><button>Details</button></div>
          </div>
          <div className="table gas">
            <div className="package-name"></div>
            <ul className="features">
              <li>
                <span className="list-name">mileage : 22.4 Km/litre</span>
              </li>
              <li>
                <span className="list-name">Vechicle life : 10 year</span>
              </li>
              <li>
                <span className="list-name">Runnig cost per month : Rs 3484/-</span>
              </li>
              <li>
                <span className="list-name">Annual maintenance cost : Rs 9500/-</span>
              </li>
            </ul>
            <div className="btn"><button>Deatils</button></div>
          </div>
        </div>
      </div>

      <a className="nft-b btn btn-primary" href='/Contact'> read our help center</a><br></br>


    </div>
  );
}


export default Home;
