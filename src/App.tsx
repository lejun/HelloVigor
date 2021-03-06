import React, { Component } from 'react';
import { View, Text, StyleSheet,ToastAndroid } from 'react-native';

import Item from './containers/components/Item';
import InputView from './containers/components/InputView';
import ListItem from './containers/components/ListItem';
import {addAction,delAction} from './action/Action';

import {connect} from 'react-redux';

interface IProps{
    todos:string[];
    dispatch?:Redux.Dispatch<any>

}

class App extends React.Component<IProps, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <InputView onAdd={(txt)=>{
                    this.props.dispatch(addAction(txt));
                }}/>
                <ListItem data={this.props.todos} 
                onItemClick={position => {
                    this.props.dispatch(delAction(position));
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#F5FCFF',
    } as React.ViewStyle,
    welcome: {
        fontSize: 20,
        textAlign:'center',
        margin: 10,
    } as React.TextStyle,
    instructions: {
        textAlign:'center',
        color: '#333333',
        marginBottom: 5,
    } as React.TextStyle,
});

function mapState2Props(state):IProps
{
    console.log(" ** app ** ",state.three.todos);
    
    return{
        todos:state.three.todos
    }
}
export default connect(mapState2Props)(App);