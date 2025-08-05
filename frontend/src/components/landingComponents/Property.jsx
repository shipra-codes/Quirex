// import React, { useEffect, useState } from "react";
// import { IoBedOutline } from "react-icons/io5";
// import { useLocation } from "react-router-dom";
// import NavBar from "./NavBar";
// import axios from "axios";
// import Swal from "sweetalert2";
// const Property = () => {
//   const [listData, setListData] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await axios.get("http://localhost:9000/api/property-list");
//     if (response?.data?.code == 200) {
//       setListData(response?.data?.data);
//     }
//   };
//   const location = useLocation();
//   const handleBuy = async (propertyId) => {
//     const userData = JSON.parse(localStorage.getItem("userInfo"));
//     const response = await axios.post("http://localhost:9000/api/buy", {
//       userId: userData?._id,
//       propertyId,
//     });
//     if (response?.data?.code == 200) {
//       Swal.fire({
//         title: "Buy Property",
//         text: response?.data?.message,
//         icon: "success",
//       });
//     } else {
//       Swal.fire({
//         title: "Buy Property",
//         text: response?.data?.message,
//         icon: "error",
//       });
//     }
//   };
//   return (
//     <>
//       {location?.pathname != "/" && <NavBar />}
//       <div className="row property py-5">
//         <div className="text-center ">
//           <div className="tagline ">Properties </div>
//           <h2 className="section-title">Featured Listings</h2>
//         </div>
//         <div className="col-sm-1"></div>
//         <div className="col-sm-10">
//           <div className="row py-3 px-3 ">
//             {listData?.map((item, index) => {
//               return (
//                 <>
//                   <div className="col-sm-3  px-3 mb-4">
//                     <div className="card  mx-auto shadow-lg border border-0">
//                       <img
//                         src={`http://localhost:9000/img/${item?.pic}`}
//                         className="card-img-top img-fluid featuredimg"
//                         alt="..."
//                       />
//                       <div className="card-body">
//                         <p className="mycolor1">
//                           <b>${item?.price}</b>/Month
//                         </p>
//                         <h5 className="card-title">
//                           <b className="mycolor2">{item?.title}</b>
//                         </h5>
//                         <p className="card-text featuredp ">
//                           {item?.description}
//                         </p>
//                         <div className="row">
//                           <div className="col-4 featureddiv featuredp">
//                             <p className="m-0 ps-2">
//                               {item?.area}
//                               <IoBedOutline />
//                             </p>
//                             <span className="ps-2">Bedroom</span>
//                           </div>
//                           <button
//                             onClick={() => handleBuy(item?._id)}
//                             className="btn btn-outline-danger"
//                           >
//                             Buy
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//             {listData?.length == 0 && (
//               <h1 className="text-center">No Record Found</h1>
//             )}
//           </div>
//         </div>
//         <div className="col-sm-1"></div>
//       </div>
//     </>
//   );
// };

// export default Property;

import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import Swal from "sweetalert2";

const Property = () => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true); // ⏳ for loading indicator
  const location = useLocation();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/property-list"
      );
      console.log("API Response (code):", response?.data?.code);
      console.log("API Response (data):", response?.data?.data);

      console.log("API Response:", response.data); // 🔍 Debug log
      if (response?.data?.code === 200) {
        setListData(response?.data?.data || []);
      } else {
        console.warn("Unexpected response format", response.data);
        setListData([]);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
      setListData([]);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log("useEffect triggered");
  //   const fetchData = async () => {
  //     console.log("fetchData called"); // 👈 Add this too
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:9000/api/property-list"
  //       );
  //       console.log("API Response:", response.data); // already added
  //       if (response?.data?.code === 200) {
  //         setListData(response?.data?.data || []);
  //       } else {
  //         console.warn("Unexpected response format", response.data);
  //         setListData([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching properties:", error);
  //       setListData([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    fetchData(); // ✅ Call the properly defined function
  }, []);

  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const response = await axios.post("http://localhost:9000/api/buy", {
        userId: userData?._id,
        propertyId,
      });

      if (response?.data?.code === 200) {
        Swal.fire({
          title: "Buy Property",
          text: response?.data?.message,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Buy Property",
          text: response?.data?.message || "Purchase failed",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Buy Property",
        text: "Something went wrong while purchasing",
        icon: "error",
      });
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <NavBar />}

      <div className="container py-5 property-section">
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="tagline">Properties</div>
          <h2 className="section-title">Featured Listings</h2>
        </div>

        {loading ? (
          <p className="text-center">Loading properties...</p> // ⏳ Loading message
        ) : listData.length === 0 ? (
          <h3 className="text-center text-muted mt-5">No Record Found</h3>
        ) : (
          <div className="row g-4 mb-4">
            {listData.map((item, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={item?._id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <div className="card property-card shadow-sm border-0 h-100">
                  <img
                    src={`http://localhost:9000/img/${item?.pic}`}
                    className="card-img-top property-img"
                    alt={item?.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-property.jpg"; // fallback if image is missing
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="text-success fw-bold">${item?.price}/Month</p>
                    <h5 className="card-title text-primary">{item?.title}</h5>
                    <p className="text-muted small">{item?.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="text-secondary">
                        {item?.area} <IoBedOutline className="ms-1" />
                        <div className="small">Bedroom</div>
                      </div>
                      {location?.pathname !== "/property" && (
                        <button
                          onClick={() => handleBuy(item?._id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Buy
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Property;
