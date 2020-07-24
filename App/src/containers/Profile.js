import React, {Component} from "react";
import styles from "../../../assets/styles";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import Icon from "../components/Icon";
import Demo from "../../../assets/data/demo.js";
import PropertyCard from "../../../assets/data/demoSearchResultsIndex";
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';


class Profile extends Component 
 {

	render (){

		const {navigation} = this.props;
		const listingIndex= navigation.getParam ('search_index', 'Null');
		const {
			index_image,
			address_1,
			address_2,
			district,
			rent_display_string,
			deposit_display_string,
			available_date,
			match,
		} = PropertyCard[listingIndex];
	
		
	return (
		<ImageBackground
			source={require("../../../assets/images/bg.png")}
			style={styles.bg}
		>
			<ScrollView style={styles.containerProfile}>
				<ImageBackground source={index_image} style={styles.photo}>
				<View style={styles.topCentreButtonWrapper}>
				<TouchableOpacity style={styles.buttonTopCentre} onPress={() => this.props.navigation.goBack()}>
						<Text style={styles.more2}>
							<FontAwesome name="chevron-up" size= {32}/>
						</Text>
					</TouchableOpacity>
				</View>
				</ImageBackground>

				<ProfileItem
					matches={match}
					address_1={address_1}
					address_2={address_2}
					district={district}
					available_date= {available_date}
					rent_display_string= {rent_display_string}
					deposit_display_string= {deposit_display_string}
				/>

				<View style={styles.actionsProfile}>
					<TouchableOpacity style={styles.circledButton}>
						<Text style={styles.iconButton}>
							<SimpleLineIcons name="options" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButton}>
						<Text style={styles.iconButton}>
							<MaterialIcons name="chat" />
						</Text>
						<Text style={styles.textButton}>Rent it</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
 }
};

export default Profile;
