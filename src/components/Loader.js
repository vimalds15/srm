import React from 'react'
import styled from 'styled-components'
import im from '../images/load.png'

const Loader = () => {
    return (
        <Container>
            <ImageCont>
                <Image src={im}></Image>
            </ImageCont>
        </Container>
    )
}

export default Loader

const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#111;
`

const ImageCont = styled.div`
    height:fit-content;
    width:fit-content;
    background:red;
    border-radius:50%;
    animation-name:anim;
    animation-duration:3s;
    animation-iteration-count:infinite;
    

    @keyframes anim {
        0%{
            box-shadow: 0px 7px 10px 0px rgba(245,255,4,0.75);
            -webkit-box-shadow: 0px 7px 10px 0px rgba(245,255,4,0.75);
            -moz-box-shadow: 0px 7px 10px 0px rgba(245,255,4,0.75);
        }
        50%{
            box-shadow: 0px 10px 43px 0px rgba(245,255,4,0.75);
            -webkit-box-shadow: 0px 10px 43px 0px rgba(245,255,4,0.75);
            -moz-box-shadow: 0px 10px 43px 0px rgba(245,255,4,0.75);
        }
        100%{
            box-shadow: 0px 10px 7px 0px rgba(245,255,4,0.75);
            -webkit-box-shadow: 0px 7px 10px 0px rgba(245,255,4,0.75);
            -moz-box-shadow: 0px 7px 10px 0px rgba(245,255,4,0.75);
        }
    }
`

const Image = styled.img`
    height:150px;
    width:150px;

`