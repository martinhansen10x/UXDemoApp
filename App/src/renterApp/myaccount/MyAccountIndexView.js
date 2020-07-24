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
  
  const rentalApplication = [
	{
	  name: "Sara Parker",
	  applicantType: "Primary Tenant",
	  status: "approved",
	  image: require("../../../../assets/images/11.jpg")
	},
	{
	  name: "Giles Rupert",
	  applicantType: "Joint Tenant",
	  status: "pending",
	  image: require("../../../../assets/images/12.jpg")
	},
	{
	  name: "Add Tenant",
	  applicantType: "",
	  status: "",
	  image: require("../../../../assets/button_grafx/add_person_blue.png")
	}
  ];

  const dependents = [
	{
	  name: "Bigglesworth",
	  dependentType: "Pet (Small Dog)" ,
	  status: "",
	  image: require("../../../../assets/images/dog_1.jpg")
	},
	{
		name: "Add Dependent",
		dependentType: "",
		status: "",
		image: require("../../../../assets/button_grafx/add_dependent_blue.png")
	  },
	  {
		name: "Add Pet",
		dependentType: "",
		status: "",
		image: require("../../../../assets/button_grafx/add_pet_blue.png")
	  }
  ];

  const budgetplan = [
	{
		name: "Add Budget Plan",
		image: require("../../../../assets/button_grafx/add_budgetplan_blue.png")
	  }
  ];

  const messages = [
	{
		title: "Application Submitted",
		message: "Your Joint Tenant Application for Giles Rupert has been submitted and is current being processed.",
		image: require("../../../../assets/images/12.jpg"),
		date: "15/11/2019"
	  },
	
	{
	  title: "Rental Lease Expiry Notice",
	  message: "Your current rental lease contract will expire in 1 month on 16/12/2019. If you wish to renew your lease please submit your offer within the next 7 days",
	  image: require("../../../../assets/images/A10.jpg"),
	  date: "16/11/2019"
	},
	{
	  title: "Application Approved",
	  message: "Great News Sara, your primary tenant application has now been completed and you are fully approved.",
	  image: require("../../../../assets/images/11.jpg"),
	  date: "05/11/2019"
	},
	{
		title: "Reference Complete",
		message: "Sara, your employer has completed your employment reference and your application has been updated.",
		image: require("../../../../assets/images/11.jpg"),
		date: "04/10/2019"
	  },
  ];
  
const MessageRow = ({ number, image, title, message, date }) => {
  return (
    <TouchableOpacity style={messageRowStyles.row}>
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

class MyAccountIndexView extends React.Component 
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
            <Text style={iOSUIKit.largeTitleEmphasized}>Sara's Account</Text>
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
                source={require("../../../../assets/images/gradient_blue.png")}
              >
                <View style={stylelocal.suggestionTextBlock}>
                  <Text style={stylelocal.suggestionText}>
                    {`My \n`}
                    <Text style={stylelocal.bold}>Account</Text>
					{`\n@difrent`}
					{'\n'}
                  </Text>
				  
                </View>
              </TouchableRoundedImage>
              
              <TouchableRoundedImage
                style={stylelocal.bigSuggestion}
                source={require("../../../../assets/images/11.jpg")}
              />
            </View>
            <View style={stylelocal.suggestionRowBottom}>
              <TouchableRoundedImage
                style={stylelocal.smallSuggestion}
                source={require("../../../../assets/images/12.jpg")}
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
          <View style={stylelocal.rentalApplication}>
            <View style={stylelocal.rentalApplicationTitleBar}>
              <Text style={stylelocal.rentalApplicationTitle}>My Rental Application</Text>
          
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.rentalApplicationList}
            >
              {rentalApplication.map((rentalApplication, index) => (
                <View
                  key={rentalApplication.name}
                  style={
                    index < rentalApplication.length - 1 && stylelocal.rentalApplicationItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.rentalApplicationItemImage}
                    source={rentalApplication.image}
                  />
                  <Text style={stylelocal.rentalApplicationItemName}>{rentalApplication.name}</Text>
                  <Text style={stylelocal.rentalApplicationItemType}>{rentalApplication.applicantType}</Text>
				  <Text style={stylelocal.rentalApplicationItemStatus}>{rentalApplication.status}</Text>
                </View>
              ))}
            </ScrollView>
		
          </View>

		  <View style={stylelocal.dependent}>
            <View style={stylelocal.dependentTitleBar}>
              <Text style={stylelocal.dependentTitle}>My Dependents & Pets</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.dependentList}
            >
              {dependents.map((dependents, index) => (
                <View
                  key={dependents.name}
                  style={
                    index < dependents.length - 1 && stylelocal.dependentItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.dependentItemImage}
                    source={dependents.image}
                  />
                  <Text style={stylelocal.dependentItemName}>{dependents.name}</Text>
                  <Text style={stylelocal.dependentItemType}>{dependents.applicantType}</Text>
			
                </View>
              ))}
            </ScrollView>
			
          </View>

		  <View style={stylelocal.budget}>
            <View style={stylelocal.budgetTitleBar}>
              <Text style={stylelocal.budgetTitle}>My Budget Planner</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={stylelocal.budgetList}
            >
              {budgetplan.map((budgetplan, index) => (
                <View
                  key={budgetplan.name}
                  style={
                    index < budgetplan.length - 1 && stylelocal.budgetItem
                  }
                >
                  <TouchableRoundedImage
                    style={stylelocal.budgetItemImage}
                    source={budgetplan.image}
                  />
				   <Text style={stylelocal.budgetItemName}>{budgetplan.name}</Text>
                </View>
              ))}
            </ScrollView>
			
          </View>


		  <View style={stylelocal.notifications}>
            <View style={stylelocal.notificationsTitleBar}>
              <Text style={stylelocal.notificationsTitle}>Notifications</Text>
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


	rentalApplicationTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  rentalApplication: {
		marginTop: 15,
		paddingTop: 16,
		backgroundColor: iOSColors.white
	  },
	  rentalApplicationTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  rentalApplicationList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  rentalApplicationItem: {
		marginRight: 8,
	  },
	  rentalApplicationItemImage: {
		height: 100,
		width: 100,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 50,
		backgroundColor: colors.COL_BANK_BLUE_DARK,
		marginRight: 8,
	  },
	  rentalApplicationItemName: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 2
	  },
	  rentalApplicationItemType: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },
	  rentalApplicationItemStatus: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },

	  dependentTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  dependent: {
		marginTop: 10,
		paddingTop: 0,
		backgroundColor: iOSColors.white
	  },
	  dependentTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  dependentList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  dependentItem: {
		marginRight: 8,
	  },
	  dependentItemImage: {
		height: 100,
		width: 100,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 50,
		backgroundColor: colors.COL_BANK_BLUE_DARK,
		marginRight: 8,
	  },
	  dependentItemName: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 2
	  },
	  dependentItemType: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },
	  dependentItemStatus: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },



	  budgetTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	  budget: {
		marginTop: 10,
		paddingTop: 0,
		backgroundColor: iOSColors.white
	  },
	  budgetTitleBar: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  budgetList: {
		marginTop: 12,
		paddingHorizontal: 16,
		paddingBottom: 12
	  },
	  budgetItem: {
		marginRight: 8,
	  },
	  budgetItemImage: {
		height: 100,
		width: 100,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 50,
		backgroundColor: colors.COL_BANK_BLUE_DARK,
		marginRight: 8,
	  },
	  budgetItemName: {
		...material.titleObject,
		fontSize: 12,
		marginTop: 2
	  },
	  budgetItemType: {
		...material.captionObject,
		fontSize: 10,
		color: iOSColors.gray
	  },
	  budgetItemStatus: {
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
	  textAlign: 'right',
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

export default MyAccountIndexView;