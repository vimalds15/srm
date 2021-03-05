import React,{useState} from 'react'
import Modal from '../modals/Modal'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import india from '../images/admissions/india.jpg'
import international from '../images/admissions/international.jpg'

const Admissions = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Container id='admissions'>
             <Row sm={true} md={true} lg={true}>
                <Col lg={true}>
                    <AdmissionCont>
                        <Title>Admissions</Title>
                        <Wrapper>
                            <Cont>
                                <CardCont onClick={()=>setIsOpen(true)}>
                                        <img src={india} alt='india' />
                                    <p>Admission for Indian Students  <span><i className='fas fa-arrow-circle-right'></i></span></p>
                                  <h3>Know More <span><i className='fas fa-arrow-circle-right'></i></span></h3>  
                                </CardCont>
                                
                        </Cont>
                        <Cont>
                            <CardCont>
                            <img src={international} alt='international' />
                                    <p>Admission for International Students  <span><i className='fas fa-arrow-circle-right'></i></span></p>
                                    <h3>Know More <span><i className='fas fa-arrow-circle-right'></i></span></h3>
                            </CardCont>
                        </Cont>          
                        </Wrapper>
                    </AdmissionCont>
                </Col>
                <Col >
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
   background:#fafafa;
   overflow: hidden;
`


const AdmissionCont = styled.div`
   
   
`
const Wrapper = styled.div`
    display:flex;
    margin-top:20px;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`

const Title = styled.p`
    font-size:34px;
    font-weight:bold;
    text-align:center;
    margin-top:10px;
    padding:2%;
    text-transform:uppercase;
`

const CardCont = styled.div`

    display:flex;
    flex-wrap:wrap;
    border-radius:30px;
    height:300px;
    width:70%;
    overflow:hidden;
    margin-bottom:20px;
    -webkit-box-shadow: 0px 3px 7px -18px rgba(0,0,0,0.59);
    -moz-box-shadow: 0px 3px 73px -18px rgba(0,0,0,0.59);
    box-shadow: 0px 13px 40px -18px rgba(0,0,0,0.59);
    position:relative;
    cursor:pointer;
    tranisition: all 0.9s;

    img{
        height:100%;
        width:100%;
        object-fit:cover;
        border-radius:30px;
       
    }

    p{
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        text-align:center;
        font-weight:bold;
        bottom:-16px;
        height:45px;
        color: rgb(250, 225, 0);
        background:black;
        width:100%;
       
    }
    h3{
        display:flex;
        font-size:18px;
        align-items:center;
        justify-content:center;
        border-radius:20px;
        position:absolute;
        text-align:center;
        font-weight:bold;
        top:45%;
        left:10%;
        height:45px;
        color: rgb(250, 225, 0);
        background:black;
        width:80%;
        visibility:hidden;
    }

    span{
        padding-left:5px;
    }

    :hover{
        h3{
            visibility:visible;
            opacity:1;
        }
        img{
            opacity:0.3;
        }
        p{
            visibility:hidden;
        }
        tranisition: all 0.9s;
    }

    @media(min-width:900px){
        display:block;
        border-radius:30px;
        height:300px;
        margin-bottom:20px;
        -webkit-box-shadow: 0px 3px 7px -18px rgba(0,0,0,0.59);
        -moz-box-shadow: 0px 3px 73px -18px rgba(0,0,0,0.59);
        box-shadow: 0px 13px 40px -18px rgba(0,0,0,0.59);
        position:relative;

        img{
            height:100%;
            width:100%;
            object-fit:cover;
            border-radius:30px;
        }
    }

    
  
`


const EnquiryCont = styled.div`
    overflow: hidden;
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
        margin:0px;
        
        
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
    overflow: hidden;
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
const Cont = styled.div`

    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;

`

