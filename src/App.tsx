import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './containers/components/Item';
import InputView from './containers/components/InputView';
import ListItem from './containers/components/ListItem';

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <InputView onAdd={(txt)=>{
                    this.state.data.push(txt);
                    this.setState(this.state);
                }}/>
                <ListItem data={this.state.data}/>
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