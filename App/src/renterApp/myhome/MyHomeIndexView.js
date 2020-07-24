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
import HeaderBar from '../../components/HeaderBar';

const TouchableRoundedImage = ({ style, ...props }) => (
	<TouchableOpacity style={style}>
	  <ImageBackground
		borderRadius={6}
		style={stylelocal.touchableRoundedImage}
		{...props}
	  />
	</TouchableOpacity>
  );
  
  const homeDetails = [
	{
	  title: "Home Info",
	  notification: "",
	  image: require("../../../../assets/button_grafx/home_info_purple.png")
	},
	{
	  title: "Utilities",
	  notification: "",
	  image: require("../../../../assets/button_grafx/home_utilities_purple.png")
	},
	{
	  title: "Local Services",
	  notification: "",
	  image: require("../../../../assets/button_grafx/home_localservices_purple.png")
	}
  ];

  const contracts = [
	{
	  place: "56 Butlers Wharf",
	  timeRemaining: "24 Days Left" ,
	  status: "Active",
	  image: require("../../../../assets/button_grafx/home_contract_purple.png")
	}
  ];

  const maintenance = [
	{
	  title:"Repair Tracker",
	  notification: "" ,
	  image: require("../../../../assets/button_grafx/home_maintenance_purple.png")
	},
	{
		title: "Request Repair",
		notification: "",
		image: require("../../../../assets/button_grafx/home_maintenanceadd_purple.png")
	  }
  ];

  const messages = [
	{
	  title: "Rental Lease Expiry Notice",
	  message: "Your current rental lease contract will expire in 1 month on 16/12/2019. If you wish to renew your lease please submit your offer within the next 7 days",
	  image: require("../../../../assets/images/A10.jpg"),
	  date: "16/11/2019"
	},
	{
		title: "October Rental Payment Made",
		message: "Your Monthly rent of £1,000 has been charged successfully to your payment method for November's rental payment.",
		image: require("../../../../assets/images/11.jpg"),
		date: "15/11/2019"
	  },
	{
	  title: "Maintenance Booking",
	  message: "Your property provider has booked a maintenance engineer to visit on Thursday at 3 p.m to fix the heating boiler.",
	  image: require("../../../../assets/images/gas-logo.jpg"),
	  date: "01/11/2019"
	},
	{
		title: "October Rental Payment Made",
		message: "Your Monthly rent of £1,000 has been charged successfully to your payment method for October's rental payment.",
		image: require("../../../../assets/images/11.jpg"),
		date: "15/10/2019"
	  },
  ];
  
const MessageRow = ({ number, image, title, message, date }) => {
  return (
    <TouchableOpacity style={messageRowStyles.row}>
      <ImageBackground style={messageRowStyles.image} source={image}  />
	  <View style={messageRowStyles.column}>
	  <Text style={messageRowStyles.date}>{date}</Text>
        <Text style={material.body2}>{title}</Text>
        <Text style={material.caption}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};


//const Home = () => {

class MyHomeIndexView extends React.Component 
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
            <Text style={iOSUIKit.largeTitleEmphasized}>Sara's Home</Text>
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
            <View style={stylelocal.suggestionRow}>
              <TouchableRoundedImage
                style={stylelocal.bigSuggestionWithText}
                source={require("../../../../assets/images/gradient_purple.png")}
              >
                <View style={stylelocal.suggestionTextBlock}>
                  <Text style={stylelocal.suggestionText}>
                    {`My \n`}
                    <Text style={stylelocal.bold}>Home</Text>
					{`\n@difrent`}
                  </Text>
                </View>
              </TouchableRoundedImage>
              
              <TouchableRoundedImage
                style={stylelocal.bigSuggestion}
                source={require("../../../../assets/images/A10.jpg")}
              />
            </View>
            <View style={stylelocal.suggestionRowBottom}>
              <TouchableRoundedImage
                style={stylelocal.smallSuggestion}
                source={require("../../../../assets/images/11.jpg")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/dog_1.jpg")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/gradient_blank.png")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/gradient_blank.png")}
              />
           
            </View>
          </View>
          <View style={stylelocal.homeDetails}>
            <View style={stylelocal.homeDetailsTitleBar}>
              <Text style={stylelocal.homeDetailsTitle}>My Home Details</Text>
          
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.homeDetailsList}
            >
              {homeDetails.map((homeDetails, index) => (
                <View
                  key={homeDetails.title}
                  style={
                    index < homeDetails.length - 1 && stylelocal.homeDetailsItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.homeDetailsItemImage}
                    source={homeDetails.image}
                  />
                  <Text style={stylelocal.homeDetailsItemTitle}>{homeDetails.title}</Text>
                  <Text style={stylelocal.homeDetailsItemNotification}>{homeDetails.notification}</Text>
                </View>
              ))}
            </ScrollView>
		
          </View>

		  <View style={stylelocal.contracts}>
            <View style={stylelocal.contractsTitleBar}>
              <Text style={stylelocal.contractsTitle}>My Rental Contract</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.contractsList}
            >
              {contracts.map((contracts, index) => (
                <View
                  key={contracts.place}
                  style={
                    index < contracts.length - 1 && stylelocal.contractsItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.contractsItemImage}
                    source={contracts.image}
                  />
                  <Text style={stylelocal.contractsItemTitle}>{contracts.place}</Text>
                  <Text style={stylelocal.contractsItemRemaining}>{contracts.timeRemaining}</Text>
				  <Text style={stylelocal.contractsItemStatus}>{contracts.status}</Text>
                </View>
              ))}
            </ScrollView>
			
          </View>

		  <View style={stylelocal.maintenance}>
            <View style={stylelocal.maintenanceTitleBar}>
              <Text style={stylelocal.maintenanceTitle}>My Home Maintenance</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.maintenanceList}
            >
              {maintenance.map((maintenance, index) => (
                <View
                  key={maintenance.title}
                  style={
                    index < maintenance.length - 1 && stylelocal.maintenanceItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.maintenanceItemImage}
                    source={maintenance.image}
                  />
                  <Text style={stylelocal.maintenanceItemTitle}>{maintenance.title}</Text>
				  <Text style={stylelocal.maintenanceItemNotification}>{maintenance.notification}</Text>
				</View>
              ))}
            </ScrollView>		
          </View>


		  <View style={stylelocal.notifications}>
            <View style={stylelocal.notificationsTitleBar}>
              <Text style={stylelocal.notificationsTitle}>My Home Notifications</Text>
              <TouchableOpacity>
                <Text style={stylelocal.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
			<FlatList
          contentContainerStyle={messagestyles.listContent}
          data={messages}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={() => <View style={messagestyles.messageSeparator} />}
          ListHeaderComponent={() => (
            <Text style={messagestyles.lastUpdated}>Last Updated 10 Minutes Ago</Text>
          )}
          renderItem={({ item, index }) => (
            <MessageRow
              //number={index + 1}
			  title={item.title}
              message={item.message}
              image={item.image}
              date={item.date}
            />
          )}
        />
       
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
	suggestionRow: {
	  flexDirection: "row",
	  justifyContent: "flex-start",
	  alignItems: "stretch"
	},
	suggestionRowBottom: {
	  flexDirection: "row",
	  justifyContent: "flex-start",
	  alignItems: "stretch",
	  marginTop: 4
	},
	bigSuggestion: {
	  flex: 2,
	  aspectRatio: 1,
	  paddingRight: 5,
	},
	bigSuggestionWithText: {
	  flex: 2,
	  aspectRatio: 1,
	  paddingRight: 5,
	  justifyContent: "space-between"
	},
	suggestionText: {
	  ...human.headlineWhiteObject,
	  ...systemWeights.light,
	  margin: 8,
	  fontSize: 24,
	},
	bold: {
	  ...systemWeights.bold,
	
	},
	updatedFriday: {
	  ...human.caption2Object,
	  color: "rgba(255,255,255,0.80)",
	  margin: 8
	},
	suggestionColumn: {
	  flex: 1,
	  marginHorizontal: 4,
	  aspectRatio: 0.5,
	  flexDirection: "column",
	  justifyContent: "flex-start"
	},
	smallSuggestion: {
	  flex: 1,
	  aspectRatio: 1
	},
	smallSuggestionMarginTop: {
	  marginTop: 4
	},
	smallSuggestionMarginLeft: {
	  marginLeft: 4
	},

	homeDetailsTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  homeDetails: {
		marginTop: 15,
		paddingTop: 16,
		backgroundColor: iOSColors.white
	  },
	  homeDetailsTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  homeDetailsList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  homeDetailsItem: {
		marginRight: 8,
	  },
	  homeDetailsItemImage: {
		height: 100,
		width: 100,
		backgroundColor: colors.COL_PURPLE,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 50,
		marginRight: 8,
	  },
	  homeDetailsItemTitle: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 2,
	  },
	  homeDetailsItemNotification: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },


	  contractsTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  contracts: {
		marginTop: 10,
		paddingTop: 0,
		backgroundColor: iOSColors.white
	  },
	  contractsTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  contractsList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  contractsItem: {
		marginRight: 8,
	  },
	  contractsItemImage: {
		height: 100,
		width: 100,
		backgroundColor: colors.COL_PURPLE,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 50,
		marginRight: 8,
	  },
	  contractsItemTitle: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 2,
	  },
	  contractsItemRemaining: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },
	  contractsItemStatus: {
		...material.titleObject,
		fontSize: 10,
		color: colors.COL_APPLE_GREEN,
	  },


	  maintenanceTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  maintenance: {
		marginTop: 10,
		paddingTop: 0,
		backgroundColor: iOSColors.white
	  },
	  maintenanceTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  maintenanceList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  maintenanceItem: {
		marginRight: 8,
	  },
	  maintenanceItemImage: {
		height: 100,
		width: 100,
		backgroundColor: colors.COL_PURPLE,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 50,
		marginRight: 8,
	  },
	  maintenanceItemTitle: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 2,
	  },
	  maintenanceItemNotification: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },


	  notificationsTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  notifications: {
		marginTop: 10,
		marginBottom: 15,
		paddingTop: 16,
		backgroundColor: iOSColors.white
	  },
	  notificationsTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },

	seeAll: {
	  ...iOSUIKit.bodyEmphasizedObject,
	  color: iOSColors.pink
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

  const messageRowStyles = StyleSheet.create({
	row: {
	  flexDirection: "row",
	  alignItems: "center",
	  justifyContent: "flex-start",
	  paddingHorizontal: 16,
	  paddingTop: 4,
	  paddingBottom: 8
	},
	number: {
	  ...material.subheadingObject,
	  color: materialColors.blackSecondary
	},
	image: {
	  marginTop: 4,
	  borderRadius: 3,
	  marginLeft: 0,
	  height: 50,
	  width: 50
	},
	column: {
	  flex: 1,
	  marginLeft: 16,
	  flexDirection: "column",
	  alignItems: "flex-start",
	  justifyContent: "space-between"
	},
	date: {
	  ...material.body1Object,
	  fontSize: 10,
	  alignContent: 'flex-end',
	  justifyContent: 'flex-end',
	  color: materialColors.blackSecondary
	}
  });

  const messagestyles = StyleSheet.create({
	screenContainer: {
	  flex: 1,
	  backgroundColor: "#FFFFFF"
	},
	image: {
	  aspectRatio: 1.5,
	  height: undefined,
	  width: undefined,
	  justifyContent: "flex-end",
	  padding: 16
	},
	slogan: {
	  ...material.display1WhiteObject,
	  color: "#FFFFFF",
	  ...lightTextShadow
	},
	author: {
	  ...material.body1WhiteObject,
	  ...systemWeights.light,
	  ...lightTextShadow
	},
	bold: systemWeights.semibold,
	lastUpdated: {
	  marginTop: 16,
	  marginBottom: 8,
	  marginHorizontal: 8,
	  ...material.body2Object,
	  color: materialColors.blackSecondary
	},
	listContent: {
	  justifyContent: "flex-start",
	  alignItems: "stretch"
	},
	messageSeparator: {
	  height: StyleSheet.hairlineWidth,
	  width: "100%",
	  backgroundColor: materialColors.blackTertiary
	},
	fabCircle: {
	  position: "absolute",
	  top: -64 / 2,
	  right: 16,
	  width: 64,
	  height: 64,
	  borderRadius: 64 / 2,
	  backgroundColor: "#D81E5B",
	  justifyContent: "center",
	  alignItems: "center",
	  ...Platform.select({
		android: { elevation: 12 },
		ios: {
		  shadowColor: "black",
		  shadowOffset: {
			width: 0,
			height: 6
		  },
		  shadowOpacity: 0.2,
		  shadowRadius: 8
		}
	  })
	},
	fabIcon: {
	  backgroundColor: "transparent",
	  color: "#FFFFFF"
	}
  });

export default MyHomeIndexView;