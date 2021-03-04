import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
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
                        <Cont>
                            <img src={india} />
                            <p></p>
                            <img src={international} />
                            <p></p>
                        </Cont>
                    </AdmissionCont>    
                </Col>
                <Col lg={3}>
                <EnquiryCont>
                        <Title>Submit a Enquiry</Title>
                </EnquiryCont>   
                </Col>
            </Row> 
        </Container>
    )
}

export default Admissions

const Container = styled.div`
   background:#fafafa;
    
`

const AdmissionCont = styled.div`
   
   
`

const Title = styled.p`
    font-size:28px;
    font-weight:bold;
    text-align:center;
    
`

const Cont = styled.div`
@media(max-width:500px){
display:flex;
flex-wrap:wrap;
align-items:center;
ustify-content:center;

   
img{
    display:flex;
    border-radius:30px;
    object-fit:cover;
    height:300px;
    width:70%;
    margin-left:20px;
    -webkit-box-shadow: 0px 43px 73px -18px rgba(0,0,0,0.59);
    -moz-box-shadow: 0px 43px 73px -18px rgba(0,0,0,0.59);
    box-shadow: 0px 43px 73px -18px rgba(0,0,0,0.59);
}
}
@media(min-width:10){
    display:none;
}
`

const EnquiryCont = styled.div`
    background:green
`