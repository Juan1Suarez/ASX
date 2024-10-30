"use client";
import React from 'react';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <img className="logoFooter" src="./ASX.png"></img>
                <div className="footersub1">
                    <h3>About Us</h3>
                    <small>Our history</small>
                    <small>How we work</small>
                    <small>Terms of use</small>
                    <small>Privacy policy</small>
                    <small>Work with us</small>
                    <small>What´s new</small>
                </div>
                <div className="footersub1">
                    <h3>Comunity</h3>
                    <small>Blog</small>
                    <small>Linkedin</small>
                    <small>Twitter</small>
                    <small>Youtube</small>
                    <small>Instagram</small>
                    <small>Reddit</small>
                </div>
                <div className="footersub2">
                    <h3>Language</h3>
                    <button>English</button>
                    <button>Spanish</button>
                </div>
            </div>
            <small className='trademark'>ASX® and all associated trademarks, logos, and brand names are the property of ASX Limited. Any use of these marks without prior consent is strictly prohibited. This website is not affiliated with, endorsed by, or sponsored by ASX Limited. 2006-2024©</small>
        </>
    );
}