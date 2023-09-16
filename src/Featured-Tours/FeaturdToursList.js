import React, { useEffect, useState } from 'react'
import TourCard from '../shared/TourCard'
import { tourData } from '../assets/data/tourData';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import axios from 'axios';


const FeaturdToursList = () => {

  // const [ data, setData ] = useState([]);

  // useEffect(()=>{
  //   axios.get(`${BASE_URL}/tours/search/getFeaturedTours`).then((res)=>{
  //     console.log(res.data);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // },[]);



  const {data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  // console.log(featuredTours);
  
  return (
    <>
    {loading && <h4>Loading......</h4>}
    {error && <h4>{error}</h4>}
    {!loading && !error && featuredTours?.map((tour)=>{
        return (
            <div className='col-lg-3 col-md-6 col-sm-6' key={tour._id}>
                <TourCard tour={tour}/>
            </div>
        )
    })}
    </>
  )
}

export default FeaturdToursList