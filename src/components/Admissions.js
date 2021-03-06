import React,{useState} from 'react'
import { Row, Col,Modal } from 'react-bootstrap'
import styled from 'styled-components'
import india from '../images/admissions/india.jpg'
import international from '../images/admissions/international.jpg'

const Admissions = () => {
    const [indianShow, setIndianShow] = useState(false);
    const [internationalShow, setInternationalShow] = useState(false);

    return (
        <Container id='admissions'>
             <Row sm={true} md={true} lg={true}>
                <Col lg={true}>
                    <AdmissionCont>
                        <Title>Admissions</Title>
                        <Wrapper>
                            <Cont>
                                <CardCont onClick={()=>setIndianShow(true)}>
                                        <img src={india} alt='india' />
                                    <p>Admission for Indian Students  <span><i className='fas fa-arrow-circle-right'></i></span></p>
                                  <h3>Know More <span><i className='fas fa-arrow-circle-right'></i></span></h3>  
                                </CardCont>
                                
                        </Cont>
                        <Cont >
                            <CardCont onClick={() => setInternationalShow(true)} >
                            <img src={international} alt='international' />
                                    <p>Admission for International Students  <span><i className='fas fa-arrow-circle-right'></i></span></p>
                                    <h3>Know More <span><i className='fas fa-arrow-circle-right'></i></span></h3>
                            </CardCont>
                        </Cont>          
                        </Wrapper>
                    </AdmissionCont>
                </Col>
                <Col lg={3}>
                <EnquiryCont >
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
                                <span><i class="fas fa-save"></i></span><span><input type='button' ></input>Submit</span>
                                </InputCont>
                            </Form>
                            </FormWrapper>
                </EnquiryCont>   
                </Col>
            </Row>
                {indianShow &&
                <Modal
                        
                    style={{
                        color: "white",
                        borderRadius: "20px",
                    }}
                    centered={true}
                    animation={true}
                    show={indianShow}
                    onHide={() => setIndianShow(false)}
                    className="custom modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header
                        style={{
                            background: "black",
                            color: "rgb(250, 225, 0)",
                            border: "4px solid rgb(250, 225, 0)"
                        }}
                        closeButton>
                        <Modal.Title
                            style={{
                                color: "rgb(250, 225, 0)",
                                borderRadius: "20px",
                                marginLeft: "auto",
                                    
                            }}
                            id="example-custom-modal-styling-title">
                            Admission For Indian Students
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{
                            color: "black",
                            borderLeft: "4px solid rgb(250, 225, 0)",
                            borderRight: "4px solid rgb(250, 225, 0)",
                            borderBottom: "4px solid rgb(250, 225, 0)",
                                
                        }}>
                        <p>
                        Follow these Steps to be part of SRM Institute of Sciene & Technology
                        </p>
                    <ul>
                        For Engineering Admissions you must meet the following requirements
                        </ul>
                        <p>
                        You need to write an entrance exam called SRMJEEE to be eligable to move forward to the next step
                        the exam should be undertake by students who is willing to learn <p></p>
                        <p>Engeineering</p>
                        <p>Medical & Health Science</p>
                        <p>Management</p>
                        <p>Science & Humanities</p>
                        <p></p>
                        Also counselling will be conducted as per marks
                        <p></p>
                        Click <a href="https://www.srmist.edu.in/admission-india/"><u>HERE</u></a> for more info:
                        <p></p><p></p>
                        <h7>*Scholrship available --Terms & Conditions apply*</h7>
                        </p>
                    </Modal.Body>
                </Modal>
            }
            



            

            {internationalShow &&
                <Modal
                        
                    style={{
                        color: "white",
                        borderRadius: "20px",
                }}
                size={"lg"}
                    centered={true}
                    animation={true}
                    show={internationalShow}
                    onHide={() => setInternationalShow(false)}
                    className="custom modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header
                        style={{
                            background: "black",
                            color: "rgb(250, 225, 0)",
                            border: "4px solid rgb(250, 225, 0)"
                        }}
                        closeButton>
                        <Modal.Title
                            style={{
                                color: "rgb(250, 225, 0)",
                                borderRadius: "20px",
                                marginLeft: "auto",
                                    
                            }}
                            id="example-custom-modal-styling-title">
                            Admission For International Students
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{
                            color: "black",
                            borderLeft: "4px solid rgb(250, 225, 0)",
                            borderRight: "4px solid rgb(250, 225, 0)",
                            borderBottom: "4px solid rgb(250, 225, 0)",
                                
                        }}>
                       <p>
                        Follow these Steps to be part of SRM Institute of Sciene & Technology
                        </p>
                    <ul>
                        For Engineering Admissions you must meet the following requirements
                        </ul>
                        <p>
                        You need to write an entrance exam called SRMJEEE to be eligable to move forward to the next step
                        the exam should be undertake by students who is willing to learn <p></p>
                        <p>Engeineering</p>
                        <p>Medical & Health Science</p>
                        <p>Management</p>
                        <p>Science & Humanities</p>
                        <p></p>
                        Also counselling will be conducted as per marks . Advance Payment of 1000 USD can be done towards pre booking of seats for preferred courses, which is non-refundable.
                        <p></p>
                        Click <a href="https://www.srmist.edu.in/admission-international/"><u>HERE</u></a> for more info:
                        <p></p><p></p>
                        <h7>*Scholrship available --Terms & Conditions apply*</h7>
                        </p>
                    </Modal.Body>
                </Modal>
                } 
            



            
               
            
        </Container>
    )
}

export default Admissions

const Container = styled.div`
   background:#fafafa;
   overflow: hidden;
   
`


const AdmissionCont = styled.div`
padding-bottom:40px;
   
`
const Wrapper = styled.div`
    display:flex;
    margin-top:20px;
    
    align-items:center;
    justify-content:center;

    @media(max-width:900px){
        flex-wrap:wrap;
    }
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
        p{
            visibility:hidden;
        }
        img{
            opacity:0.3;
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
        margin-top:0;
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

