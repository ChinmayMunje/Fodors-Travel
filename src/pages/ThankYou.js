import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "../pages/thankYou.css";
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 pt-5 text-center'>
                    <div className='thank__you'>
                        <span><i><CheckCircleOutlineIcon/></i></span>
                        <h1 className='mb-3 fw-semibold'>Thank You</h1>
                        <h3 className='mb-4'>Your Tour is Booked</h3>
                        <button className='btn btn-primary w-25'><Link to="/">Back to Home</Link></button>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ThankYou