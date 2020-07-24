import React from "react";
import styles from "../../../assets/styles";
import textStyle from ",,/../../assets/styles/text";
import { Text, View } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import XBar from 'react-native-x-bar';


const ProfileItem = ({

	matches,
	address_1,
	address_2,
	district,
	available_date,
	rent_display_string,
	deposit_display_string,
}) => {
	return (
		<View style={styles.containerProfileItem}>
		
			<Text style={textStyle.indexCardTitleText}>{address_1}</Text>
<Text style={textStyle.indexCard_Address2_Text}>
	{address_2} - {district}
</Text>
<Text style={textStyle.indexCard_RentAmount}> {rent_display_string} 
</Text>
	
	<Text style={textStyle.profileItem_keyFacts_icon}><FontAwesome name="calendar" size={36}/> </Text>
	<Text style={textStyle.indexCard_RentAmount}>Available From: {available_date}</Text>

		</View>
		
	);
};

export default ProfileItem;
