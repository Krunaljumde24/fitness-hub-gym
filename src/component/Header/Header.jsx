import React from 'react'
import headerIcon from '../../assets/icons8-gym-64.png'
import './header-style.css';

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={headerIcon} alt="gym_icon" width="50px" className='mx-3' />
                        <span className='heading'>Fitness Hub</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#fitnessHubNavbarContent" aria-controls="fitnessHubNavbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="fitnessHubNavbarContent">
                        <ul class="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                    Schedule
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                    Classes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                        <button type='button' className='btn btn-primary mr-auto'>Register</button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header;