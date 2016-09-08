import * as React from 'react';
import * as RN from 'react-native';

const {View,Text,StyleSheet,TextInput,ToastAndroid} = RN;

interface IState{
    value:string;
}
interface IProps{
    onAdd?(value:string):void;
}
export default class InputView extends React.Component<IProps,IState>{
    // refKey : IRefKey = {};

    refs:{
        [key: string]: (any);
        input:RN.TextInput;
    }
    constructor(props:IProps)
    {
        super(props);
        this.state = {value:""};
    }

    private _onClick():void{
        // this.refKey.input.clear();
        let i = this.refs.input;
        i.clear();
        let v = this.state.value;
        this.props.onAdd(v);
    }

    render()
    {
        return(
            <View style={styles.container}>
                <TextInput ref="input" placeholder="请输入内容" style={{width:200}}
                    value= {this.state.value}
                    onChangeText={(text)=>{
                        this.setState({value:text});
                    }}/>
                <View style={{borderWidth:1,borderColor:'red'}}>
                    <Text style={styles.btn} onPress={this._onClick.bind(this)}>ADD</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    } as React.ViewStyle,
    btn:{
        width:60,
        height:30,
        backgroundColor:'yellow',
        textAlign:'center',
        textAlignVertical:'center'
    } as React.TextStyle
});