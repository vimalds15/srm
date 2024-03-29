import React, { useEffect } from 'react'
import img1 from '../images/events/img1.jpg'
import img2 from '../images/events/img2.jpg'
import img3 from '../images/events/img3.jpg'
import styled from 'styled-components'

//Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {


    useEffect(() => {
        AOS.init({ duration:2000,});
    },[])

    return (
        <div id='eventl'>
        <Title> <h1 data-aos='fade-bottom'> SRM EVENTS <i class="far fa-calendar-alt"></i></h1></Title>
        <Container>
            <Wrapper>
            <Card>
                <div className='imgBx'>
                    <img data-aos='zoom-in' className='photo' src={img1} alt='img1'/>
                </div>
                <div className="content">
                    <a href="https://www.srmist.edu.in/announcement/16th-Convocation"><h2>Convocation</h2>
                    <p>SRMIST's 16th Annual Convocation will be held virtually. Rank Holders will be awarded their degrees in person
                    </p></a>
                </div>
            </Card>

            <Card>
            <div className='imgBx'>
                    <img data-aos='zoom-in' className='photo' src={img2} alt='img2' />
                </div>
                <div className="content">
                    <a href="https://www.srmist.edu.in/events/icon-best-2021"><h2>ICON BEST-2021</h2>
                    <p>International Conference on Built Environment, Science and Technology (ICON BEST-2021)
                    </p></a>
                </div>
            </Card>

            <Card>
            <div className='imgBx'>
                    <img data-aos='zoom-in' className='photo' src={img3} alt='img3' />
                </div>
                <div className="content">
                    <a href="https://www.srmist.edu.in/events/e-icmta-2021"><h2>Research Day 2021</h2>
                    <p>Research Day 2021 will be celebrated in SRM Institute of Science and Technology, Kattankulathur.
                    </p></a>
                </div>
                </Card>
                </Wrapper>
            </Container>
            </div>
    )
}

export default Event

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center
padding-top:50px;
background: linear-gradient(180deg, #fff,#fff,#fff,#fff,#fff,#fff, rgba(255,225,0,0.9));


@media(min-width:990px){
    height:100vh;
}

@media(min-width:1040px){
    height:60vh;
    
}

`
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:8vh;
    // background: linear-gradient(0deg, #fafafa,#fafafa,#fafafa, rgba(255,225,0,0.9));

    
    
    
    h1{
        margin-top:70px;
        margin-bottom:50px;
        font-size:36px;
        font-weight:bold;
        color:rgb(102, 102, 102);
    }
`

const Wrapper = styled.div`
    postition:relative;
    width:1100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    padding:30px;
    
`

const Card = styled.div`
    position:relative;
    width:300px;
    height:215px;
    background:#fff;
    margin:30px 10px;

    padding:20px 15px;
    display:flex;
    flex-direction:column;
    border-radius:12px;
    border:1px solid rgb(255,225,0);
    transition: 0.3s ease-in-out;
    -webkit-box-shadow: -1px 56px 54px -40px rgba(231,166,26,1);
    -moz-box-shadow: -1px 56px 54px -40px rgba(231,166,26,1);
    box-shadow: -1px 56px 54px -40px rgba(231,166,26,1);


    :hover{
        height:420px;
        
        
        .content{
            visibility:visible;
            opacity:1;
            margin-top:-60px;
            transition-delay:0.3s;

        }
    }

    .content{
        position:relative;
        margin-top: -140px;
        padding; 10px 15px;
        text-align:center;
        visibility:hidden;
        opacity:0;
        transition: 0.3s ease-in-out;


        p{
            color:#111;
        }

        h2{
            color:#ff7300;
            font-size:24px;
        }

        a{
            text-decoration:none;
        }
    }

    .imgBx{
        position:relative;
        width:260px;
        height:260px;
        top:-60px;
        left:24px;
        box-shadow: 0 5px 20px rgba(0,0,0,,0.5);

        :hover{
            position:relative;
            width:260px;
            height:260px;
            top:-60px;
            left:24px;
            box-shadow: 0 5px 20px rgba(0,0,0,,0.5);
        }
   


        .photo{
            height:90%;
            max-width:100%;
            border-radius:10px;
        }
    }


    @media(min-width: 990px){
        border:1px solid rgb(255,225,0);
        :hover{
            -webkit-box-shadow: 2px 0px 21px 2px rgba(231,166,26,1);
            -moz-box-shadow: 2px 0px 21px 2px rgba(231,166,26,1);
            box-shadow: 2px 0px 21px 2px rgba(231,166,26,1);
        }
    }
    
`



