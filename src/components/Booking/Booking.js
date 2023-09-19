import React, { useContext, useState } from 'react'
import "./../Booking/booking.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import axios from 'axios'

const Booking = ({ tour }) => {

    const { price, reviews, title } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        phone: '',
        guestSize: 1,
        bookAt: '',
    })

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    const handleChange = (e) => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();

        console.log(booking);

        try {
            if (!user || user === undefined || user === null) {
                return alert("Please Sign In !!");
            }

            // axios.post(`${BASE_URL}/booking`,{
            //     headers: {
            //         "Authorization": `Bearer ${token}`,
            //         "content-type": "application/json",
            //     },
            //     credentials: "include",
            //     body: JSON.stringify(booking),
            // }).then((res)=>{
            //     console.log(res);
            //     navigate("/thank-you")
            // }).catch((err)=>{
            //     console.log(err);
            // })

            

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(booking),
            })

            const result = await res.json();

            if (!res.ok) {
                return alert(result.message);
            } 
            navigate("/thank-you");
        } catch (err) {
            alert(err.message);
        }

    };
    return (
        <>
            <div className='booking'>
                <div className='booking__top d-flex align-items-center justify-content-between'>
                    <h3>${price} <span>/per person</span></h3>
                </div>
                {/*------------------- BOOKING FORM STARTS--------------------- */}
                <div className='booking__form'>
                    <h5>Information</h5>
                    <form className='booking__info-form' onSubmit={handleClick}>
                        <div className='form-group'>
                            <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <input type='number' placeholder='Phone' id='phone' required onChange={handleChange}></input>
                        </div>
                        <div className='form-group d-flex align-items-center gap-3'>
                            <input type='date' id='bookAt' placeholder='' required onChange={handleChange}></input>
                            <input type='number' id='guestSize' placeholder='Guest' required onChange={handleChange}></input>
                        </div>
                    </form>
                </div>
                {/*------------------- BOOKING FORM END--------------------- */}

                {/*------------------- BOOKING BOTTOM--------------------- */}

                <div className='booking__bottom'>
                    <ul className='list-group'>
                        <li className='list-group-item border-0 px-0'>
                            <h5 className='d-flex align-items-center gap-1'>${price} <i><CloseIcon /></i><span>1 person</span></h5>
                            <span>${price}</span>
                        </li>

                        <li className='list-group-item border-0 px-0'>
                            <h5>Service Charge</h5>
                            <span>${serviceFee}</span>
                        </li>

                        <li className='list-group-item border-0 px-0 total'>
                            <h5>Total</h5>
                            <span>${totalAmount}</span>
                        </li>
                    </ul>
                    <button className='btn primary w-100 mt-4' onClick={handleClick}>Book Now</button>
                </div>

            </div>
        </>
    )
}

export default Booking