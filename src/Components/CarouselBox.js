import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import oceanImg from '../assets/pexels-3312664.jpg'
import foceanImg from '../assets/man-in-black-jacket-standing-on-gray-rocky-shore-3873378.jpg'

export default class CarouselBox extends Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ oceanImg}
                    alt="ocean"
                    />
                    <Carousel.Caption>
                        <h3>Ocean Image blablabla</h3>
                        <p> some text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ foceanImg}
                    alt="ocean"
                    />
                    <Carousel.Caption>
                        <h3>HELLO Ocean Image blablabla</h3>
                        <p> some text</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}