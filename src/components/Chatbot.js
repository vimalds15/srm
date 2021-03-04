import React from 'react'
import styled from 'styled-components'

const Chatbot = () => {

    return (
        <div>
            <Container >
                <a href="http://kanishkkunal.com"
                    target="popup"
                    onClick={window.open('https://console.dialogflow.com/api-client/demo/embedded/3a87f0cd-e239-4c94-8edb-f2cfd591e3a8', 'popup', 'width=600,height=600')} >
                    
                    <i className='fas fa-comment-alt'></i>
                </a>
   
        </Container>
        </div>
    )
}

export default Chatbot

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border:3px solid red;
    background:#fafafa;
    border-radius:50%;
    height:50px;
    width:50px;
    position:fixed;
    right:30px;
    bottom:30px;
    box-shadow: -1px 10px 30px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 10px 30px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 10px 30px 0px rgba(0,0,0,0.75);

    i{
        color:red;
    }
`