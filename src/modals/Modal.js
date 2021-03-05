import React from 'react'


//underdevelopment
const Modal = ({ open, children }) => {
    if (!open) return null;

    return (
        <div className='popup'>
            {console.log(children)}
        </div>
    )
}

export default Modal
