import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='text-info text-center mt-3'>This is My About</h2>
            <div className='about-container'>
                <div >
                    <div className='about-img'>
                        <img style={{ height: 150 }} src="https://i.ibb.co/1vtjGKq/69214609-222807605358660-3567179753343418368-n.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h2>Salma Khatun</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam a ratione blanditiis qui aut cupiditate!</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;