import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import c1 from '../images/carousel/c1.jpg'
import c2 from '../images/carousel/c2.jpg'
import c4 from '../images/carousel/c4.jpg'



const Caroussel = () => {
    return (
        <MasterCont>
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
            </MasterCont>
    )
}

export default Caroussel

const MasterCont = styled.div`
    background:rgb(212, 210, 210);
    padding:50px;
`


const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:30px;
    overflow:hidden;
    -webkit-box-shadow: -1px 13px 31px 9px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 13px 31px 9px rgba(0,0,0,0.75);
    box-shadow: -1px 13px 31px 9px rgba(0,0,0,0.75);
    transition:all 0.5s ease ;
    }

    @media(min-width:1200px){
        
        margin:0 auto;
        border-radius:30px;
        overflow:hidden;
        width:70%;
        -webkit-box-shadow: -1px 13px 31px 9px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 13px 31px 9px rgba(0,0,0,0.75);
        box-shadow: -1px 13px 31px 9px rgba(0,0,0,0.75);
        transition:all 0.5s ease ;
    }
    }
`






