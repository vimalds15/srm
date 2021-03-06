import React from 'react'
import styled from 'styled-components'
import eng from '../images/departments/eng.jpg'
import med from '../images/departments/medical.jpg'
import mgmnt from '../images/departments/man.jpg'
import hum from '../images/departments/sci.jpg'

const Departments = () => {
    return (
        <div id='deptl' style={{'background':'#232427'}}>
        <Title> <h1>Departments</h1></Title>
        <Wrapper>
        <div className='container'>
            <div className='card'>
                <div className='box'>
                        <div className='content'>
                        <img src={eng} alt='eng' />
                        <h3>Engineering</h3>
                        <p>We have long been at the forefront of breakthrough research and innovation. We offer several degree programs,...</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='container'>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                            <img src={med} alt='med' />
                            <h3 id='medi'>Medical & Health Sciences</h3>
                            <p>Join us in pioneering research, healthcare and implementing effective clinical therapies to improve living...</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='container'>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <img src={mgmnt} alt='mgmnt' />
                        <h3>Management</h3>
                        <p>Creating effective leaders who can provide innovative ideas and solutions to change the world...</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='container'>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <img src={hum}  alt='hum'/>
                        <h3>Science & Humanities</h3>
                        <p>It is the place for fundamental research, curiosity driven, where free, open and critical inquiry is pursued</p>

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
            color:rgb(255,225,0);
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
            
        }
    }

    .container .card .box:hover{
        transform:translateY(-50px);
        // box-shadow: 0 40px 70px  rgba(0,0,0,0.5);
    }
`

const Title = styled.div`
    text-align:center;
    
    background:#232427;

    h1{
    color:rgb(255,225,0);

    padding-top:50px;
    padding-bottom:50px;
    }
`