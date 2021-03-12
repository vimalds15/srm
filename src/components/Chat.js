import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

const Chat = () => {
    return (
        <div>
            <LinkContainer to='/chat'>
                <IconCont>
                    <i className='fas fa-comment-alt'></i>
                    <p>SRM Connect</p>
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
    border-radius:11px;
    border:2px solid rgb(255,225,0);
    background:black;
    color:white;
    cursor:pointer;
    z-index:100;
    box-shadow: 0px 4px 5px 0px rgba(251,225,0,0.75);
-webkit-box-shadow: 0px 4px 5px 0px rgba(251,225,0,0.75);
-moz-box-shadow: 0px 4px 5px 0px rgba(251,225,0,0.75);

    p{
        color:rgb(255,225,0);
        font-weight:bold;
        margin-left:5px;
       margin-top:14px;
    }

    i{
        color:rgb(255,225,0);

    }

    :hover{
        background:rgb(255,225,0);
        transition:.5s;

        p{
            color:black;
        }
        i{
            color:black;
        }
    }
`
