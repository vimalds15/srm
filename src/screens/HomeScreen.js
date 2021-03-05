import React from 'react'
import Admissions from '../components/Admissions'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Chatbot from '../components/Chatbot'

const HomeScreen = () => {
    return (
    <div>
        <Header />
            <Carousel />
            <Admissions />

            <Chatbot />

    
     </div>
    )
}

export default HomeScreen
