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
  
  const bookedViewings = [
	{
	  time: "4:30pm",
	  date: "20/11/19",
	  location: "Anchor Brewhouse",
	  image: require("../../../../assets/images/A1.jpg")
	},
	{
	  time: "6:00pm",
	  date: "20/11/19",
	  location: "Tea Trade Wharf",
	  image: require("../../../../assets/images/A2.jpg")
	},
	{
	  time: "5:00pm",
	  date: "21/11/19",
	  location: "Eagle Wharf",
	  image: require("../../../../assets/images/A3.jpg")
	}
  ];

  const offers = [
	{
	  offer: "£1200 p.w",
	  date: "10/11/19" ,
	  place: "Butlers Wharf",
	  status: "Offer Rejected",
	  image: require("../../../../assets/images/A5.jpg")
	},
	{
		offer: "£1200 p.w",
		date: "12/11/19",
		place: "Butlers Wharf",
		status: "Offer Pending",
		image: require("../../../../assets/images/A6.jpg")
	  }
  ];

  const messages = [
	{
	  title: "Viewing Booking Confirmed",
	  message: "Your Requested Appointment to view 21 Anchor Brewhouse SE1 has been confirmed",
	  image: require("../../../../assets/images/A1.jpg"),
	  date: "18/11/2019"
	},
	{
		title: "Viewing Booking Confirmed",
		message: "Your Requested Appointment to view 35 Tea Trade Wharf SE1 has been confirmed",
		image: require("../../../../assets/images/A2.jpg"),
		date: "18/11/2019"
	},
	{
		title: "Viewing Booking Confirmed",
		message: "Your Requested Appointment to view 11 Eagle Wharf SE1 has been confirmed",
		image: require("../../../../assets/images/A3.jpg"),
		date: "18/11/2019"
	},
	{
		title: "Rental Offer Rejected",
		message: "Your rental offer of £1200 per week for 69 Butlers Wharf has been rejected",
		image: require("../../../../assets/images/A5.jpg"),
		date: "17/11/2019"
	},
	{
		title: "Rental Offer Submitted",
		message: "Your rental offer of £1200 per week for 11 Butlers Wharf has been submitted and is waiting for a response from the property provider.",
		image: require("../../../../assets/images/A6.jpg"),
		date: "17/11/2019"
	},
	{
	  title: "Rental Lease Expiry Notice",
	  message: "Your current rental lease contract will expire in 1 month on 16/12/2019. If you wish to renew your lease please submit your offer within the next 7 days",
	  image: require("../../../../assets/images/A10.jpg"),
	  date: "16/11/2019"
	},
	{
		title: "November Rental Payment Made",
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
      <Text style={messageRowStyles.number}>{number}</Text>
      <ImageBackground style={messageRowStyles.image} source={image} />
      <View style={messageRowStyles.column}>
	  <Text style={messageRowStyles.date}>{date}</Text>
        <Text style={material.body2}>{title}</Text>
        <Text style={material.caption}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};


//const Home = () => {

class HomeHubIndexView extends React.Component 
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
            <Text style={iOSUIKit.largeTitleEmphasized}>Sara's HomeHub</Text>
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
                source={require("../../../../assets/images/gradient.png")}
              >
                <View style={stylelocal.suggestionTextBlock}>
                  <Text style={stylelocal.suggestionText}>
                    {`My \n`}
                    <Text style={stylelocal.bold}>HomeMatch</Text>
                    {`\n@difrent`}
                  </Text>
                </View>
                <Text style={stylelocal.updatedFriday}>Updated Friday</Text>
              </TouchableRoundedImage>
              <View style={stylelocal.suggestionColumn}>
                <TouchableRoundedImage
                  style={stylelocal.smallSuggestion}
                  source={require("../../../../assets/images/A1.jpg")}
                />
                <TouchableRoundedImage
                  style={[
                    stylelocal.smallSuggestion,
                    stylelocal.smallSuggestionMarginTop
                  ]}
                  source={require("../../../../assets/images/A2.jpg")}
                />
              </View>
              <TouchableRoundedImage
                style={stylelocal.bigSuggestion}
                source={require("../../../../assets/images/A3.jpg")}
              />
            </View>
            <View style={stylelocal.suggestionRowBottom}>
              <TouchableRoundedImage
                style={stylelocal.smallSuggestion}
                source={require("../../../../assets/images/A4.jpg")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/A5.jpg")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/A6.jpg")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/A7.jpg")}
              />
              <TouchableRoundedImage
                style={[
                  stylelocal.smallSuggestion,
                  stylelocal.smallSuggestionMarginLeft
                ]}
                source={require("../../../../assets/images/A8.jpg")}
              />
            </View>
          </View>
          <View style={stylelocal.viewingsRibbon}>
            <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Booked Viewings</Text>
              <TouchableOpacity>
                <Text style={stylelocal.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.viewingsRibbonList}
            >
              {bookedViewings.map((bookedViewings, index) => (
                <View
                  key={bookedViewings.time}
                  style={
                    index < bookedViewings.length - 1 && stylelocal.viewingsItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.viewingsRibbonImage}
                    source={bookedViewings.image}
                  />
                  <Text style={stylelocal.viewingsTitle}>{bookedViewings.date}</Text>
                  <Text style={stylelocal.viewingsSubtitle}>{bookedViewings.time}</Text>
				  <Text style={stylelocal.viewingsSubtitle}>{bookedViewings.location}</Text>
                </View>
              ))}
            </ScrollView>
		
          </View>

		  <View style={stylelocal.offersRibbon}>
            <View style={stylelocal.offersRibbonTitleBar}>
              <Text style={stylelocal.offersRibbonTitle}>My Offers</Text>
              <TouchableOpacity>
                <Text style={stylelocal.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.offersRibbonList}
            >
              {offers.map((offers, index) => (
                <View
                  key={offers.offer}
                  style={
                    index < offers.length - 1 && stylelocal.offersItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.offersRibbonImage}
                    source={offers.image}
                  />
                  <Text style={stylelocal.offersTitle}>{offers.status}</Text>
				  <Text style={stylelocal.offersSubtitle}>{offers.place}</Text>
				  <Text style={stylelocal.offersSubtitle}>{offers.offer}</Text>
                  <Text style={stylelocal.offersSubtitle}>{offers.date}</Text>
				 
                </View>
              ))}
            </ScrollView>
			
          </View>

		  <View style={stylelocal.notifications}>
            <View style={stylelocal.notificationsTitleBar}>
              <Text style={stylelocal.notificationsTitle}>My Notifications</Text>
              <TouchableOpacity>
                <Text style={stylelocal.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
			<FlatList
          contentContainerStyle={messagestyles.listContent}
          data={messages}
          keyExtractor={item => item.song}
          ItemSeparatorComponent={() => <View style={messagestyles.messageSeparator} />}
          ListHeaderComponent={() => (
            <Text style={messagestyles.updatedWhen}>Last Updated 10 Minutes Ago</Text>
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
	  aspectRatio: 1
	},
	bigSuggestionWithText: {
	  flex: 2,
	  aspectRatio: 1,
	  justifyContent: "space-between"
	},
	suggestionText: {
	  ...human.headlineWhiteObject,
	  ...systemWeights.light,
	  margin: 8,
	  fontSize: 16,
	},
	bold: {
	  ...systemWeights.bold
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
	

	viewingsRibbon: {
		marginTop: 15,
		paddingTop: 16,
		backgroundColor: iOSColors.white
	  },
	  viewingsRibbonTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  viewingsRibbonTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  viewingsRibbonList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  viewingsRibbonImage: {
		height: 110,
		width: 110,
		borderRadius: 6,
		marginRight: 8,
	  },
	  viewingsItem: {
		marginRight: 8,
	  },
	 viewingsTitle: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 5,
	  },
	 viewingsSubtitle: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray,
	  },

	  offersRibbon: {
		marginTop: 10,
		paddingTop: 16,
		backgroundColor: iOSColors.white
	  },
	  offersRibbonTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  offersRibbonTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  offersRibbonList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  offersRibbonImage: {
		height: 110,
		width: 110,
		borderRadius: 6,
		marginRight: 8,
	  },
	  offersItem: {
		marginRight: 8,
	  },
	 offersTitle: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 5,
	  },
	 offersSubtitle: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray,
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
	updatedWhen: {
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

export default HomeHubIndexView;