import * as React from 'react';
import * as RN from 'react-native';
import {connect} from 'react-redux';
import {HelloAction} from './action/HelloAction';
var Dimensions = require('Dimensions');

const {View,Text,TextInput,StyleSheet,Platform,ToastAndroid,ListView} = RN;

interface IProps{  
    content:string;
    dispatch?:Redux.Dispatch<any>
}
interface IState{
    dataSource ?: React.ListViewDataSource,
}
var width = Dimensions.get('window').width;
class App extends React.Component<IProps,IState>{
    
    constructor(props)
    {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
 
    render()
    {
        return(
            <View>
                <Text onPress={()=>{
                    this.props.dispatch(HelloAction);
                }}>this is app!!!! helloHandler {this.props.content}</Text>
                <View style={styles.textInputViewStyle}>
                    <TextInput style={styles.textInputStyle} 
                    defaultValue="default value" placeholder="place holder" placeholderTextColor="#e3e3e3" onChangeText={(text) => {ToastAndroid.show(text,ToastAndroid.SHORT)}}/>
                </View>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData,id)=><Text
                    onPress={() => this._refreshDs() }
                    >{rowData}+ {id}</Text>}/>
            </View>
        );
    }

    _refreshDs():void
    {
        this.setState({dataSource:this.state.dataSource.cloneWithRows(['android','java','ios'])});
    }
}

function state2props(state):IProps
{
    console.log(state);
    
    return {
        content:state.helloHandler.content
    };
}

const styles = StyleSheet.create({
    textInputViewStyle: {
        //设置宽度减去30将其居中左右便有15的距离
        width: width - 30,
        height: 45,
        //设置圆角程度
        borderRadius: 18,
        //设置边框的颜色
        borderColor: 'blue',
        //设置边框的宽度
        borderWidth: 1,
        //内边距
        paddingLeft: 10,
        paddingRight: 10,
        //外边距
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        //设置相对父控件居中
        alignSelf: 'center',
    } as React.ViewStyle,
    textInputStyle:{
        width:width - 30,
        height:35,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#00000000',
        marginTop: Platform.OS === 'ios' ? 4 : 8
    } as React.TextStyle
});

export default connect(state2props)(App);