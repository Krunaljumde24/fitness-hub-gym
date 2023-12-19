import React from 'react'
import './landing-style.css';
import bodybuilding from '../../assets/bodybuilding2.png'

function Landing() {
    return (
        <div className="container" id='home'>
            <div className='landing row'>
                <div className="col-7 left">
                    <div className="left-part">
                        <h1 className="quote" data-aos="fade-right" data-aos-duration="1500">
                            The <span className='highlight'>PAIN</span> you feel today <br /> will be your <br /> <span className='highlight'>STRENGTH</span> tomorrow.
                        </h1>
                        <p data-aos="fade-right" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui assumenda, doloribus vero tempore obcaecati asperiores. Asperiores laudantium nam blanditiis repellendus.
                        </p>

                        <button type="button" className='btn btn-primary' data-aos="fade-right" data-aos-duration="1500">Get Started</button>
                    </div>

                </div>
                <div className="col-5">
                    <div className="box-img">
                        <img src={bodybuilding} alt="bodybuilding_image" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing;