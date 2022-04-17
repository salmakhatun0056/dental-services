import React from 'react';
import { Link, } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service
    return (

        <div className='service p-2'>
            <div className='ms-5'>
                <img style={{ width: 250, height: 200 }} src={img} alt="" />
            </div>
            <div className='text-center mt-3'>
                <h2 className='text-info'>{name}</h2>
                <p>Price:${price}</p>
                <p>Description: <small>{description}</small></p>
                <CustomLink className='btn btn-info w-50 p-0' as={Link} to="/checkout">CheckOut</CustomLink>
            </div>
        </div>
    );
};

export default Service;