import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection';
import { useLocation } from 'react-router-dom';
import TourCard from "../shared/TourCard.js";
import NewsLetter from "../shared/NewsLetter.js";


const SearchResultList = () => {

  const location = useLocation();
  const [data] = useState(location.state);
  const searchData = data.data;
  // console.log(searchData);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <div className='container'>
          <div className='row'>
            
            {searchData.length === 0 ? <h4>No Tour Found</h4> :
              searchData?.map((tour) => {
                return (
                <div className='col mb-4' lg='3' key={tour._id}>
                  <TourCard tour={tour} />

                </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <NewsLetter/> 
    </>
  )
}

export default SearchResultList