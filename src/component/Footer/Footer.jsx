import React from 'react'
import './footer.css'
import logo from '../../assets/icons8-gym-64.png'

function Footer() {
    return (
        <footer id='footer'>
            <div className="container footer">
                <div className="site-details">
                    <h5>
                        <img src={logo} className='logo' alt="logo" />
                        Fitness Hub Gym
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas accusantium ducimus modi nemo consequuntur?!
                    </p>
                </div>
                <div className="company">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="#">Our Program</a></li>
                        <li><a href="#">Our Plan</a></li>
                        <li><a href="#">Become a member</a></li>
                    </ul>
                </div>
                <div className="quick-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div >
        </footer>


    )
}

export default Footer