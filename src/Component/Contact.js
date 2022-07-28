import React, { useState } from "react";

export default function Contact() {
    const [data, setData] = useState({
        email: '',
        password: '',
        address: '',
        address2: '',
        city: '',
        zipcode: ''
    });

    const formSubmit = (e) => {
         e.preventDefault();
         alert(
            `Your email is ${data.email}. and your password is ${data.password} ,and address is ${data.address} your 2nd address ${data.address2} ,and city is ${data.city} , zipcode is ${data.zipcode
            }`)
    };

    const inputEvent = (e) => {
         const name = e.target.name;
         const value = e.target.value;
         setData((prevData) => {
             return {
             ...prevData, [name]: value,
         };
         });
    };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="">
              <form onSubmit={formSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      name="email"
                      value={data.email}
                      onChange={inputEvent}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      name="password"
                      value={data.password}
                      onChange={inputEvent}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    name="address"
                    value={data.address}
                    onChange={inputEvent}
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    name="address2"
                    value={data.address2}
                    onChange={inputEvent}
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={data.city}
                      onChange={inputEvent}
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" name="zipcode"
                      value={data.zipcode}
                      onChange={inputEvent} />
                  </div>
                </div>
                
                <button type="submit" className="btn btn-outline-primary">
                  Submit Now
                </button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
