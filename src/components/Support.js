import React,{useEffect} from 'react'
import '../css/support.css'

import vim from '../images/devs/vim.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Support = () => {

	useEffect(() => {
        AOS.init({ duration:2000,});
    },[])

    return (
        <div className='dev-cont'>
            <h1 data-aos='fade'>Developers</h1>
        <div className='spt-cont'>
            <div class="image-area">
		        <div class="img-wrapper">
			        <img src={vim} alt="Anto Vimalan" />
			<h2>Anto Vimalan</h2>
			<ul>
				<li><a target='_' href="https://github.com/vimalds15"><i class="fab fa-github"></i></a></li>
				<li><a  target='_' href="https://www.instagram.com/vimal_ds/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="#none"><i class="fab fa-twitter"></i></a></li>
				<li><a href="#none"><i class="fab fa-youtube"></i></a></li>
			</ul>
                </div>
                </div>
                
                <div class="image-area">
		        <div class="img-wrapper">
			        <img src="https://avatars.githubusercontent.com/u/26855364?s=460&u=93471c1424b671ba93364ce454e23c4c8f3e37ca&v=4" alt="Immanuel Raj" />
			<h2>Immanuel Raj</h2>
			<ul>
				<li><a  target='_' href="https://github.com/IMMANUEL44"><i class="fab fa-github"></i></a></li>
				<li><a  href="#none"><i class="fab fa-instagram"></i></a></li>
				<li><a href="#none"><i class="fab fa-twitter"></i></a></li>
				<li><a href="#none"><i class="fab fa-youtube"></i></a></li>
			</ul>
		</div>
	</div>
            </div>
            </div>
    )
}

export default Support
