import React from 'react'
import './pricing.css'

import bluedot from '../../assets/blue-dot-30.png';
import blackdot from '../../assets/black-dot-30.png'

function Pricing() {

    let pricingDetails = [
        {
            heading: 'Regular Member',
            price: '1000₹/Month',
            className: 'card pricing-card c1',
            listItems: [
                'Unlimited access to the gym',
                'Customer support',
                'Personal trainer',
                'Standard options',
                '5 classes per week'
            ]
        },
        {
            heading: 'Premium Member',
            price: '2500₹/Month',
            className: 'card pricing-card c2',
            listItems: [
                'Unlimited access to the gym',
                'Customer support',
                'Personal trainer',
                'Standard options',
                '5 classes per week'
            ]
        },
        {
            heading: 'Standard Member',
            price: '1500₹/Month',
            className: 'card pricing-card c3',
            listItems: [
                'Unlimited access to the gym',
                'Customer support',
                'Personal trainer',
                'Standard options',
                '5 classes per week'
            ]
        }

    ]

    return (
        <div className='pricing-container container' id='pricing'>
            {pricingDetails.map((dtls) => {
                return (
                    <div className={dtls.className}
                        data-aos="zoom-in" data-aos-duration="1500">
                        <div className="card-body header">
                            <h2 className='card-title'>
                                {dtls.heading}
                            </h2>
                            <p className='card-text text-center'>
                                {dtls.price}
                            </p>
                        </div>
                        <div className="card-body">
                            <ul className='list-group list-group-flush'>
                                {dtls.listItems.map((item) => {
                                    return (

                                        <li class="list-group-item">
                                            {dtls.heading === 'Premium Member' ?
                                                <img src={bluedot} /> : <img src={blackdot} />}
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='text-center'>
                            <button type='button' className='btn btn-primary'>Join Now</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Pricing