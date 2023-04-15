import React from 'react';

function RideCenterInfo(props) {
    return (
        <div>
            <div className="jumbotron" style={{ backgroundColor: "lightgrey" }}>
                <h1 className="display-4">Select Your Ride</h1>
                <p >This is a simple for choosing a best ride, which is comfotable for you. compare the detils and choose the best ride suitable.</p>
                <hr className="my-4 "></hr>
                <p>It uses every day for a work and job guides who working for passionable in his life.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-m mt-2" href="#" role="button">Subscribe</a>
                </p>
            </div>

            <section>
            <div id="list-example" className="list-group">
            <p className="list-group-item list-group-item-action">1. Source to Destinataion
               <p className='ml-4'>Find out location pickup and drop point</p>
            </p>
            <p className="list-group-item list-group-item-action">2. Date and Time
                <p className='ml-4'>Fixing and correct date & time for riding</p>
            </p>
            <p className="list-group-item list-group-item-action">3. Ride Toatal fair
                <p className='ml-4'>Total pricing confirm before ride</p>
            </p>
            <p className="list-group-item list-group-item-action">4. Fix Ride
                <p className='ml-4'>Choose or select any ride</p>
            </p>
            <p className="list-group-item list-group-item-action">5. Book Ride
                <p className='ml-4'>Final Book any ride</p>
            </p>
            <p className="list-group-item list-group-item-action">6. Confirm Ride Ride
               <p className='ml-4'>Confiramtion done for ride</p>
            </p>
          </div>
            </section>

            <div className='ceneter_item'>
            <div className="jumbotron fluid-container ml-5 mr-5">
            <div className="container ">
            <i className="bi bi-geo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
            </svg></i>
                <p className='stod'>
                    Surat -> Ahemdabad
                    </p>
                    <p className="lead">2 -seat Available, INNOVA CAR ,Boarding-Time: 07:70 AM</p>
                </div>
            </div>

            <div className="jumbotron fluid-container ml-5 mr-5">
            <div className="container ">
            <i className="bi bi-geo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
            </svg></i>
                <p className='stod'>
                    Surat -> Ahemdabad
                    </p>
                    <p className="lead">1 -seat Available, SWIFT CAR ,Boarding-Time: 04:00 PM</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default RideCenterInfo;