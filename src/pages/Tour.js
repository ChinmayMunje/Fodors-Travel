import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import "../styles/tour.css"
import { tourData } from '../assets/data/tourData'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import NewsLetter from '../shared/NewsLetter'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config'

const Tour = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`);
  const {data: tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0);
  }, [page, tourCount, tours]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <div className='container'>
          <div className='row'>
            <SearchBar />
          </div>
        </div>
      </section>


      <section className='pt-0'>
        <div className='container'>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {
          !loading && !error && <div className='row'>
            {tours?.map((tour) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-6' key={tour._id}>
                  <TourCard tour={tour} />
                </div>
              )

            })}

            <div className='col-lg-12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map(number => {
                  return (
                    <span key={number} onClick={()=>setPage(number)} className={page === number ? "active_page": ""}>
                      {number + 1}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          }
        </div>
      </section>
      <NewsLetter/>
    </>
  )
}

export default Tour