import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigation, {
  ShiftingTab,
  Badge
} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import HomeMatchDetailView from '../homematch/HomeMatchDetailView';
import HomeMatchDetailGalleryView from './HomeMatchDetailGalleryView';
import HomeMatchDetailLocationView from './HomeMatchDetailLocationView';
import HomeMatchDetailCostsView from './HomeMatchDetailCostsView';
import colors from '../../../../assets/styles/colors';

export default class HomeMatchDetailIndex extends Component {

    constructor (props) {
        super(props)
        this.state = {
            activeTab: 'tab1',
            search_index: 0,
            selectedTab: 'tab1'
        };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    componentWillMount(){

    }

    render(){

        const {navigation} = this.props;
        this.state.search_index = navigation.getParam ('search_index', 0 );
      
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
      label: 'Details',
      barColor: colors.COL_CORE_GREEN,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'file-document-outline'
    },
    {
      key: 'tab2',
      label: 'Gallery',
      barColor: colors.COL_CORE_GREEN,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'camera'
    },
    {
      key: 'tab3',
      label: 'Location',
      barColor: colors.COL_CORE_GREEN,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'map-marker'
    },
    {
      key: 'tab4',
      label: 'Costs',
      barColor: colors.COL_CORE_GREEN,
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'currency-gbp'
    }
  ]


  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <ShiftingTab
      isActive={isActive}
      //showBadge={tab.key === 'tab4'}
      //renderBadge={() => <Badge></Badge>}
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
            return <HomeMatchDetailView
            searchIndex={this.state.search_index}
         />
            break
        case 'tab2':
            return <HomeMatchDetailGalleryView 
            searchIndex={this.state.search_index}
            />
            break
        case 'tab3':
            return <HomeMatchDetailLocationView 
              searchIndex={this.state.search_index}
            />
            break
        case 'tab4':
            return <HomeMatchDetailCostsView 
              searchIndex={this.state.search_index}
            />
            break
      }

  }

  //handlers

  handleTabChange (newTabIndex, oldTabIndex) {

    
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