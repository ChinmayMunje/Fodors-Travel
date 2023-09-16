import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImages'

const MasonaryImages = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter='1rem'>
                {galleryImages.map((images, index) => {
                    return (
                        <img className='masonry__img' src={images} key={index} alt='IMg' style={{width: "100%", display: "block", borderRadius: "10px"}} />

                    )
                })}

            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonaryImages