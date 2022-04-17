import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-info text-white mt-5'>
            <div className='container footer-details '>
                <div className='mt-5 footer-detail'>
                    <h4>Home</h4>
                    <p>Home</p>
                    <p>Community</p>
                    <p>Events</p>
                    <p>Contact</p>
                </div>
                <div className='mt-5'>
                    <h4>Resources</h4>
                    <p>Blog</p>
                    <p>News</p>
                    <p>Guides</p>
                    <p>Help Center</p>
                </div>
                <div className='mt-5'>
                    <h4>Community</h4>
                    <p>NewsFeed</p>
                    <p>Profile</p>
                    <p>Friends</p>
                    <p>Forums</p>
                </div>
                <div className='mt-5'>
                    <h4>Main Links</h4>
                    <p>Members</p>
                    <p>Activity</p>
                    <p>Groups</p>
                    <p>Private group</p>
                </div>
                <div className='mt-5'>
                    <h4>Subscribe Cirkle <br />NewsLetter</h4>
                    <p>Subscribe to be the first one to know about updates .</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;