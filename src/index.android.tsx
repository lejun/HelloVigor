/// <reference path="../typings/index.d.ts" />
import React, {Component} from 'react';
import * as RN from 'react-native';

import Item from './containers/components/Item';
import InputView from './containers/components/InputView';
import ListItem from './containers/components/ListItem';

const{View,Text,Image,StyleSheet,Navigator,ToastAndroid} = RN;

interface IState{
    data:string[];
}

export default class HelloVigor extends Component<any,IState> {

    constructor(props:any)
    {
        super(props);
        this.state = {data:[]};
    }
    render() {

        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <InputView onAdd={(txt)=>{
                    this.state.data.push(txt);
                    this.setState(this.state);

                }}/>
                <ListItem data={this.state.data}/>
            </View>
        );
    }

}

//  <Navigator
//                     initialRoute={{title:"student",component:CompStudent,name:"goods"}}
//                     renderScene={(route,navigator)=>{
//                         let Comp = route.component;
//                         return <Comp {...route} navigator={navigator}/>
//                     }}/>

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


