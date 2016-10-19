import * as React from 'react';
import * as RN from 'react-native';

const {View,Text,StyleSheet,TouchableHighlight} = RN; 

interface IItem{
    title:string;
}

export default class Item extends React.Component<IItem,any>{
    constructor(props:IItem)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={styles.container}>

                    <Text>title : {this.props.title}</Text>

            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    } as React.ViewStyle
});