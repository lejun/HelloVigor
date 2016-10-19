import * as React from 'react';
import * as RN from 'react-native';

const {View,Text} = RN;

export default class App extends React.Component<any,any>{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View>
                <Text>this is app!!!!</Text>
            </View>
        );
    }
}