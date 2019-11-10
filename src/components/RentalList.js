import React, { useState, useEffect } from 'react';
import RentalCard from './RentalCard';
import uuid from 'uuid';
import { connect } from 'react-redux';

import * as actions from '../actions';

const RentalList = props => {
    // console.log(props);
    // const [rentals, setRentals] = useState(props.rentals);
    const [effect, setEffect] = useState(false);

    const renderRentals = () => {
        // debugger;
        return props.rentals && props.rentals.map((rental) => {
            // debugger;
            return (
                <RentalCard key={uuid.v4()} rental={rental} />
            )
        });
    }

    const addRental = () => {
        // const addRentals = rentals;
        // addRentals.push(Math.floor(Math.random() * 10));
        // setRentals(addRentals);
        // console.log(rentals);
        setEffect(!effect);
    }

    useEffect(() => {
        renderRentals();
        props.dispatch(actions.fetchRentals());
        // console.log(props.rentals);
    }, [effect]);

    // debugger;
    return (
        <div className='container'>
            <section id='rentalListing'>
            <h1 className='page-title'>Your Home All Around the World</h1>
            <div className='row'>
                {renderRentals()}
            </div>
            <button onClick={addRental}>Add Rental!</button>
            </section>
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.rentals.data);
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalList);