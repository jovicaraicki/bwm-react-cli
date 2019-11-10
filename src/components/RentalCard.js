import React from 'react';
import { Link } from 'react-router-dom';

const RentalCard = props => {
    return (
        <div className='col-md-3 col-xs-6'>
            <Link className='rental-detail-link' to={`/rentals/${props.rental.id}`}>
                <div className='card bwm-card'>
                    <img className='card-img-top' src={props.rental.image} alt='rental main image'></img>
                    <div className='card-block'>
                        <h6 className={`card-subtitle ${props.rental.category}`}>{props.rental.shared ? 'shared' : 'whole'} {props.rental.category} &#183; {props.rental.city}</h6>
                        <h4 className='card-title'>{props.rental.title}</h4>
                        <p className='card-text'>${props.rental.dailyRate} per Night &#183; Free Cancelation</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RentalCard;