import React, {Component} from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../../assets/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import NavigationService from '../navigation/NavigationService';
import NavBarButton from './NavBarButton';
import { Colors } from "react-native/Libraries/NewAppScreen";

//const Home = () => {

class BottomButtonRibbon extends Component 
{

	render (){

	return (
	
			<View style={styles.wrapper} >
<View style={styles.hamburger}>

    </View>
             

				</View>


	);
}};

export default BottomButtonRibbon;

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 0,
        height: 75,
        backgroundColor: colors.COL_WHITE
    },
    logo: {
        marginTop: 20,
        height: 50,
       resizeMode: 'contain',
       alignSelf: 'center',
    },
    hamburger: {
        position: 'absolute',
        left: 0,
        top: 30,
    },

    settings: {
        position: 'absolute',
        right: 20,
        top: 30,
     
    },
    circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: colors.COL_SILVER,
		backgroundColor: colors.COL_CORE_GREEN,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
    },
    iconButton: { 
        fontSize: 20, 
        color: colors.COL_WHITE 
    },
 


});
