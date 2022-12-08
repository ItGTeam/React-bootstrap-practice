import { useState, useEffect } from 'react';

import { getIntro } from '../services/contactService';

const Footer = () => {

    return (
        <div class="bg-dark">
            <div className='container py-5 content-justify-center'>
                <div className='row '>
                    <div className='row justify-content-md-center '>
                        <a href="https://github.com/ItGTeam/" className='col-1'>
                            <i class="fa-brands text-danger fa-lg fa-github"></i>
                        </a>
                        <a href="https://github.com/ItGTeam/" className='col-1'>
                            <i class="fa-brands text-danger fa-lg fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/ItGTeam/" className='col-1'>
                            <i class="fa-brands text-danger fa-lg fa-twitter"></i>
                        </a>
                        <a href="https://github.com/ItGTeam/" className='col-1'>
                            <i class="fa-brands text-danger fa-lg fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;