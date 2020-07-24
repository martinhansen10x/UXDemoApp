import React from "react";
import styles from "../../../../assets/styles";
import textStyle from ",,/../../../assets/styles/text";
import { Text, View } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';


const ProfileItemHeader = ({

	matches,
	address_1,
	address_2,
	district,
}) => {
	return (
		<View style={styles.containerProfileItem}>
			<View style={styles.matchesProfileItem}>
				<Text style={textStyle.indexCard_Match_Text}>
					<FontAwesome name="heart" /> {matches}% Match!
				</Text>
			</View>
			<Text style={textStyle.indexCardTitleText}>{address_1}</Text>
<Text style={textStyle.indexCard_Address2_Text}>
	{address_2} - {district}
</Text>
		</View>
		
	);
};

export default ProfileItemHeader;
