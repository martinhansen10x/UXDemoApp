import { StyleSheet, Dimensions } from "react-native";
import colors from './colors';

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#46A575";
const DISLIKE_ACTIONS = "#D04949";
const FLASH_ACTIONS = "#5028D7";
const MORE_ACTIONS = "#5028D7";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: WHITE,
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 },
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: colors.COL_CORE_GREEN,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesTextCardItem: {
		color: WHITE
	},
	descriptionCardItem: {
		color: GRAY,
		textAlign: "center"
	},
	status: {
		paddingBottom: 5,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		marginTop: 10,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 0
	},
	centreButtonWrapper: {
		bottom: 0,
	},
	heartbutton: {
		width: 60,
		height: 60,
		borderRadius: 70,
		borderWidth: 2,
		borderColor: colors.COL_SILVER,
		backgroundColor: colors.COL_CORE_GREEN,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.25,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	dislikebutton: {
		width: 60,
		height: 60,
		borderRadius: 70,
		borderWidth: 2,
		borderColor: colors.COL_SILVER,
		backgroundColor: colors.COL_RED,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.25,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},

	buttonCentre: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: colors.COL_SILVER,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.25,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	topCentreButtonWrapper:{
		zIndex: 10,
		alignItems: 'center',
		marginTop: 10,
	},
	buttonTopCentre: {
		width: 50,
		height: 50,
		borderRadius: 50,
		//opacity: 0.2
		borderWidth: 2,
		borderColor: colors.COL_CORE_GREEN,
		backgroundColor: colors.COL_CORE_GREEN,
		marginHorizontal: 7,
		alignItems: "center",
		shadowOpacity: 0.25,
		shadowRadius: 20,
		shadowColor: colors.COL_PLATINUM,
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		
		color: STAR_ACTIONS
	},
	like: {
		fontSize: 25,
		
		color: colors.COL_WHITE
	},
	more: {
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
		color: colors.COL_PLATINUM,
		opacity: 0.5,
	},
	more2: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
			color: colors.COL_WHITE,
			opacity: 0.75
		},
	dislike: {
		fontSize: 25,
		
		color: colors.COL_WHITE
	},
	flash: {
		color: FLASH_ACTIONS
	},

	// COMPONENT - CITY
	city: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	cityText: {
		
		color: colors.COL_PLATINUM,
		fontSize: 12
	},

	// COMPONENT - FILTERS
	filters: {
		backgroundColor: colors.COL_WHITE,
		padding: 10,
		borderRadius: 20,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: colors.COL_BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	filtersText: {
		color: colors.COL_PLATINUM,
		fontSize: 12
	},

	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		width: DIMENSION_WIDTH - 100
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: GRAY,
		fontSize: 12,
		paddingTop: 5
	},

	// COMPONENT - PROFILE ITEM
	containerProfileItem: {
		backgroundColor: colors.COL_WHITE,
		paddingHorizontal: 10,
		paddingBottom: 15,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: colors.COL_BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	containerProfileItemDescription: {
		backgroundColor: colors.COL_WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 0,
		marginTop: 20,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: colors.COL_BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	containerCostsItemDescription: {
		backgroundColor: colors.COL_WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 0,
		marginTop: 0,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: colors.COL_BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	containerProfileItemGalleryBox: {
		backgroundColor: colors.COL_WHITE,
		paddingHorizontal: 0,
		paddingBottom: 0,
		margin: 20,
		borderRadius: 0,
		marginTop: 0,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: colors.COL_BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesProfileItem: {
		width: 150,
		marginTop: -15,
		backgroundColor: colors.COL_CORE_GREEN,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		
		color: colors.COL_WHITE
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 15,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
	
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "stretch",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	top: {
		paddingTop: 10,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	header_bar: {
		marginTop: 40,
		marginHorizontal: 0,
	},
	title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
	icon: {
		
		fontSize: 20,
		color: DARK_GRAY,
		paddingRight: 10
	},
	bar : {
		height : 50,
		borderColor : '#ddd',
		borderWidth : 0,
		marginTop : 0,
		marginRight : 0,
		marginLeft : 0,
		backgroundColor : '#fcfcfc'
	  },

	// CONTAINER - HOME
	containerHome: { marginHorizontal: 10 },

	// CONTAINER - MATCHES
	containerMatches: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	rentBoxWrapper: {
		marginLeft: 2,
	},

	// CONTAINER - PROFILE
	containerProfile: { marginHorizontal: 0 },
	photo: {
		backgroundColor: colors.COL_BLACK,
		shadowColor: colors.COL_BLACK,
		shadowOpacity: 0.75,
		width: DIMENSION_WIDTH,
		height: 200
	},
	topIconLeft: {
		
		fontSize: 20,
		color: WHITE,
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: "90deg" }]
	},
	topIconRight: {
		
		fontSize: 20,
		color: WHITE,
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	iconButton: { fontSize: 20, color: WHITE },
	textButton: {
		fontSize: 15,
		color: WHITE,
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: colors.COL_SILVER,
		backgroundColor: colors.COL_PLATINUM,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 5,
		marginLeft: 5,
	},
	roundedButtonWide: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 5,
		marginRight: 5,

		height: 50,
		borderRadius: 0,
		borderWidth: 1,
		borderColor: colors.COL_SILVER,
		backgroundColor: colors.COL_APPLE_GREEN,
		paddingHorizontal: 20
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 5,
		marginRight: 5,
		height: 50,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: colors.COL_SILVER,
		backgroundColor: colors.COL_APPLE_GREEN,
		paddingHorizontal: 20
	},

	// MENU
	tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},
	tabButtonText: {
		textTransform: "uppercase"
	},
	iconMenu: {
		height: 20,
		paddingBottom: 7
	}
});
