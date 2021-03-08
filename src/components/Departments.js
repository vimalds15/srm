import React,{useEffect} from 'react'
import styled from 'styled-components'
import eng from '../images/departments/eng.jpg'
import med from '../images/departments/medical.jpg'
import mgmnt from '../images/departments/man.jpg'
import hum from '../images/departments/sci.jpg'
//Animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

const Departments = () => {

    useEffect(() => {
        AOS.init({ duration:2000,});
    },[])

    return (
        <div id='deptl' style={{'background':'#232427'}}>
        <Title> <h1 data-aos='fade-up'>Academics</h1></Title>
        <Wrapper>
        <div className='container'>
            <div data-aos='zoom-in' className='card'>
                <div className='box'>
                    <div className='content'>
                        <a target='_' href="https://www.srmist.edu.in/academics/engineering">
                        <img src={eng} alt='eng' />
                        <h3 data-aos='fade-left'>Engineering</h3>
                        <p data-aos='fade-right'>We have long been at the forefront of breakthrough research and innovation. We offer several degree programs,...</p>
                        </a>
                    </div>
                </div>
            </div>
            </div>

            <div className='container'>
            <div data-aos='zoom-in' className='card'>
                <div className='box'>
                            <div className='content'>
                            <a target='_' href="https://www.srmist.edu.in/medical-college">
                            <img src={med} alt='med' />
                            <h3 data-aos='fade-left' id='medi'>Medical & Health Sciences</h3>
                                <p data-aos='fade-right'>Join us in pioneering research, healthcare and implementing effective clinical therapies to improve living...</p>
                                </a>
                    </div>
                </div>
            </div>
            </div>

            <div className='container'>
            <div data-aos='zoom-in' className='card'>
                <div className='box'>
                        <div className='content'>
                        <a target='_' href="https://www.srmist.edu.in/academics/management">
                        <img src={mgmnt} alt='mgmnt' />
                        <h3 data-aos='fade-left'>Management</h3>
                        <p data-aos='fade-right'>Creating effective leaders who can provide innovative ideas and solutions to change the world...</p>
                        </a>
                    </div>
                </div>
            </div>
            </div>

            <div className='container'>
            <div data-aos='zoom-in' className='card'>
                <div className='box'>
                        <div className='content'>
                        <a target='_' href="https://www.srmist.edu.in/academics/science-and-humanities">
                        <img src={hum}  alt='hum'/>
                        <h3 data-aos='fade-left'>Science & Humanities</h3>
                        <p data-aos='fade-right' >It is the place for fundamental research, curiosity driven, where free, open and critical inquiry is pursued</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    </div>
    )
}

export default Departments

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    font-weight:bold;
    transition:all .5s ;
    align-items:center;
    background:#232427;
   
    @media(max-width:1600px){
        min-height:100vh;
        flex-wrap:wrap;
    }

    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        max-width:500px;
        margin:0px 0;
    }

    .container .card{
        background:#232427;
        position:relative;
        min-width:320px;
        height:440px;
        box-shadow:inset 5px 5px 5px rgba(0,0,0,0.2),
                   inset -5px -5px 15px rgba(255,255,255,0.1),
                     5px 5px 15px rgba(0,0,0,0.3),
                     -5px -5px 15px rgba(255,255,255,0.1);

        border-radius:15px;
        margin: 30px;
        
    }

    .container .card .box{
        position:absolute;
        top:20px;
        left:20px;
        right:20px;
        bottom:20px;
        background:@2a2b2f;
        border: 2px solid #1e1f23;
        border-radius:15px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        transition:all 0.5s ;
        overflow:hidden;
        text-align:center;

        img{
            height:200px;
            width:100%;
        }

        h3{
            color:#fc3d3d;
            padding:10px;
            font-weight:bold;
        }

        #medi{
            color:rgn(255,255,0);
            margin-top:10px;
            padding:5px;
        }

        p{
            padding:2px;
            color:#968f8f;
            
        }

        a{
            text-decoration:none;

        }
    }

    .container .card .box:hover{
        transform:translateY(-50px);
        
        // box-shadow: 0 40px 70px  rgba(0,0,0,0.5);

        p{
            color:white;
        }
    }
`

const Title = styled.div`
    text-align:center;
    
    background:#232427;

    h1{
    color:#fc3d3d;

    padding-top:50px;
    padding-bottom:50px;
    }
`