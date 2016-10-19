import * as React from 'react';
import * as RN from 'react-native';
import {connect} from 'react-redux';
import {HelloAction} from './action/HelloAction';

const {View,Text} = RN;

interface IProps{
    content:string;
    dispath?:Redux.Dispatch<any>
}
class App extends React.Component<IProps,any>{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View>
                <Text onPress={()=>{
                    this.props.dispath(HelloAction);
                }}>this is app!!!! {this.props.content}</Text>
            </View>
        );
    }
}

function state2props(state):IProps
{
    console.log(state);
    
    return {
        content:state.helloHandler.content
    };
}

export default connect(state2props)(App);