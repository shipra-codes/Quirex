// //services
// import React from "react";

// import NavBar from "./NavBar";
// import { useLocation } from "react-router-dom";
// const Services = () => {
//   const location = useLocation();

//   return (
//     <>
//       {location?.pathname != "/" && <NavBar />}
//       <div className="row py-5 bg services">
//         <div className="text-center ">
//           <div className="tagline ">Our Services </div>
//           <h2 className="section-title">Our Main Focus</h2>
//         </div>
//         <div className="col-sm-10 card1 mx-auto">
//           <div className="row py-3">
//             <div className="col-sm-4">
//               <div className="card mx-auto shadow-lg p-4 border border-0">
//                 <img src="/img/home.png" className="img-fluid w-50 mx-auto" />
//                 <h3 className="text-center py-2">
//                   <b>Buy a home</b>
//                 </h3>
//                 <p className="text-center">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//                 <p className="text-center text-success py-3">
//                   <span className=" bg-light rounded-2 p-2">
//                     Find A Home &rarr;
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="col-sm-4">
//               <div className="card mx-auto shadow-lg p-4 border border-0">
//                 <img src="/img/22.png" className="img-fluid w-50 mx-auto" />
//                 <h3 className="text-center py-2">
//                   <b>Rent a home</b>
//                 </h3>
//                 <p className="text-center">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//                 <p className="text-center text-success py-3">
//                   <span className=" bg-light rounded-2 p-2">
//                     Find A Home &rarr;
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="col-sm-4 ">
//               <div className="card mx-auto shadow-lg p-4 border border-0">
//                 <img src="/img/23.png" className="img-fluid w-50 mx-auto" />
//                 <h3 className="text-center py-2">
//                   <b>Sell a home</b>
//                 </h3>
//                 <p className="text-center">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//                 <p className="text-center text-success py-3">
//                   <span className=" bg-light rounded-2 p-2">
//                     Find A Home &rarr;
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;
//services
import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className="row py-5 bg services">
        <div
          className="text-center "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="tagline ">Our Services </div>
          <h2 className="section-title">Our Main Focus</h2>
        </div>
        <div className="col-sm-10 card1 mx-auto">
          <div className="row py-3">
            <div
              className="col-sm-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/home.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2">
                  <b>Buy a home</b>
                </h3>
                <p className="text-center">
                  Buying a home is one of the most important decisions you'll
                  ever make. Whether you're a first-time buyer or looking to
                  upgrade, finding the right property requires careful research
                  and planning. We help simplify this journey by offering expert
                  guidance, a wide range of listings, and personalized support
                  tailored to your needs.
                </p>
                <p className="text-center text-success py-3">
                  <span className=" bg-light rounded-2 p-2">
                    Find A Home &rarr;
                  </span>
                </p>
              </div>
            </div>
            <div
              className="col-sm-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/22.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2">
                  <b>Rent a home</b>
                </h3>
                <p className="text-center">
                  Renting a home offers flexibility, convenience, and a
                  cost-effective way to enjoy quality living without long-term
                  commitments. Whether you're relocating for work, studying, or
                  simply exploring a new city, we provide a wide variety of
                  rental options to match your lifestyle and budget.
                </p>
                <p className="text-center text-success py-3">
                  <span className=" bg-light rounded-2 p-2">
                    Find A Home &rarr;
                  </span>
                </p>
              </div>
            </div>
            <div
              className="col-sm-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/23.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2">
                  <b>Sell a home</b>
                </h3>
                <p className="text-center">
                  Selling a home is a major decision, and we are here to make
                  the process smooth, secure, and rewarding. Our platform
                  connects you with serious buyers and offers professional tools
                  to market your property effectively. From expert pricing
                  advice to high-quality listings with photos and descriptions.
                </p>
                <p className="text-center text-success py-3">
                  <span className=" bg-light rounded-2 p-2">
                    Find A Home &rarr;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
