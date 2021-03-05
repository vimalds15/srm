import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import india from '../images/admissions/india.jpg'
import international from '../images/admissions/international.jpg'

const Admissions = () => {
    return (
        <Container id='admissions'>
             <Row sm={true} md={true} lg={true}>
                <Col lg={true}>
                    <AdmissionCont>
                        <Title>Admissions</Title>
                        <Wrapper>
                            <Cont>
                                <CardCont>
                                    <img src={india} alt='india' />
                                    <p>Welcome to India</p>
                                </CardCont>
                                
                        </Cont>
                        <Cont>
                            <CardCont>
                            <img src={international} alt='international' />
                                    <p></p>
                            </CardCont>
                        </Cont>
                            
                        </Wrapper>
                    </AdmissionCont>
                </Col>
                <Col lg={3}>
                <EnquiryCont>
                        <EnqTitle>Submit an Enquiry</EnqTitle>
                        <FormWrapper>
                            <Form>
                                <InputCont>
                                <span><i className='fas fa-user'></i></span><span><input type='text' placeholder='Enter Your Name'></input></span>
                                </InputCont>
                                <InputCont>
                                <span><i className='fa fa-phone'></i></span><span><input type='text' placeholder='Enter Your Mobile Number'></input></span>
                                </InputCont>
                                <InputCont>
                                <span><i className='fa fa-envelope'></i></span><span><input type='email' placeholder='Enter Your Email Address'></input></span>
                                </InputCont>
                                <InputCont>
                                <span><i className='fas fa-user'></i></span><span><input type='text' placeholder='Not Implemented'></input></span>
                                </InputCont>
                            </Form>
                            </FormWrapper>
                </EnquiryCont>   
                </Col>
            </Row> 
        </Container>
    )
}

export default Admissions

const Container = styled.div`
   background:#111;
    
`

const AdmissionCont = styled.div`
   
   
`

const Title = styled.p`
    font-size:34px;
    font-weight:bold;
    text-align:center;
    margin-top:10px;
    padding:2%;
    
    
`
const Wrapper = styled.div`
    @media(min-width:900px){
    display:flex;
    }
`


const Cont = styled.div`
{
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;

   
img{
    display:flex;
    border-radius:30px;
    object-fit:cover;
    height:300px;
    width:70%;
    margin-bottom:20px;
    -webkit-box-shadow: 0px 3px 7px -18px rgba(0,0,0,0.59);
    -moz-box-shadow: 0px 3px 73px -18px rgba(0,0,0,0.59);
    box-shadow: 0px 13px 40px -18px rgba(0,0,0,0.59);

}



@media(min-width:900px){
    display:flex;
    align-items:center;
    justify-content:center;

   
img{
    display:block;
    border-radius:30px;
    object-fit:cover;
    height:300px;
    margin-bottom:20px;
    -webkit-box-shadow: 0px 3px 7px -18px rgba(0,0,0,0.59);
    -moz-box-shadow: 0px 3px 73px -18px rgba(0,0,0,0.59);
    box-shadow: 0px 13px 40px -18px rgba(0,0,0,0.59);
    position:relative;
}

}
}

`

const CardCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        position:relative;
    }

    p {
        position:absolute;
        background:red;
        ;
    }
`

const EnquiryCont = styled.div`
    background:black;
    color:white;
    height:100%;
    margin-top:40px;
    padding-top:20px;
    padding-bottom:40px;
    transition: all 0.9s;

    input{
        width:100%;
        height:50px;
        font-size:18px;
        border-radius:10px;
        padding:15px;
        
    }

    input:hover{
        border:3px solid rgb(250, 225, 0);
    }

    input:focus{
        outline-style:none;
        border:4px solid rgb(250, 225, 0);
    }

    @media(min-width:990px){
        margin-top:0px;
        
        
    }
`

const EnqTitle = styled.div`
    font-size:34px;
    font-weight:bold;
    text-align:center;
    margin-top:10px;
    margin-bottom:10px;
    padding:2%;
    color:rgb(250, 225, 0);
`

const FormWrapper = styled.div`
display:block;
width:80%;
margin:0 auto;
color:white;
background:black;
`

const Form = styled.form`
    
`

const InputCont = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:15px;

span{
    margin-right:10px;
}

i{
    color: rgb(250, 225, 0);
}
`