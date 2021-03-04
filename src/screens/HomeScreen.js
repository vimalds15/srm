import React from 'react'
import Admissions from '../components/Admissions'
import Carousel from '../components/Carousel'
import Header from '../components/Header'

const HomeScreen = () => {
    return (
    <div>
        <Header />
            <Carousel />
            <Admissions />
     </div>
    )
}

export default HomeScreen
