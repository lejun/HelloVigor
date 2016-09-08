///<reference path="./Say.tsx"/>
import * as React from 'react';
import * as RN from 'react-native';
const{View,Text,Navigator,ToastAndroid,StyleSheet} = RN;
const{Component} = React;
import Say from './Say'

interface IStudent{
    name:string;
    navigator?:React.NavigatorStatic;
}


export default class Student extends React.Component<IStudent,any> {
    constructor(props: IStudent) {
        super(props);
    }

    private _onClick():void{
        ToastAndroid.show(this.props.name,ToastAndroid.SHORT);
        this.props.navigator.push({component:Say}); 
;
    }

    private _renderScene(route:React.Route,navigator:React.NavigatorStatic)
    {
        let Comp = route.component;
        console.log("------title:"+route.title+" --component: "+route.component+
        " --content:"+route.content);
        return <Comp  navigator={navigator}/>;
    }
    
    render() {
        let sayComponent = Say;
        return (
            <View style={styles.container}>
                <Text style={styles.name}>
                    {this.props.name}
                </Text>
                <Text style={styles.but} 
                onPress={this._onClick.bind(this)}>
                    BUTTON
                </Text>
                <View style={{justifyContent:'center',flex:1}}> 
                    <View style={{backgroundColor:'yellow',width:200,height:100}}></View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
    }as React.ViewStyle,
    but:{
        width:100,
        height:50,
        padding:8,
        backgroundColor:"#e0e0e0",
        color:"#fff",
        textAlign:"center",
        justifyContent:"center"
    } as React.TextStyle,
    name:{
        justifyContent:'center',
        backgroundColor:"#000",
        color:'#fff'
    } as React.TextStyle
});

