
import React, {Component} from "react";
import styles from "../../../../assets/styles";
import HeaderBarBack from "../../components/HeaderBar_back";
import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import ProfileItem from "../../components/ProfileItem";
import ProfileItemHeader from "./ProfileItemHeader";
import ProfileItemDescription from "./ProfileItem_Description";
import PropertyCard from "../../../../assets/data/demoSearchResultsIndex";
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import NavigationService from '../../navigation/NavigationService';

class HomeMatchDetailView extends Component 
 {


	render (){
		const {searchIndex} = this.props;

		const {
			index_image,
			address_1,
			address_2,
			district,
			rent_display_string,
			short_description,
			available_date,
			match,
		} = PropertyCard[searchIndex];
	
		
	return (
		<ImageBackground
			source={require("../../../../assets/images/bg.png")}
			style={styles.bg}
		>
				<View>
			<HeaderBarBack />
		</View>
			<ScrollView style={styles.containerProfile}>
				<ImageBackground source={index_image} style={styles.photo}>
			
				</ImageBackground>

				<ProfileItemHeader
					matches={match}
					address_1={address_1}
					address_2={address_2}
					district={district}
				/>
			

				<View style={styles.actionsProfile}>
					

					<TouchableOpacity style={styles.roundedButtonWide}
					onPress={() => NavigationService.navigate('BookViewing', { 'search_index': searchIndex})}
					>
						<Text style={styles.iconButton}>
							
						</Text>
						<Text style={styles.textButton}>View it!</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.circledButton}
					onPress={() => NavigationService.navigate('SendMessage', { 'search_index': searchIndex})}
					
					>
						<Text style={styles.iconButton}>
							<MaterialIcons name="message" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButtonWide}
					onPress={() => NavigationService.navigate('MakeOffer', { 'search_index': searchIndex})}
					
					>
						<Text style={styles.iconButton}>
							
						</Text>
						<Text style={styles.textButton}>Rent it!</Text>
					</TouchableOpacity>

				</View>
				<ProfileItemDescription
					matches={match}
					address_1={address_1}
					address_2={address_2}
					district={district}
					available_date= {available_date}
					rent_display_string= {rent_display_string}
					short_description= {short_description}
				/>
				
			</ScrollView>
		</ImageBackground>
	);
 }
};

export default HomeMatchDetailView;