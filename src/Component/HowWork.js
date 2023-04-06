import React from 'react';

function HowWork(props) {
    return (
        <div className='container'>
        <h3 className='text-center p-3 mt-5 mb-5' style={{fontSize: "x-large"}}>" How E Ride-Share works? "</h3>
        <div id="accordion">
        
        <div class="card ml-5 mr-5">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              1. Find a ride
              </button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body m-3">
                Just enter your departure and arrival points and your travel date, then choose a car owner going your way. If you have a question, you can ask the car owner before booking.<br></br>
                Check out the car owners trusted profiles, including ratings left for them by other members. Trust & Safety.
            </div>
          </div>
        </div>
        <div class="card ml-5 mr-5">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              2. Book online
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body m-3">
            Book your seat online. You’ll get the car owners phone number to arrange the final details.<br></br>
            You can also contact the car owner via private message once you have booked your seat.
            </div>
          </div>
        </div>
        <div class="card ml-5 mr-5">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              3. Travel together
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body m-3">
                Bring exact change to pay the car owner the agreed contribution during the ride.<br></br>
                Remember to leave a rating for the car owner after the ride, it means they’re more likely to leave one for you!
            </div>
          </div>
        </div>
        <div class="card-body m-3 ml-5">
            Need to travel ?<br></br>
            Affordable and comfortable city-to-city travel, even at the last minute.
        </div>
      </div>
        </div>
    );
}

export default HowWork;