import * as React from 'react';
import * as RN from 'react-native';
import Item from './Item';

const {View,ListView,StyleSheet,Text,TouchableHighlight,TouchableOpacity,ToastAndroid} = RN;

interface IProps{
    data:string[];
    onItemClick?(position):void;
}

export default class ListItem extends React.Component<IProps,any>{
    ds:React.ListViewDataSource;
    constructor(props:IProps)
    {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged:(row1,row2)=>{
                return row1 !== row2;
            }
        });
    }

    render()
    {
        let datasource = this.ds.cloneWithRows(this.props.data);
        return(
            <ListView
                dataSource={datasource}
                renderRow={(rowData,sectionID,rowID)=>{
                    return(
                     <TouchableOpacity onPress={()=>{
                         this.props.onItemClick(rowID);
                     }}>
                         <Item title={rowData}/>
                    </TouchableOpacity>
                    )
                }}
            />
        );
    }
}