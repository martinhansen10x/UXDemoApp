import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import AuthStack from './AuthStack';

//import DetailStack from './DetailStack';
import NavigationService from './NavigationService';
import HomeStack from './HomeStack';

const TopLevelNavigator =
  createSwitchNavigator({
    //Auth: AuthStack,
    Main: HomeStack,
    //Detail: DetailStack,
  });

const AppContainer = createAppContainer(TopLevelNavigator);

export default class AppNavigator extends React.Component {

  render() {
    return (
      <AppContainer ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      />
    );
  }
}

