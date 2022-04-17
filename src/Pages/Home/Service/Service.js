import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description, id } = service

    // const navigate = useNavigate()
    // const navigateToServiceDetail = id => {
    //     navigate(`/checkout/${id}`)
    //     const { checkoutId } = useParams()
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
                <CustomLink className='btn btn-info w-100' as={Link} to="/checkout">CheckOut</CustomLink>
            </Card.Footer>
        </Card>

    );
};

export default Service;