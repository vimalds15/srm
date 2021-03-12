import React,{useEffect} from 'react'
import '../css/about.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration:2000,});
    },[])

    return (
        <div className='abt-total' id='abt-scr'>
            <div className='title abt-tit'>
                <h1 data-aos='fade'>About Us</h1>
            </div>
            <div class="contaner">
                <div class="carosel">
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                    <div class="carosel__face"></div>
                </div>
            </div>
        </div>
    )
}

export default About


