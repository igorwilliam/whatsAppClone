import * as React from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'conversas', title: 'Conversas' },
      { key: 'contatos', title: 'Contatos' },
    ],
  };
  
  _renderTabBar = props => <TabBarMenu {...props}/>
  

  render() {
    return (
      
      <TabView
        renderTabBar={this._renderTabBar}
        navigationState={this.state}
        renderScene={SceneMap({
          conversas: Conversas,
          contatos: Contatos,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

