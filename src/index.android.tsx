import React, {Component} from 'react';
import * as RN from 'react-native';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//reducre
import reducers from './reducres/HelloReducer';
import createSagaMiddleware from 'redux-saga';
import {sagas} from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default class HelloVigor extends Component<any,any> {

    constructor(props:any)
    {
        super(props);
    }
    render() {

        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }

}





