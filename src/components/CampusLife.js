import React from 'react'
import styled from 'styled-components'

const CampusLife = () => {
    return (
        <div>
            <input type="radio" name='slider' id='s1' />
            <input type="radio" name='slider' id='s2' />
            <input type="radio" name='slider' id='s3' checked />
            <input type="radio" name='slider' id='s4' />
            <input type="radio" name='slider' id='s5' />

            <label form='s1' id='slide1'>
                <img src="" alt="pic" height='100%' width='100%' />
            </label>
        </div>
    )
}

export default CampusLife
