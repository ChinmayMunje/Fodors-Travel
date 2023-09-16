import React from 'react'
import '../shared/news-letter.css'
import maleTourist from '../assets/male-tourist.png'
const NewsLetter = () => {
    return (
        <>
            <section className='newsletter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='newsletter__content'>
                                <h2>Subsccribe now to get useful traveling information.</h2>

                                <div className='newsletter__input'>
                                    <input type='email' placeholder='Enter your Email'></input>
                                    <button type='submit' className='btn newsletter__btn'>Subscribe</button>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='newsletter__img'>
                                <img src={maleTourist} alt='tourust'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter