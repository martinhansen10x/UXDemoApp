import React from "react";
import styles from "../../../assets/styles";
import textStyle from "..//../../assets/styles/text";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const City = ({	city, area}) => {
	return (
		<TouchableOpacity style={styles.city}>
			<Text style={textStyle.tag_text}>
				<FontAwesome name="map-marker" /> {city} {area}
			</Text>
		</TouchableOpacity>
	);
};

export default City;
