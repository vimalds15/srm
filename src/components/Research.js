import React,{useEffect} from 'react'
import img1 from '../images/research/img.jpg'
import img2 from '../images/research/img2.jpg'
import img3 from '../images/research/img3.jpg'
import styled from 'styled-components'

//Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';



const Research = () => {

    useEffect(() => {
        AOS.init({ duration:2000,});
    },[])

    return (
        <div>
            <Title><h1 data-aos='fade-bottom'>Research <i class="fas fa-rocket"></i></h1></Title>
            <Container>
            <Wrapper>
            <Card >
                <div className='imgBx'>
                    <img className='photo i1' src={img1} alt='img1' />
                </div>
                        <div className="content">
                        <a target='_' href="https://www.srmist.edu.in/directorate-of-research/">
                        <h2 data-aos='fade-bottom'>Directorate of Research</h2>
                        <p data-aos='fade-bottom'>Fosters multi-disciplinary all pervasive research</p>
                        </a>
                </div>
            </Card>

            <Card>
                <div className='imgBx'>
                    <img className='photo i2' src={img2} alt='img2' />
                </div>
                    <div className="content">
                    <a target='_' href="https://www.srmist.edu.in/erc/index.html">        
                    <h2 data-aos='fade-bottom'>Earthquake Research Cell</h2>
                    <p data-aos='fade-bottom'>Advanced Research on occurrence and predicvtion of Earthquakes
                    </p>
                    </a>     
                </div>
            </Card>

            <Card>
            <div className='imgBx'>
                    <img className='photo i3' src={img3} alt='img3' />
                </div>
                <div className="content">
                    <a target='_' href="https://www.srmist.edu.in/nrc/">
                <h2 data-aos='fade-bottom'>Nano technology Research</h2>
                    <p data-aos='fade-bottom'>Characterization of cutting-edge nanostructured
                    </p>
                    </a>
                </div>
                </Card>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Research

const Container = styled.div`
    font-family:'Poppins',sans-serif;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:70vh;
<<<<<<< HEAD
    background:#111;
=======
    background:#fc3d3d;
>>>>>>> f5e9d1f2a8ee8c3ad936c2925b5b492cb48e977b
    overflow:hidden;
    
`

const Wrapper = styled.div`
    position:relative;
    width:1050px;
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    padding-bottom:60px;
   
    a{
        text-decoration:none;
    }
   

    @media(min-width:1100px){
        padding-top:50px;
        padding-bottom:0px;
        flex-direction:row
    }
`

const Card = styled.div`
    position:relative;
    width:300px;
    height:400px;
    background:#232427;
    transition: 0.5s;
    margin-top:150px;
    margin-left:40px;

    @media(min-width:1100px){
        margin-top:0px;
        
    }

    :hover{
        transform:translateY(-40px);

        .content p{
            color:whitesmoke;
        }
    }

    .imgBx{
        position: relative;
        max-width: 300px;
        height: 200px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        overflow:hidden;
    }

    .imgBx img{
        height:210px;
        width:100%;
        // object-fit:contain;
    }

    .content h2{
        color:#fc3d3d;
    }

    .content p{
        color:#968f8f;
    }

    .content{
        position:relative;
        width:100%;
        height:200px;
        padding:20px;
        margin:-1px;
        color:#777;
        background:#232427;
        text-align:center;
    }

    .content::before{
        content:'';
        position: absolute;
        left: 0;
        bottom: 0;
        height:300px;
        width:100%;
        background: linear-gradient(transparent, transparent, rgba(251,61,61,0.3));
        transform-origin:bottom;
        transform: skewX(45deg);
        transition:0.5s;
        pointer-events:none;
        z-index:-1;
    }

    :hover .content:before{
        transform: skewX(45deg) translateY(40px);
        filter:blur(5px);
        opacity: 0.5;
    }

    :before{
       content:'';
       position:absolute;
       top:-10px;
       left:0;
       width:100%;
       height:10px;
       background-image:url(${img1});
       transform-origin:bottom;
       transform:skewX(45deg);
       transition:0.5s;
    }

    :after{
        content:'';
        position:absolute;
        top:-11px;
        left:-10px;
        width:10px;
        height:100%;
        background-image:url(${img1});
        transform-origin:left;
        transform:skewY(45deg);
        transition:0.5s;
        border-bottom:200px solid #363434;
     }

    

    :nth-child(1){
        z-index:3;
    }
    :nth-child(2){
        z-index:2;
    }
    :nth-child(3){
        z-index:1;
    }
`

const Title = styled.div`
    text-align:center;
    background:#fafafa;
    h1{
    font-weight:bold;
    padding-top:20px;
    padding-bottom:13px;
    }
`

