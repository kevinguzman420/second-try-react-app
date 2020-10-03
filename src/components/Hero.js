import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import './styles/Hero.css';
import video from '../resources/video/PexelsVideos.mp4';

class Hero extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="hero">
                <div className="hero__text">
                    <h3 className="hero_text-title">Next level<br/>photograpy</h3>
                    <hr/>
                    <p className="hero__text-firstComment">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae nulla accusantium aliquam quibusdam? Ea ducimus eligendi maxime dolore atque, aperiam minus aut, animi voluptatem molestias praesentium quam perferendis ut.Libero, similique ipsa. Assumenda vero quidem reprehenderit, magnam sint, blanditiis nulla explicabo, rerum fugit quaerat facilis animi eum mollitia! Architecto, magni deserunt voluptatum vero delectus nihil. Alias quis dolores totam.
                    </p>
                    <p className="hero__text-secondComment">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolorum, officia, maiores facere, fuga nemo accusantium quo excepturi obcaecati rerum eveniet. Corrupti maiores eveniet est consequatur voluptate sit et modi.
                    </p>
                    <Link to="#">
                        MORE DETAILS 
                        <i className="fas fa-play"></i>
                    </Link>
                </div>
                <ReactPlayer 
                    className="hero__video"
                    url={video}
                    controls
                    // playing
                    // onStart={this.state.onPlay}
                    // onPause={() => alert('the video has been paused')}
                    // onPlay={() => alert('the video has been played')}
                    // onEnded={() => alert('the video has been endend.')}
                />
            </div>
        );
    }
}

export default Hero;