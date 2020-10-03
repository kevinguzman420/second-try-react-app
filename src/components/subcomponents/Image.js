import React from 'react';

import './styles/Image.css';

function Image(props) {

    return (
        <figure className={props.className}>
            <img src={props.imageUrl} alt=""/>
        </figure>
    )
}

export default Image;