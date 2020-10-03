import React, { Fragment } from 'react';

import './styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Targets from '../components/Targets';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Home() {
    return (
        <Fragment>
            <Navbar
                header={true}
            />
            <Hero />
            <Courses 
                className="courses"
                title="COURSES"
                subtitle="PORTRAIT  LANDSCAPE   STREET"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum reprehenderit unde quasi deleniti error assumenda maiores excepturi libero ducimus, ratione neque quam dolores harum, culpa, eius expedita placeat illo unde quasi deleniti error assumenda maiores excepturi libero ducimus, ratione neque quam dolores harum, culpa, eius expedita placeat illo.."
            />
            <Targets />
            <Courses 
                className="gearshop"
                title="GEAR SHOP"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum reprehenderit unde quasi."
            />
            <Gallery />
            <hr/>
            <Navbar
                header={false}
            />
            <Contact />
            <h3>OFFICE</h3>
            <Menu />
            <hr/>
            <Footer />
        </Fragment>
    );
}

export default Home;