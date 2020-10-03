import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles/Courses.css';

function Courses(props) {
    return (
        <div className={props.className}>
            <h1 className="courses_title">{props.title}</h1>
            { props.subtitle && 
                <h6 className="courses__subtitle">
                    {props.subtitle}
                </h6>
            }
            <div className="courses-detail">
                <p>
                    {props.description}
                </p>
                <div>
                    <Link to="/helloworld" >MORE DETAILS</Link>
                </div>
            </div>
        </div>
    )
}

export default Courses;