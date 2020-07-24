
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
import ProfileItemSummaryBox from "./ProfileItem_SummaryBox";
import ProfileItemGalleryBox from "./ProfileItem_GalleryBox";
import PropertyCard from "../../../../assets/data/demoSearchResultsIndex";
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import NavigationService from '../../navigation/NavigationService';
import { SliderBox } from 'react-native-image-slider-box';
import MapView, { Marker } from 'react-native-maps';
import PropertyCosts from './PropertyCosts';

class HomeMatchDetailCostsView extends Component 
 {

    constructor(props) {
        super(props);
        this.state = {
        };
    };

	onLayout = e => {
        this.setState({
            width: e.nativeEvent.layout.width
        });
	};

	_handleMapRegionChange = mapRegion => {
		this.setState({ mapRegion });
	  };

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
			rent_amount_num_month,
			rent_currency_symbol,
			council_tax_month,
			gas_month,
			electric_month,
			water_month,
			internet_month,
			insurance_month,
			Images,
		} = PropertyCard[searchIndex];
		
		const total_costs = rent_amount_num_month + gas_month + water_month
		+ electric_month + internet_month + insurance_month + council_tax_month;

	return (

		<ImageBackground
			source={require("../../../../assets/images/bg.png")}
			style={styles.bg}
		>
				<View>
			<HeaderBarBack />
		</View>
			<ScrollView style={styles.containerProfile } >
				<ImageBackground source={index_image} style={styles.photo}>
			
				</ImageBackground>

				<ProfileItemHeader
					matches={match}
					address_1={address_1}
					address_2={address_2}
					district={district}
				/>

				<View>
				<PropertyCosts
					matches={match}
					address_1={address_1}
					address_2={address_2}
					district={district}
					available_date= {available_date}
					rent_display_string= {rent_display_string}
					short_description= {short_description}
					index_image= {index_image}
					rent_amount_num_month = {rent_amount_num_month}
					rent_currency_symbol = {rent_currency_symbol}
					council_tax_month = {council_tax_month}
					gas_month = {gas_month}
					electric_month = {electric_month}
					water_month =  {water_month}
					internet_month = {internet_month}
					insurance_month = {insurance_month}
					total_costs = {total_costs}
				/>
		
                </View>	
			</ScrollView>
		</ImageBackground>
	);
 }
};

export default HomeMatchDetailCostsView;