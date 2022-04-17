import React, { useEffect, useState } from 'react';
import './Home.css'
import Service from '../Service/Service'
import { CardGroup } from 'react-bootstrap';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <main className="home-container col-lg-6 col-12">
                <div className="home-detail text-center ms-2">
                    <h1 className='home-title text-info'>Professional and experienced<br /><span className='title-style'>Dentist </span></h1>
                    <p>Thank you for visiting my website.Teeth an organ that is very important to us.So its taking great care is also  important.I can give advice on how to keep this tooth healthy and beautiful. Even sick people are treated here.</p>
                </div>
                <div className="home-picture">
                    <img src="https://i.ibb.co/FmDszk2/welcome-dental-care-vector-illustration-cartoon-character-533406-114-2.png" alt="" />
                </div>
            </main>
            <div>
                <h2 className='my-4 text-info text-center'>My Services</h2>
                <CardGroup className='service-container container mb-2'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Home;