import React, {Component} from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../../assets/styles/colors";
import { FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import NavigationService from '../navigation/NavigationService';
import NavBarButton from './NavBarButton';

//const Home = () => {

class HeaderBarBack extends Component 
{

	render (){

	return (
	
			<View style={styles.wrapper} >
<View style={styles.hamburger}>
<NavBarButton
      handleButtonPress={() => NavigationService.back()}
      location="left"
      color={colors.COL_RED}
      icon={<Ionicons name="md-menu" size={32} color={colors.COL_PLATINUM} /> }
    />
    </View>
    <TouchableOpacity onPress={() => NavigationService.back()} >
    <View style={styles.logo}>
    <FontAwesome name="chevron-up" size= {32} color = {colors.COL_PLATINUM}/>
                </View>
                </TouchableOpacity>
<View style={styles.settings}>
<NavBarButton
      handleButtonPress={() => NavigationService.back()}
      location="left"
      color={colors.COL_RED}
      icon={<Ionicons name="md-settings" size={32} color={colors.COL_PLATINUM} /> }
    />
    </View>
				</View>


	);
}};

export default HeaderBarBack;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        height: 75,
        backgroundColor: colors.COL_WHITE
    },
    logo: {
        marginTop: 25,
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
 


});
