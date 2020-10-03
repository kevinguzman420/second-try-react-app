import React from 'react';

import './styles/SubImageTarget.css';

function SubImageTarget(props) {
    return (
        <div className={props.className}>
            <div>
                <h3 className={props.className + "-title"}>{props.title}</h3>
                <h5 className={props.className + "-subtitle"}>{props.detail}</h5>
                {props.className=="firstTarget" 
                    ?
                    <button className={props.className + "-btn"}>
                            $139 · BUY NOW
                    </button>
                    :
                    <button className={props.className + "-btn"}>
                            $399 · BUY NOW
                            HOLA
                    </button>
                }
            </div>
        </div>
    )
}

export default SubImageTarget;