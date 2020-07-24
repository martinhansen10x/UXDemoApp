import React  from "react";
import { 
	StyleSheet,
	View,
	ScrollView,
	Text,
	Platform,
	Image,
	ImageBackground,
	TouchableOpacity,
	StatusBar,
	FlatList,
} from "react-native";
import {
	iOSColors,
	human,
	material,
  materialColors,
	iOSUIKit,
	systemWeights
  } from "react-native-typography";
import styles from "../../../../assets/styles";
import colors from "../../../../assets/styles/colors";
import { FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import NavigationService from '../../navigation/NavigationService';
import HeaderBar from '../../components/HeaderBar_back';

const TouchableRoundedImage = ({ style, ...props }) => (
	<TouchableOpacity style={style}>
	  <ImageBackground
		borderRadius={6}
		style={stylelocal.touchableRoundedImage}
		{...props}
	  />
	</TouchableOpacity>
  );
  

//const Home = () => {

class SendMessageView extends React.Component 
{
	returnBoolIcon(bool) {
		if(bool)
		return <Ionicons name="ios-checkmark-circle-outline" size={24} color={colors.COL_APPLE_GREEN} />;
		else return <MaterialCommunityIcons name="cancel" size={24} color={colors.COL_RED} />;
	 }

	render (){

	return (

		
	    <View style={stylelocal.screenContainer}>
		<HeaderBar />
        <StatusBar barStyle="dark-content" />
        <View style={stylelocal.header}>
          <View>
            <Text style={stylelocal.date}>MONDAY, 18 NOVEMBER 2019</Text>
            <Text style={iOSUIKit.largeTitleEmphasized}>Send Message</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={stylelocal.avatar}
              source={require("../../../../assets/images/11.jpg")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={stylelocal.body}>
          <View style={stylelocal.card}>
       
          </View>
         
        </ScrollView>
      </View>	
	
	);
}};

const lightTextShadow = {
	textShadowColor: materialColors.blackTertiary,
	textShadowOffset: {
	  width: 0,
	  height: 1
	},
	textShadowRadius: 4
  };

const stylelocal = StyleSheet.create({
	screenContainer: {
	  flex: 1,
	  backgroundColor: iOSColors.white
	},
	header: {
	  flexDirection: "row",
	  justifyContent: "space-between",
	  alignItems: "flex-start",
	  marginHorizontal: 16,
	  marginTop: 10,
	  paddingBottom: 8,
	  borderBottomWidth: 1,
	  borderColor: iOSColors.customGray
	},
	date: {
	  ...iOSUIKit.footnoteEmphasizedObject,
	  color: iOSColors.gray,
	  marginBottom: 5,
	},
	avatar: {
	  height: 43,
	  width: 43,
	  borderRadius: 43 / 2
	},
	body: {
	  flexDirection: "column",
	  justifyContent: "flex-start",
	  alignItems: "stretch"
	},
	card: {
	  marginTop: 24,
	  marginHorizontal: 16,
	  padding: 12,
	  flexDirection: "column",
	  justifyContent: "flex-start",
	  alignItems: "flex-start",
	  backgroundColor: iOSColors.white,
	  borderRadius: 6,
	  ...Platform.select({
		android: { elevation: 16 },
		ios: {
		  shadowColor: "black",
		  shadowOffset: {
			width: 0,
			height: 16
		  },
		  shadowOpacity: 0.2,
		  shadowRadius: 16
		}
	  })
	},

	touchableRoundedImage: {
	  flex: 1,
	  height: undefined,
	  width: undefined,
	  flexDirection: "column",
	  justifyContent: "space-between",
	  alignItems: "flex-start"
	}
  });



export default SendMessageView;