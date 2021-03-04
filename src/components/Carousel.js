import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import c1 from '../images/carousel/c1.jpg'
import c2 from '../images/carousel/c2.jpg'
import c4 from '../images/carousel/c4.jpg'



const Caroussel = () => {
    return (
        <Container>
            <Carousel  pause='false'>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src={c1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src={c2}
                    alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src={c4}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Caroussel


const Container = styled.div`
    margin:5%;
    border-radius:30px;
    overflow:hidden;
    -webkit-box-shadow: 0px 17px 31px 9px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 17px 31px 9px rgba(0,0,0,0.75);
box-shadow: 0px 17px 31px 9px rgba(0,0,0,0.75);
`