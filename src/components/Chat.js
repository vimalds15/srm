import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

const Chat = () => {
    return (
        <div>
            <LinkContainer to='/chat'>
                <IconCont>
                    <i className='fas fa-comment-alt'></i>
                    <p>Live Connect</p>
                </IconCont>
            </LinkContainer>
            
        </div>
    )
}

export default Chat

const IconCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    bottom:80px;
    right:15px;
    height:50px;
    width:150px;
    border-radius:20px;
    background:red;
    color:white;
    cursor:pointer;
    z-index:100;
    

    p{
        
        margin-left:5px;
       margin-top:14px;
    }

    :hover{
    background:rgb(233, 0, 0);;

    }
`