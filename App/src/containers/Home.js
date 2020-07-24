import React, {Component} from "react";
import { View, ImageBackground, Image } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import City from "../components/City";
import Filters from "../components/Filters";
import CardItem from "../components/CardItem";
import styles from "../../../assets/styles";
import colors from "../../../assets/styles/colors";
import Demo from "../../../assets/data/demo";
import SearchRes from "../../../assets/data/demoSearchResultsIndex";
import { FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import XBar from 'react-native-x-bar';

//const Home = () => {

class Home extends Component 
{
	returnBoolIcon(bool) {
		if(bool)
		return <Ionicons name="ios-checkmark-circle-outline" size={24} color={colors.COL_APPLE_GREEN} />;
		else return <MaterialCommunityIcons name="cancel" size={24} color={colors.COL_RED} />;
	 }

	render (){

	return (
		


		<ImageBackground
			source={require("../../../assets/images/bg.png")}
			style={styles.bg}
		>
<View style= {styles.header_bar}>
				<XBar
		slots={[
		  {
			children : (
				<Ionicons name="md-menu" size={24} color={colors.COL_APPLE_PLATINUM} />
			),
			style : { marginLeft : 30 }
		  },
		  {
			children : (
			  <Image
				source={ require('../../../assets/icon.png') }
				style={{
				  width : 50,
				}}
				resizeMode='contain'
			  />
			),
			style : { paddingTop : 2, paddingBottom : 4 }
		  },
		  {
			children : (
				<Ionicons name="md-settings" size={24} color={colors.COL_PLATINUM} />
			),
			style : { marginRight : 30 }
		  }
		]}
		layout='absolute center'
		style={[ styles.bar, { backgroundColor : colors.COL_WHITE , borderColor : colors.COL_WHITE } ]}
	  />
	</View>
		
			<View style={styles.containerHome}>
				
				<View style={styles.top}>
				
					<City 
						city={SearchRes[0].city}
						area={SearchRes[0].postcode_search_area}

					/>
					<Filters />
				</View>

				<CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					{SearchRes.map((item, index) => (
						<Card key={index}>
							<CardItem
								search_index={index}
								image={item.index_image}
								address_1={item.address_1}
								address_2={item.address_2}
								district={item.district}
								city={item.city}
								postcode_search_area={item.postcode_search_area}
								rent_display_string={item.rent_display_string}
								deposit_display_string={item.deposit_display_string}
								bedrooms={item.bedrooms}
								bathrooms={item.bathrooms}
								reception_rooms={item.reception_rooms}
								parking_spaces={item.parking_spaces}
								outside_space={this.returnBoolIcon(item.outside_space)}
								elevator={this.returnBoolIcon(item.elevator)}
								pets={this.returnBoolIcon(item.pets)}
								smokers={this.returnBoolIcon(item.smokers)}
								disabled_access={this.returnBoolIcon(item.disabled_access)}
								matches={item.match}
								actions
								onPressLeft={() => this.swiper.swipeLeft()}
								onPressRight={() => this.swiper.swipeRight()}
								onPressDown={() => this.props.navigation.navigate('Profile', { 'search_index': index})}
							/>
						</Card>
					))}
				</CardStack>
			</View>
		</ImageBackground>
	
	
	);
}};

export default Home;
