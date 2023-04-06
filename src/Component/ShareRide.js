import React from 'react';

function ShareRide(props) {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-4 py-24 mx-auto flex sm:flex-nowrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0"
                  marginwidth="0" scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29376.863339654803!2d72.5243006606238!3d23.019809488781664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85cf241a7445%3A0x80a17b0c0d19a3a9!2sSP%20hostel!5e0!3m2!1sen!2sus!4v1677040164998!5m2!1sen!2sus"
                  style={{filter: "contrast(1.2) opacity(0.7);"}}></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Current Location</h2>
                    <p className="mt-1">Shree Saurasht Patel Kelavni Mandal Hostel, near vasundhara society, Nehrunagar, Ahemdabad, Gujrat 380009 </p>
                  </div>
                  <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-500 leading-relaxed">kishanbhadani83@gmail.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">+91 8866773923</p>
                  </div>
                </div>
              </div><br></br>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-4"
                style={{padding: "15px;"}}>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Fill the Information</h2>
                <p className="leading-relaxed mb-5 text-gray-600">please you can give me below some information</p>
                <div className="relative mb-4">
                  <label for="name" className="leading-7 text-sm text-gray-600">Full name(same as Document)</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div className="relative mb-4">
                  <label for="adult" className="leading-7 text-sm text-gray-600">No of Seat</label>
                  <input type="number" id="adult" name="adult" placeholder="Ex: 1"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div className="relative mb-4">
                  <label>Gender Type</label><br></br>
                  <input type="radio" id="male" name="gender" className="mx-4"></input>male
                  <input type="radio" id="female" name="gender" className="mx-4"></input>female
                </div>
                <div className="relative mb-4">
                  <label>Choose bike/car</label><br></br>
                  <select className="mx-4">
                    <option value="select" className="mx-3">select any one option</option>
                    <option value="cars" className="mx-3">Car</option>
                    <option value="bike" className="mx-3">Bike</option>
                  </select>
                </div>
                <div className="relative mb-4">
                  <label>Vechicle model(if required)</label>
                  <input type="vno" id="vno" name="vno" placeholder="Ex: HYUNDAI verna"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div className="relative mb-4">
                <label>Price per Km (0 to 200)</label><br></br>
                  <input type='range' className='from-range ml-5' min="0" max='900'></input>
                </div>
                <div className="relative mb-4">
                  <label for="contact" className="leading-7 text-sm text-gray-600">Contact</label>
                  <input type="contact" id="contact" name="contact" placeholder="Ex: +91 9929879856"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div className="relative mb-4">
                  <label for="message" className="leading-7 text-sm text-gray-600">Description</label>
                  <textarea id="message" name="message" placeholder="write some words............"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button
                  className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">contact me</button>
                <p className="text-xs text-gray-500 mt-3">&copy; RideShare </p>
              </div>
            </div>
        </section>
    );
}

export default ShareRide;