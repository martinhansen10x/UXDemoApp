import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigation, {
  ShiftingTab,
  Badge
} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import HomeHubIndexView from './homehub/HomeHubIndexView';
import HomeMatchIndexView from './homematch/HomeMatchIndexView';
import MyHomeIndexView from './myhome/MyHomeIndexView';
import MyAccountIndexView from './myaccount/MyAccountIndexView';
import colors from '../../../assets/styles/colors';

export default class RenterIndexView extends Component {

    constructor (props) {
        super(props)
        this.state = {
            activeTab: 'tab1',
            selectedTab: 'tab1'
        };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    componentWillMount(){

    }

    render(){
        const { state, navigate} = this.props.navigation;
        return (
            <View style = {styles.container}>
                {this.renderTabs()}
                {this.renderFooterView()}
            </View>
        );
    }

componentDidMount() {

}


  tabs = [
    {
      key: 'tab1',
      label: 'HomeHub',
      barColor: colors.COL_RED,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'home-assistant'
    },
    {
      key: 'tab2',
      label: 'HomeMatch',
      barColor: colors.COL_CORE_GREEN,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'home-heart'
    },
    {
      key: 'tab3',
      label: 'My Home',
      barColor: colors.COL_PURPLE,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'home-account'
    },
    {
      key: 'tab4',
      label: 'My Account',
      barColor: colors.COL_BANK_BLUE_DARK,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'home-currency-usd'
    }
  ]


  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <ShiftingTab
      isActive={isActive}
      showBadge={tab.key === 'tab4'}
      renderBadge={() => <Badge>2</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  renderFooterView() {
    return (
        <BottomNavigation
          activeTab= {this.state.activeTab}
          tabs={this.tabs}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          //onTabChange={this.handleTabChange}
          renderTab={this.renderTab}
          useLayoutAnimation
        
        />
    )
  }
  renderTabs() {
      switch (this.state.activeTab) {
        
        case 'tab1':
            return <HomeHubIndexView />
            break
        case 'tab2':
            return <HomeMatchIndexView />
            break
        case 'tab3':
            return <MyHomeIndexView />
            break
        case 'tab4':
            return <MyAccountIndexView />
            break
      }

  }

  //handlers

  handleTabChange (newTabIndex, oldTabIndex) {

    alert ('Tab change bitch');
      this.setState({activeTab: newTabIndex});
      if (newTabIndex === oldTabIndex){
          null;
      }
      if (this.state.activeTab === 0){
          this.setState({selectedTab: 'tab1',});
      }else if (this.state.activeTab === 1){
          this.setState({selectedTab: 'tab2',});
      }else if (this.state.activeTab === 2){
          this.setState({selectedTab: 'tab3',});
      }else {
          this.setState({selectedTab: 'tab4',});
      }
  }

}

const styles = StyleSheet.create({
   container: {
     flex: 1
   }
})
