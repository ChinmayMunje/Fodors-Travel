import React, { useContext, useEffect, useRef, useState } from 'react'
import "../styles/tour-details.css"
import { useParams } from 'react-router-dom'
import { tourData } from '../assets/data/tourData';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import avatar from "../assets/avatar.jpg";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Booking from '../components/Booking/Booking';
import NewsLetter from '../shared/NewsLetter';
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config";
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext);


  // const tour = tourData.find(tour => tour.id === id)

  //FETCH DATA FROM DATABASE
  const { data:tour, loading,error } = useFetch(`${BASE_URL}/tours/${id}`)

  const { title, desc, price, photo, reviews, city, address, distance, maxGroupSize } = tour;

  // format date
  const options = {day: "numeric", month: "long", year: "numeric" };

  // Submit Request to server

  const submitHandler= async(e)=>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try{
      
    if(!user || user === undefined || user === null){
      alert("Please Sign In");
    }

    const reviewObj = {
      username: user?.username,
      reviewText,
      rating: tourRating,
    }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method: 'post',
        headers: {
          "content-type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });

      const result = await res.json();
      if(!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    }catch(err){
      alert(err.message);
    }

    // alert(`${reviewText}, ${tourRating}`);
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  return (
    <>
      <section>
        <div className='container'>
          {loading && <h4 className='text-center pt-5'>Loading......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {
          !loading && !error &&   <div className='row'>
            <div className='col-lg-8'>
              <div className='tour__content'>
                <img src={photo} alt='tourImg' />

                <div className='tour__info'>
                  <h3>{title}</h3>

                  <div className='d-flex align-items-center gap-5'>

                    <span className='d-flex align-items-center gap-1'>
                      {/* <i><StarIcon /></i>{reviews.map((review) => {
                        return (
                          <span>{review.rating}</span>
                        )
                      })} */}

                      
                      {/* {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (<span>({reviews.length})</span>)} */}
                    </span>

                    <span>
                      <i><LocationOnIcon /></i>
                      {address}
                    </span>
                  </div>
                  <div className='tour__extra-details'>
                    <span><i><AddLocationIcon /></i>{city}</span>
                    <span><i><MyLocationIcon /></i>{ distance}k/m</span>
                    <span><i><MonetizationOnIcon /></i>$ {price}/ per person</span>
                    <span><i><GroupIcon /></i>{maxGroupSize}</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/*------------------- TOUR REVIEW SECTION STARTS--------------------- */}
                <div className='tour__review mt-4'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      <span onClick={()=>setTourRating(1)}>1<i><StarIcon /></i></span>
                      <span onClick={()=>setTourRating(2)}>2<i><StarIcon /></i></span>
                      <span onClick={()=>setTourRating(3)}>3<i><StarIcon /></i></span>
                      <span onClick={()=>setTourRating(4)}>4<i><StarIcon /></i></span>
                      <span onClick={()=>setTourRating(5)}>5<i><StarIcon /></i></span>
                    </div>

                    <div className='review__input'>
                      <input type='text' ref={reviewMsgRef} placeholder='Share your thoughts' required></input>
                      <button type='submit' className='btn text-white'>Submit</button>
                    </div>
                  </form>

                  <div className='user__reviews'>
                    {reviews?.map((review)=>{
                      return (
                        <div className='review__item'>
                          <img src={avatar} alt=''/>
                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(review.createdAt).toLocaleDateString("en-US",options)}
                                </p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating} <i><StarIcon/></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                {/*------------------- TOUR REVIEW SECTION END--------------------- */}
              </div>
            </div>

            <div className='col-lg-4'>
              <Booking tour={tour}/>
            </div>

          </div>
          }
        
        </div>
      </section>
      <NewsLetter/>

    </>
  )
}

export default TourDetails