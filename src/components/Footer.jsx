import React from 'react';
import { FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-logo" >
                    <span className=""><FaFacebookSquare/></span>
                    <span className="#"><FaInstagram/></span>
                    <span className="#"><FaTwitter/></span>
                    <span className="#"><FaYoutube/></span>
                </div>
                <div className="footer-info">
                    <p className="#">Conditions of Use</p>
                    <p className="#">Privacy & Policy</p>
                    <p className="#">Press Room</p>
                </div>
                <p>&copy 2023 MovieBox by iAbbakr</p>
            </div>
        </>    
    )
}

