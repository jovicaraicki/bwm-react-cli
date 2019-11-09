import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import thunk from 'redux-thunk';

export const init = () => {
    const reducer = combineReducers({
        rentals: rentalReducer,
        rental: selectedRentalReducer
    });
    const enhancers = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const store = createStore(reducer, enhancers);
    return store;
}