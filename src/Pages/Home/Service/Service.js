import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service
    // const navigate = useNavigate()
    // const location = useLocation()
    // navigate('/checkout')
    return (

        <Card className='service'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Price: ${price} <br />
                    {description}
                </Card.Text>

            </Card.Body>
            <Card.Footer>
                <button className="btn btn-info w-100 text-white">Check Out</button>
            </Card.Footer>
        </Card>

    );
};

export default Service;