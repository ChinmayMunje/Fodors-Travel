import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import '../shared/tour-card.css';

const TourCard = ({ tour }) => {

    const { _id, title, city, photo, price, featured, reviews } = tour;

    const totalRating = reviews?.reduce((acc, items) => acc + items.rating, 0);
    const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);

    return (
        <>
            <div className='tour__card'>
                <div className='card'>
                    <div className='tour__img'>
                        <img src={photo} alt='tour_img'></img>
                        {featured && <span>Featured</span>}
                    </div>
                    <div className='card-body'>
                        <div className='card__top d-flex align-items-center justify-content-between'>
                            <span className='tour__location d-flex  align-items-center gap-1'> 
                                <i><LocationOnIcon /> </i>{city}
                            </span>
                            <span className='tour__rating d-flex  align-items-center gap-1'>
                                <i><StarIcon /> </i>{avgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? ("Not Rated") : (<span>({reviews.length})</span>
                                )}
                            </span>
                        </div>

                        <h5 className='tour__title'>
                            <Link to={`/tours/${_id}`}>{title}</Link>
                        </h5>

                        <div className='card__bottom d-flex align-items-center justify-content-center mt-3'>
                            <h5>${price} <span>/per person</span></h5>

                            <button className='btn booking__btn'>
                                <Link to={`/tour/${_id}`}>Book Now</Link>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default TourCard