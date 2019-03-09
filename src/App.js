import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

export default props => (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes/>
    </Provider> 
);
