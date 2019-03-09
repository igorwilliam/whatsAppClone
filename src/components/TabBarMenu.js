import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {TabBar} from 'react-native-tab-view';

export default props => (
    <View style={{ backgroundColor: '#115E54', elevation: 10, marginBottom: 15}}>
        <StatusBar backgroundColor='#114044'/>

        <View style={{justifyContent:'center', height:50}}>
            <Text style={{color:'white', fontSize:20, marginLeft:20}}>WhatsApp Clone</Text>
        </View>

        <TabBar {...props} 
            style={{ backgroundColor: '#115R54' }}
            indicatorStyle={{ backgroundColor: 'white' }}
        />
    </View>
)