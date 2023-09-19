import React, { useEffect } from 'react'
import "../shared/searchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaceIcon from '@mui/icons-material/Place';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import { useRef } from 'react';
import { BASE_URL } from "../utils/config"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SearchBar = () => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {

        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupRef.current.value


        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert("All Fields are Required !");
        }

        axios.get(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`).then((res) => {
            // console.log(res);
            navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: res.data });
        }).catch((error) => {
            console.log(error);
        });


        // const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroup=${maxGroup}`);

        // if(!res.ok) alert("Something went Wrong !!!");
        //  const result = await res.json();


    }
    return (
        <>
            <div className='col-lg-12'>
                <div className='search__bar'>
                    <form className='d-flex align-items-center gap-4'>

                        <div className='form__group d-flex gap-3 form__group-fast'>
                            <span>
                                <i className='ri-map-pin-line'><PlaceIcon /></i>
                            </span>

                            <div>
                                <h6>Location</h6>
                                <input type='text' placeholder='Where are you going ?' ref={locationRef}></input>
                            </div>
                        </div>

                        <div className='form__group d-flex gap-3 form__group-fast'>
                            <span>
                                <i className='ri-map-pin-time-line'><DepartureBoardIcon /></i>
                            </span>

                            <div>
                                <h6>Distance</h6>
                                <input type='number' placeholder='Distance k/m' ref={distanceRef}></input>
                            </div>
                        </div>

                        <i class="ri-group-line"></i>
                        <div className='form__group d-flex gap-3'>
                            <span>
                                <i><PeopleAltIcon /></i>
                            </span>

                            <div>
                                <h6>Max People</h6>
                                <input type='number' placeholder='0' ref={maxGroupRef}></input>
                            </div>
                        </div>

                        <span className='search__icon' type='submit' onClick={searchHandler}>
                            <i><SearchIcon /></i>
                        </span>


                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar