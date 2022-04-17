import React, { useEffect, useState } from 'react';
import './Home.css'
import Service from '../Service/Service'

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
                <div className="home-detail">
                    <h1 className='home-title'>Professional and experienced<br /><span className='title-style'>Dentist </span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in natus ipsum sunt maiores ea reprehenderit debitis at cumque dolor!</p>
                </div>
                <div className="home-picture">
                    <img src="https://i.ibb.co/FmDszk2/welcome-dental-care-vector-illustration-cartoon-character-533406-114-2.png" alt="" />
                </div>
            </main>
            <div>
                <h2>My Services</h2>
                <div className='service-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;