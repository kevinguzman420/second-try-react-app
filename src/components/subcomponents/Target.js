import React, { PureComponent } from 'react';

import './styles/Target.css';

function Target(props) {
    return (
        <div className="target">
            <h1 className="target-title">{props.title}</h1>
            <h5 className="target-subtitle">{props.subtitle}</h5>
            <hr/>
            {!props.description &&
                <div className="target-buttons">
                    <button>
                    <i className="fas fa-caret-left"></i>
                    </button>
                    <button>
                    <i className="fas fa-caret-right"></i>
                    </button>
                </div>
            }
            <p className="target-description">
                {props.description && props.description}
            </p>
            <p className="target-price-t">
                {props.price_title && props.price_title}
            </p>
            <p className="target-price-d">
                {props.price_desc && props.price_desc}
            </p>
            {props.btn_buy && 
                <button>
                    BOOK TICKETS 
                    <i className="fas fa-play"></i>
                </button>
            }
        </div>
    )
}

export default Target;