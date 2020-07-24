import React from "react";
import styles from "../../../../assets/styles";
import textStyle from "../../../../assets/styles/text";
import { Text, View } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';


const ProfileItemSummaryBox = ({

	matches,
	address_1,
	address_2,
	district,
	available_date,
    rent_display_string,
    short_description,
}) => {
	return (
		<View style={styles.containerProfileItemDescription}>
			
			<Text style={textStyle.indexCardDescriptionTitle}>Property Features</Text>

<Text style={textStyle.indexCardDescriptionBodyText}>{short_description} 
</Text>
	
		</View>
		
	);
};

export default ProfileItemSummaryBox;
