import * as React from 'react';
import * as RN from 'react-native';
const{Text,View,Image,StyleSheet,ToastAndroid} = RN;

interface ISay{
	// word:string;
	// click():void;
	navigator?:React.NavigatorStatic;
}

 export default class Say extends React.Component<ISay,any>{
	constructor(props:ISay)
	{
		super(props);
	}

	private _click():void{
		// let w = this.props.word;
		let w = "goods";
		this.props.navigator.pop();
		// console.log("----------  "+this.props.navigator);
		ToastAndroid.show("goods",ToastAndroid.SHORT);
	}

	render(){
		return(
			<View>
				<Image source={require("../img/img.png")} style={styles.img}/>
				<Text
					style={styles.btn}
					onPress={this._click.bind(this)}>click___me</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	img:{
		width:200,
		height:100
	} as React.ImageStyle,
	btn:{
		padding:10,
		marginTop:8,
		backgroundColor:"#000",
		color:'#fff'
	} as React.TextStyle
});