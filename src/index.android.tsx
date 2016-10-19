import React, {Component} from 'react';
import * as RN from 'react-native';



const{View,Text} = RN;



export default class HelloVigor extends Component<any,any> {

    constructor(props:any)
    {
        super(props);
    }
    render() {

        return (
            <View>
                <Text>hello saga!!!</Text>
            </View>
        );
    }

}





