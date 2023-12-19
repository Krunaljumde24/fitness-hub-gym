import React from 'react'
import img1 from '../../assets/icons8-exercise-50.png'
import img2 from '../../assets/icons8-muscle-flexing-50.png'
import img3 from '../../assets/icons8-battle-ropes-50.png'
import './benefit.css'

function Benefits() {
    return (
        <div className="benefits">
            <div className="benefit b1">
                <div className="left">
                    <img src={img1} alt="img_1" />
                </div>
                <div className="right">
                    <h6>Healthy Life</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, aspernatur.</p>
                </div>
            </div>

            <div className="benefit b2">
                <div className="left">
                    <img src={img2} alt="img_2" />
                </div>
                <div className="right">
                    <h6>Increased Flexibility</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, aspernatur.</p>
                </div>
            </div>

            <div className="benefit b3">
                <div className="left">
                    <img src={img3} alt="img_3" />
                </div>
                <div className="right">
                    <h6>Reducing Blood Pressure</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, aspernatur.</p>
                </div>
            </div>

        </div>
    )
}

export default Benefits