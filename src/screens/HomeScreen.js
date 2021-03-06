import React from 'react'
import Admissions from '../components/Admissions'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Event from '../components/Event'

const HomeScreen = () => {
    return (
    <div>
        <Header />
            <Carousel />
            <Admissions />
            <Event />
     </div>
    )
}

export default HomeScreen
