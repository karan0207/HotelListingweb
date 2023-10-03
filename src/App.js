import { useState, useEffect } from 'react';
import './App.css';
import Data from "./component/data.jsx";
import { Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import CardDetails from './CardDetails.jsx'



function App() {
  const [items, setItems] = useState(Data);
  const [displayedItems, setDisplayedItems] = useState(6);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  const [showCardDetails, setShowCardDetails] = useState(false);

  useEffect(() => {

    // console.log("Active category changed:", activeCategory);
  }, [activeCategory]);

  const filterItem = (categItem) => {
    if (categItem === 'All') {
      // Setting items to the initial slice of Data
      setItems(Data.slice(0, displayedItems));
      setDisplayedItems(6);
    }
    else {
      const Updateditem = Data.filter((currElem) => currElem.Location === categItem);
      setItems(Updateditem);
      setDisplayedItems(6);
    }
    setActiveCategory(categItem);
  };


  const handleCardClick = (id) => {
    setShowCardDetails(true); // Setting showCardDetails to true when the card is clicked
    navigate(`/property/${encodeURIComponent(id)}`);
  };


  return (
    <div className="App">
      <div className="heading">
        <h1 >Featured Listed Property</h1>
        <p>Real estate can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity. The value of real estate can be...</p>
      </div>
      <div className="categoryfilter">
        <div className="left">
          <button type="button" className={`btn-bar ${activeCategory === 'New York' ? 'active' : ''}`} onClick={() => filterItem('New York')}>New York</button>
          <button type="button" className={`btn-bar ${activeCategory === 'Mumbai' ? 'active' : ''}`} onClick={() => filterItem('Mumbai')}>Mumbai</button>
          <button type="button" className={`btn-bar ${activeCategory === 'Paris' ? 'active' : ''}`} onClick={() => filterItem('Paris')}>Paris</button>
          <button type="button" className={`btn-bar ${activeCategory === 'London' ? 'active' : ''}`} onClick={() => filterItem('London')}>London</button>
        </div>
        <div className="right_div">
          <button type="button" className={`btn-bar ${activeCategory === 'All' ? 'active' : ''}`} onClick={() => filterItem("All")}>View All   <i class="fa-solid fa-arrow-right ml-3 mr-3"></i></button>
        </div>
      </div>

      {!showCardDetails && (<div className="row">

        {items.slice(0, displayedItems).map((elem) => {

          return (
            <>
              <div className="card mb-4" style={{ width: "18rem" }} key={elem.id} onClick={() => handleCardClick(elem.id)}>
                <img src={elem.img} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{elem.Title}</h5>

                  <div className="box_icon">
                    <div className="room display_flex">
                      <i class="fa-regular fa-building"></i>
                      <p>{elem.Room}</p>
                    </div>
                    <div className="Bed display_flex">
                      <i class="fa-solid fa-bed"></i>
                      <p>  {elem.Bed}</p>
                    </div>
                    <div className="Bath display_flex">
                      <i class="fa-solid fa-bath"></i>
                      <p> {elem.Bath} </p>
                    </div>
                    <div className="Area display_flex">
                      <i class="fa-solid fa-arrow-down-up-across-line"></i>
                      <p> {elem.Area} </p>
                    </div>
                  </div>
                  <p> <span className='pricenumber'>{elem.Price}</span>/month</p>

                  <Link to={`/property/${encodeURIComponent(elem.id)}`} className="btn btn-primary">
                    Read More
                  </Link>

                </div>
              </div>




            </>
          )
        })}

      </div>)}

      <div className="Showmore">
        <button type="button" className="Showmore_btn" onClick={() => setDisplayedItems((prev) => prev + 6)}><i class="fa-solid fa-angle-down"></i>Show More</button>
      </div>

      {showCardDetails && (
        <Routes>
          <Route path="/property/:id" element={<CardDetails />} />
        </Routes>
      )}

    </div>


  );
}

export default App;






