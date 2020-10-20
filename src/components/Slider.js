import React from 'react';  
import { Carousel } from 'react-bootstrap';
//import picture from '../pictures';

export function Slider(){
    return(
        <Carousel>
            <Carousel.Item style={{'height':'750px'}}>
                <img
                    style={{height: '750px'}}
                    className="d-block w-100"
                    src={require('../pictures/picture8.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Nürnberg 2020</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'750px'}}>
                <img
                    style={{height: '750px'}}
                    className="d-block w-100"
                    src={require('../pictures/picture.jpg')}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Nürnberg 2020</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'750px'}}>
                <img
                    style={{height: '750px'}}
                    className="d-block w-100"
                    src={require('../pictures/picture10.jpg')}
                    alt="3rd slide"
                />
                <Carousel.Caption>
                    <h3>Nürnberg 2020</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    ); 
}