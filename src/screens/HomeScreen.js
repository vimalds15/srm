import React from 'react'
import Admissions from '../components/Admissions'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Event from '../components/Event'
import Departments from '../components/Departments'
import Research from '../components/Research'

const HomeScreen = () => {
    return (
    <div>
        <Header />
            <Carousel />
            <Admissions />
            <Event />
            <Departments />
            <Research />
     </div>
    )
}

export default HomeScreen
