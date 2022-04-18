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
                        <h2 className='text-info mt-2'>Salma Khatun</h2>
                        <p>I'm Salma. I had no idea about web development in the course of the  course starting.But inshallah now I understand a lot.I hope I can learn a lot more in the future. In the next 2/3 months I will try to mend the deficiencies in my work.I want to build my career as a web developer. So I will be looking for a job along with the course in the next 2/3 months. I will slowly prepare myself for the job.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;