import React from 'react'
import './schedule.css'

import Benefits from './Benefits'


function Schedule() {
    return (
        <div className='schedule-container' id='schedule'>
            <div className="part1">
                <h2>Benefits of <span className='exercise'>
                    Exercise
                </span>
                </h2>
                <p className='para'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur incidunt et hic itaque recusandae amet sequi saepe vel.
                </p>
            </div>
            <div className="part2">
                <Benefits />
            </div>
            <div>
                <table>
                </table>
            </div>
        </div>
    )
}

export default Schedule