import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service

    // const navigate = useNavigate()
    // const navigateToServiceDetail = id => {
    //     navigate(`/checkout/${id}`)
    //     const { checkoutId } = useParams()
    return (

        <div className='service p-2'>
            <div className='ms-5'>
                <img style={{ width: 250, height: 200 }} src={img} alt="" />
            </div>
            <div className='text-center mt-3'>
                <h2 className='text-info'>{name}</h2>
                <p>Price:${price}</p>
                <p>Description: <small>{description}</small></p>
                <CustomLink className='btn btn-info w-50' as={Link} to="/checkout">CheckOut</CustomLink>
            </div>
        </div>

        // <Card className='service'>
        //     <Card.Img variant="top" src={img} />
        //     <Card.Body>
        //         <Card.Title>{name}</Card.Title>
        //         <Card.Text>
        //             Price: ${price} <br />
        //             {description}
        //         </Card.Text>

        //     </Card.Body>
        //     <Card.Footer>
        //         <CustomLink className='btn btn-info w-100' as={Link} to="/checkout">CheckOut</CustomLink>
        //     </Card.Footer>
        // </Card>

    );
};

export default Service;