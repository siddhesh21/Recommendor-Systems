import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="socialsContainer">
                    <FacebookIcon />
                    <InstagramIcon />                    
                    <YouTubeIcon />
                </div>
                <div className="footerTextContainer">
                    <div className="footerTextRow">
                        <p>Audio and Subtitles</p>
                        <p>Media Center</p>
                        <p>APrivacy</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="footerTextRow">
                        <p>Audio Description</p>
                        <p>Investor Relations</p>
                        <p>Legal Notices</p>
                    </div>
                    <div className="footerTextRow">
                        <p>Help Center</p>
                        <p>Jobs</p>
                        <p>Cookie Preferences</p>                        
                    </div>
                    <div className="footerTextRow">
                        <p>Gift Cards</p>
                        <p>Terms of Use</p>
                        <p>Corporate Information</p>                        
                    </div>
                </div>
                <button className="serviceCodeBtn">Service Code</button>
                <p className="copyrightText">© 1997-2021 Fake Netflix Inc.</p>
            </div>
        </div>
    )
}

export default Footer;
