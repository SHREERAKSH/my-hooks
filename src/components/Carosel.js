import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import{Carousel} from 'react-elastic-carousel'
import 'bootstrap/dist/css/bootstrap.css';

import './Carosel.css'

// const breakPoints=[
//     {width:1,itemsToShow:1},
//     {width:550,itemsToShow:2},
//     {width:700,itemsToShow:3},
//     {width:1000,itemsToShow:4},
// ];

const Carosel=()=> {
  return (
   
    <Carousel>
    <Carousel.Item>
        <img
            className="carousel-img offset-md-3 offset-sm-3"
            src={require('../assets/img_onboarding_illustration1.png')}
            alt="One"
        />
        <Carousel.Caption>
            <h3 className="login-h3">Learner Engagement</h3>
            <p className="login-p">Interactive features mirror the traditional classroom experience and learners receive feedback to increase long-term retention, tripling learning efficacy over standard video.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="carousel-img offset-md-3 offset-sm-3"
            src={require('../assets/img_onboarding_illustration2.png')}
            alt="Two"
        />

        <Carousel.Caption>
            <h3 className="login-h3">Accountable Tracking</h3>
            <p className="login-p">Receive immediate, accessible data (both performance and behavior-based) to effectively remediate concepts, automatically assign grades, and address deficiencies.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="carousel-img offset-md-3 offset-sm-3"
            src={require('../assets/img_onboarding_illustration3.png')}
            alt="Two"
        />
        <Carousel.Caption>
            <h3 className="login-h3">Seamless Workflow</h3>
            <p className="login-p">Sync rosters, create and assign impactful video experiences, enrich your flipped classroom, and streamline tedious grading.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
  )
}

export default Carosel;


