import React from 'react';

import './styles/Gallery.css';
import FisrtImage from '../resources/images/camera.jpg';
import SecondImage from '../resources/images/camera2.jpg';
import ThridImage from '../resources/images/camera3.jpg';

import SubImageTarget from './subcomponents/SubImageTarget';

import Image from './subcomponents/Image';

function Gallery() {
    return (
        <div className="gallery">
            <Image 
                className="firstImage"
                imageUrl={FisrtImage}
            />
            <Image 
                className="secondImage"
                imageUrl={SecondImage}
            />
            <Image 
                className="thridImage"
                imageUrl={ThridImage}
            />
            <SubImageTarget 
                className="firstTarget"
                title="TARGET ONE"
                detail="OSMO MOBILE 2"
            />
            <SubImageTarget 
                className="secondTarget"
                title="TARGET TWO"
                detail="X-A2 MIRRORLESS"
            />
        </div>
    )
}

export default Gallery;