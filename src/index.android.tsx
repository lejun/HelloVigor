import React, {Component} from 'react';
import * as RN from 'react-native';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//reducre
import reducers from './reducres/HelloReducer';

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





