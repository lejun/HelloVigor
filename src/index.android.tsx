import React, {Component} from 'react';
import * as RN from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';
import App from './App';

const store = createStore(reducers);

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





