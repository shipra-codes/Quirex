import React from "react";
import { FaHome } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Slider = () => {
  return (
    <>
      <div className="row bg py-5" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <p className="fs-5">
                <FaHome className="me-2 ic" />
                Real Estate Agency
              </p>
              <b className="typewriter">
                <Typewriter
                  options={{
                    strings: [
                      "Not Just a House — It’s Where Your Story Begins.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <p className="mt-3">
                Step into a world where every detail is designed to complement
                your lifestyle. From thoughtfully crafted interiors to thriving
                neighborhoods, we bring you homes that feel truly yours. Whether
                you're seeking comfort, elegance, or modern convenience, our
                curated properties deliver it all. Experience seamless buying,
                expert support, and unmatched transparency at every step. Your
                next chapter deserves more than ordinary—let’s make it
                extraordinary.
              </p>
              <button className="btn btn1">Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center">
              <img
                src="/img/21_1.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
