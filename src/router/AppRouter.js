import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';

import Header from '../components/Header';
import RentalList from '../components/RentalList';
import RentalDetail from '../components/RentalDetail';

const store = require('../reducers').init();

const AppRouter = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' render ={() => {return <Redirect to='/rentals' />}} exact={true} />
                        <Route path='/rentals' component={RentalList} exact={true} />
                        <Route path='/rentals/:id' component={RentalDetail} exact={true} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default AppRouter;