import React from 'react'
import './landing-style.css';
import bodybuilding from '../../assets/bodybuilding2.png'

function Landing() {
    return (
        <div className='landing row'>
            <div className="col">
                <h1 className="quote">
                    Workout till you feel that pain and soreness in muscles. This one is good pain. No pain, no gain.
                </h1>
            </div>
            <div className="col">
                <img src={bodybuilding} alt="bodybuilding_image" className='bodybuilding_image' />
            </div>

        </div>
    )
}

export default Landing;