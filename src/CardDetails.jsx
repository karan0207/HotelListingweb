// CardDetails.jsx

import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Data from './component/data';
import './App.css';

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProperty = Data.find((property) => property.id === id);

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

  return (
    // <div>
    //   <h2>{selectedProperty.Title}</h2>
    //   {/* Render other details of the property */}
    //   <p>{selectedProperty.Room}</p>
    //   <p>{selectedProperty.Bed}</p>
    //   <p>{selectedProperty.Bath}</p>
    //   <p>{selectedProperty.Area}</p>
    //   <p>{selectedProperty.Price}</p>
    //   {/* Add any other details you want to display */}
    //   <button onClick={() => window.history.back()}>Go Back</button>
    // </div>
    <div className="card mb-4" style={{ width: "18rem" }}>
      <img src={selectedProperty.img} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{selectedProperty.Title}</h5>

        <div className="box_icon">
          <div className="room display_flex">
            <i class="fa-regular fa-building"></i>
            <p>{selectedProperty.Room}</p>
          </div>
          <div className="Bed display_flex">
            <i class="fa-solid fa-bed"></i>
            <p>  {selectedProperty.Bed}</p>
          </div>
          <div className="Bath display_flex">
            <i class="fa-solid fa-bath"></i>
            <p> {selectedProperty.Bath} </p>
          </div>
          <div className="Area display_flex">
            <i class="fa-solid fa-arrow-down-up-across-line"></i>
            <p> {selectedProperty.Area} </p>
          </div>
        </div>
        <p> <span className='pricenumber'>{selectedProperty.Price}</span>/month</p>
          <button onClick={()=>{navigate(-1)}>Go back</button>

      </div>
    </div>

  );
};

export default CardDetails;
