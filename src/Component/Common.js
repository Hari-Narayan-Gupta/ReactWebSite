import React from "react";
import web from "./Images/img2.jpg";
import { Link } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header" className=" d-flex align-item-center mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> TechTool</strong>
                  </h1>
                  <h2 className="my-1">
                    We are team of talented developer making website
                  </h2>
                  <div className="mt-2">
                    <Link to={props.visit} className="btn-get-started">
                      {props.btname}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt=""
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
