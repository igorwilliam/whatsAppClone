import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {TabBar} from 'react-native-tab-view';

export default props => (
    <View style={{ backgroundColor: '#115E54', elevation: 10, marginBottom: 15}}>
        <StatusBar backgroundColor='#114044'/>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent:'center', height:50}}>
                <Text style={{color:'white', fontSize:20, marginLeft:20}}>WhatsApp Clone</Text>
            </View>

            <View style={{flexDirection: 'row', marginRight: 20}}>
                <View style={{ width: 50, justifyContent: 'center'}}>
                    <Image source={require('../imgs/adicionar-contato.png')}/>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, color: 'white'}}>Sair</Text>
                </View>
            </View>
        </View>

        <TabBar 
            {...props} 
            style={{ backgroundColor: '#115R54' }}
            indicatorStyle={{ backgroundColor: 'white' }}
        />
    </View>
)