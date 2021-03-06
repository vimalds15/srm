import React from 'react'
import img1 from '../images/events/img1.jpg'
import img2 from '../images/events/img2.jpg'
import img3 from '../images/events/img3.jpg'
import styled from 'styled-components'

const Event = () => {
    return (
        <div>
        <Title> <h1> SRM EVENTS </h1></Title>
        <Container>
            <Wrapper>
            <Card>
                <div className='imgBx'>
                    <img className='photo' src={img1} alt='img1'/>
                </div>
                <div className="content">
                    <h2>Convocation</h2>
                    <p>SRMIST's 16th Annual Convocation will be held virtually. Rank Holders will be awarded their degrees in person
                    </p>
                </div>
            </Card>

            <Card>
            <div className='imgBx'>
                    <img className='photo' src={img2} alt='img2' />
                </div>
                <div className="content">
                    <h2>ICON BEST-2021</h2>
                    <p>International Conference on Built Environment, Science and Technology (ICON BEST-2021)
                    </p>
                </div>
            </Card>

            <Card>
            <div className='imgBx'>
                    <img className='photo' src={img3} alt='img3' />
                </div>
                <div className="content">
                    <h2>Research Day 2021</h2>
                    <p>Research Day 2021 will be celebrated in SRM Institute of Science and Technology, Kattankulathur.
                    </p>
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

justify-content:space-evenly;
align-items:center
padding-top:50px;
background:rgb(212, 210, 210);

@media(min-width:1200px){
    height:70vh;
}
`
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:8vh;
    background:rgb(212, 210, 210);
    
    
    h1{
        margin-top:70px;
        font-size:36px;
        font-weight:bold;
        
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
    max-width:300px;
    height:215px;
    background:#fff;
    margin:30px 10px;
    padding:20px 15px;
    display:flex;
    flex-direction:column;
    border-radius:12px;
    box-shadow: 0 10px 30px 10px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;


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
        color:#111;
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
    }

    .imgBx{
        position:relative;
        width:260px;
        height:260px;
        top:-60px;
        left:20px;
        box-shadow: 0 5px 20px rgba(0,0,0,,0.5);

        .photo{
            height:90%;
            max-width:100%;
            border-radius:10px;
        }
    }
`



