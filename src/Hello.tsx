/**
 * Created by lejun on 16/9/3.
 */

import React, {Component} from 'react';
import {View, Text,Navigator, StyleSheet} from 'react-native';

interface IHello{
    word:string;
}
export default class Hello extends Component<IHello,any> {
    constructor(props: IHello) {
        super(props);
    }

    render() {
        return (
            <View style={{justifyContent:'center'}}>
                <Text style={{backgroundColor:'#fff'}}>
                   hello {this.props.word}
                </Text>
            </View>
        );
    }
}
