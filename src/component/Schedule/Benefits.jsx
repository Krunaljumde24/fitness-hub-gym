import React from 'react'
import img1 from '../../assets/icons8-exercise-50.png'
import img2 from '../../assets/icons8-muscle-flexing-50.png'
import img3 from '../../assets/icons8-battle-ropes-50.png'
import './benefit.css'

function Benefits() {

    let bnfts = [
        {
            id: 1,
            class: 'benefit b1',
            imgUrl: img1,
            heading: 'Healthy Life',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, aspernatur.'
        },
        {
            id: 2,
            class: 'benefit b2',
            imgUrl: img2,
            heading: 'Increased Flexibility',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, aspernatur.'
        },
        {
            id: 3,
            class: 'benefit b3',
            imgUrl: img3,
            heading: 'Reducing Blood Pressure',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, aspernatur.'
        }

    ]

    return (
        <div className="benefits">
            {bnfts.map((bnf) => {
                return (
                    <div className={bnf.class} key={bnf.id} data-aos="zoom-in" data-aos-duration="1500">
                        <div className="left">
                            <img src={bnf.imgUrl} />
                        </div>
                        <div className="right">
                            <h6>{bnf.heading}</h6>
                            <p>{bnf.content}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Benefits