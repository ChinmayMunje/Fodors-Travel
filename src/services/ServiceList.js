import React from 'react'
import weatherImg from '../assets/weather.png'
import guideImg from '../assets/guide.png'
import customImg from '../assets/customization.png'
import ServiceCard from '../services/ServiceCard'


const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        imgUrl: customImg,
        title: "Customiztion",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]


const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => {
                return (<>
                    <div className='col-lg-3 col-md-6, col-sm-12 mb-4' key={index}>
                        <ServiceCard item={item} />
                    </div>
                </>)
            })}
        </>
    )
}

export default ServiceList