import React from 'react'
import "../styles/home.css"

import heroImg1 from "../assets/hero-img01.jpg"
import heroImg2 from "../assets/hero-img02.jpg"
import heroVideo from "../assets/hero-video.mp4"
import Subtitle from "../shared/Subtitle"
import worldImg from "../assets/world.png"
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturdToursList from '../Featured-Tours/FeaturdToursList'
import experience from "../assets/experience.png"
import MasonaryImages from '../Image-Gallery/MasonaryImages'
import Testimonial from '../Testimonials/Testimonial'
import NewsLetter from '../shared/NewsLetter'
const Home = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align_items-center'>
                  <Subtitle subtitle={"Know Before You Go "} />
                  <img src={worldImg} alt='world_Img' />
                </div>
                <h1>Traveling Opens the door to creating{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>

            <div className='col-lg-2'>
              <div className='hero__Img-box'>
                <img src={heroImg1} alt='hero_img1'></img>
              </div>
            </div>

            <div className='col-lg-2'>
              <div className='hero__Img-box hero__video-box mt-4'>
                <video src={heroVideo} alt='hero_Video' controls></video>
              </div>
            </div>

            <div className='col-lg-2'>
              <div className='hero__Img-box mt-5'>
                <img src={heroImg2} alt='hero_img2'></img>
              </div>
            </div>

            <SearchBar />
          </div>
        </div>
      </section>

      {/*------------------- HERO SECTION STARTS--------------------- */}

      <section>
        <div className='container' style={{ marginTop: "5rem" }}>
          <div className='row'>
            <div className='col-lg-3'>
              <h5 className='services__subtitle'>What we Serve ?</h5>
              <h2 className='services__title'>We offer our best services</h2>

            </div>

            <ServiceList />
          </div>
        </div>
      </section>


      {/*-------------- TOUR SECTION START-------------------------*/}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__tour-title'>
                Our featured Tours
              </h2>

            </div>
            <FeaturdToursList />
          </div>
        </div>
      </section>
      {/*-------------- TOUR SECTION END-------------------------*/}

      {/*-------------- EXPERIENCE SECTION START-------------------------*/}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='experience__content'>
                <Subtitle subtitle={"Experience"} />
                <h2>With our all Experience <br /> we will serve you</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular Client</h6>
                </div>
                <div className='counter__box'>
                  <span>12</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='experience__Img'>
                <img src={experience} alt='experience_Img'></img>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/*-------------- EXPERIENCE SECTION END-------------------------*/}

      {/*-------------- GALLERY SECTION START-------------------------*/}

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visit our Tour Gallery
              </h2>
            </div>
            <div className='col-lg-12'>
              <MasonaryImages />
            </div>
          </div>
        </div>
      </section>

      {/*-------------- GALLERY SECTION END-------------------------*/}

      {/*-------------- TESTIMONIAL SECTION START-------------------------*/}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>
                What our Fans say about us
              </h2>
            </div>
            <div className='col-lg-12'>
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      {/*-------------- TESTIMONIAL SECTION END-------------------------*/}


      {/*-------------- TESTIMONIAL SECTION START-------------------------*/}
      <NewsLetter />
      {/*-------------- TESTIMONIAL SECTION END-------------------------*/}



    </>
  )
}

export default Home