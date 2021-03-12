import React,{useEffect} from 'react'
import '../css/clife.css'
import art from '../images/campuslife/art.jpg'
import athlet from '../images/campuslife/athlet.jpg'
import studlife from '../images/campuslife/student-life.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const CampusLife = () => {

  useEffect(() => {
    AOS.init({ duration:2000,});
  },[])

  return (
      
      <div className='containr' id='camlife'>
      <h1 data-aos='fade' className='tit'>Campus Life <i className=" fas fa-university"></i></h1>
      <div className='clife-wrap'>
      <div class="copy-box">
           <div class="inner">
              <div class="line right">
              <div class="scanner"></div>
              </div>
              <a href='https://www.srmist.edu.in/campus/arts-culture'><img className='im1 pics' alt='art' src={art} />
              <h6 className='hed'>Arts & Culture</h6>
              <p data-aos='fade-right' className='det'>Several student clubs and cultural events to unwind talents</p></a>
          </div>
          </div>

<div class="copy-box two">
  <div class="inner">
    <div class="line right">
      <div class="scanner"></div>
                    </div>
                    <a href="https://www.srmist.edu.in/campus/athleticsfitness"><img className='pics' alt='athlet' src={athlet} />
                    <h6 className='hed'>Athletics & Fitness</h6>
                    <p data-aos='fade-right' className='det'>Best in class facilities and coaches puts you on top of the world</p></a>
  </div>
</div>
            
            <div class="copy-box two">
  <div class="inner">
    <div class="line right">
      <div class="scanner"></div>
                    </div>
                    <a href="https://www.srmist.edu.in/campus/studentlife"><img className='pics' alt='studentslife' src={studlife} />
                    <h6 className='hed'>Students Life</h6>
                    <p data-aos='fade-right' className='det'>Exciting opportunities, the way you want to be, choice are yours</p></a>
  </div>
</div>
    </div>
    </div>
        
    )
}

export default CampusLife
