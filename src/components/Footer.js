import React from 'react';
import '../styles.css'

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className='footer'>
            <p className='footer-text'>
                For more details contact: <a href=''>moviedux@gmail.com</a>
            </p>
            <br/>
            <p className='footer-text'>
                ©{currentYear} MovieDux, All rights reserved.
            </p>
        </footer>
    );
}