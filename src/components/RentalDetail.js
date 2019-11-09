import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const RentalDetail = props => {
    // console.log(props);
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        setEffect(true);
        const rentalId = props.match.params.id;
        props.dispatch(actions.fetchRentalById(rentalId));
    }, [effect]);
    
    return (
        <div className='container'>
            {props.rental && props.rental.id ?
            <div>
            <h1>ID: {props.rental.title}</h1>
            <h1>ID: {props.rental.dailyRate}$</h1>
            </div> :
            <h1>Loading...</h1>}
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.rental.data);
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail);