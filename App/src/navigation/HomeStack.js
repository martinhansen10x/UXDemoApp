import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
//import Home from '../containers/Home';
import RenterIndexView from '../renterApp/IndexView';
import HomeMatchDetailView from '../renterApp/homematch/HomeMatchDetailView';
import Profile from '../containers/Profile';
import HomeMatchDetailIndex from '../renterApp/homematch/HomeMatchDetailIndex';
import BookViewing from '../renterApp/homematch/BookViewingView';
import MakeOffer from '../renterApp/homematch/MakeOfferView';
import SendMessage from '../renterApp/homematch/SendMessageView';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
  const HomeStack = createStackNavigator({
  
    HomeScreen: {
      screen: RenterIndexView,
      navigationOptions : { header: null

      }
    },
    
    Profile: {
      screen: HomeMatchDetailIndex,
      navigationOptions : { header: null

      }
    },
    BookViewing: {
      screen: BookViewing,
      navigationOptions : { header: null

      }
    },
    MakeOffer: {
      screen: MakeOffer,
      navigationOptions : { header: null

      }
    },
    SendMessage: {
      screen: SendMessage,
      navigationOptions : { header: null

      }
    },
 

  });

  export default HomeStack;