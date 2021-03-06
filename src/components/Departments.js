import React from 'react'
import styled from 'styled-components'

const Departments = () => {
    return (
    <Wrapper>
        <div className='container'>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        

                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
    )
}

export default Departments

const Wrapper = styled.div`
    font-family:'Poppins',sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#232427;

    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        max-width:1200px;
        margin:40px 0;
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
    }
`