import React from 'react'
import '../css/footer.css'
import logo from '../images/logo.png'


const Footer = () => {
    return (
        <div>
        <div className='containe'>

            <div className='f-1 sec'>
                <img src={logo} alt='srm logo' />
                <ul>
                    <h3><li><a href="https://www.srmist.edu.in/privacy-policy">Privacy & Policy</a></li>
                    <li><a href="https://www.srmist.edu.in/terms-and-conditions">Terms & Conditions</a></li>
                    <li><a href="http://mail.srmist.edu.in/">Campus Mail</a></li>
                    <li><a href="https://www.srmist.edu.in/">Student Portal</a></li></h3>
                </ul>
            </div>

            <div className='f-2 sec'>
                <h2>GET CONNECTED</h2>
                <ul>
                    <h3><li><a href="https://www.srmist.edu.in/aboutus/strategic-alliance">International Alliances</a></li>
                    <li><a href="https://www.srmist.edu.in/acdemics/international-advisory-board">International Advisory Board</a></li>
                    <li><a href="https://www.srmist.edu.in/aboutus/corporate-advisory-board">Corporate Advisory Board</a></li>
                    <li><a href="https://www.srmist.edu.in/about/accreditation-and-ranking">Accreditations & Ranking</a></li>
                    <li><a href="https://www.srmist.edu.in/placement">Placements</a></li>
                    <li><a href="https://www.srmist.edu.in/ir/">International Relations</a></li></h3>
                </ul>
            </div>

            <div className='f-3 sec'>
                <h2>INSIGHTS</h2>
                <ul>
                    <h3><li><a href="https://www.srmiic.com/">Innovation & Incubation Center</a></li>
                    <li><a href="https://www.srmist.edu.in/soc">Student Clubs</a></li>
                    <li><a href="http://srmuniv.researgence.com/">Researgence</a></li>
                    <li><a href="http://webstor.srmist.edu.in/web_assets/srm_mainsite/files/new.html">SRM Video</a></li>
                    <li><a href="https://www.srmist.edu.in/virtual/tour/Index.html">Virtual Tour</a></li>
                    <li><a href="https://www.srmist.edu.in/campus_connect/spectrum">Spectrun</a></li>
                    <li><a href="https://www.srmist.edu.in/iqac/internal-quality-assurance-cell">IQAC</a></li></h3>
                </ul>
            </div>

            <div className='f-4 sec'>
                <h2>CAMPUSES</h2>
                <ul>
                    <h3><li><a href="https://www.srmist.edu.in/">Chennai Main Campus - Kattankulathur</a></li>
                    <li><a href="https://ist.srmrmp.edu.in/">Chennai - Ramapuram</a></li>
                    <li><a href="https://www.srmist.edu.in/vadapalani">Chennai - Vadapalani Campus</a></li>
                    <li><a href="http://srmimt.net/">Delhi - NCR</a></li>
                    <li><a href="http://srmap.edu.in/">SRM University - AP - Andhra Pradesh</a></li>
                    <li><a href="http://www.srmuniversity.ac.in/">SRM University - Haryana</a></li>
                    <li><a href="http://www.srmus.ac.in/">SRM University - Sikkim</a></li></h3>
                </ul>
            </div>

            <div className='f-5 sec'>
                <h2>Social Handles</h2>
                <ul>
                    <h3><li><a href="https://www.instagram.com/SRMUniversityOfficial/"><i class="fab fa-instagram"></i>Instagram</a></li>
                    <li><a href="https://twitter.com/SRM_Univ"><i class="fab fa-twitter"></i>Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/srm-ist-chennai"><i class="fab fa-linkedin"></i>Linkedin</a></li>
                    <li><a href="https://www.youtube.com/user/SRMeducation?ob=0"><i class="fab fa-youtube"></i>Youtube</a></li>
                    <li><a href="https://www.facebook.com/SRMUniversityOfficial"><i class="fab fa-facebook"></i>Facebook</a></li></h3>
                </ul>
            </div>

            </div>
            <div className='cpyright'>&copy; 2021. All Rights Reserved. Made by Anto Vimalan & Immanuel Raj</div>
        </div>
    )
}

export default Footer
