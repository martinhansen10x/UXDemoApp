
import React, { Component } from "react";
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


class HomeMatchDetailGalleryView extends Component {


	constructor(props) {
		super(props);
		this.state = {
		};
	}

	onLayout = e => {
		this.setState({
			width: e.nativeEvent.layout.width
		});
	};


	render() {
		const { searchIndex } = this.props;

		const {
			index_image,
			address_1,
			address_2,
			district,
			rent_display_string,
			short_description,
			available_date,
			match,
			Images,
		} = PropertyCard[searchIndex];



		return (
			<ImageBackground
				source={require("../../../../assets/images/bg.png")}
				style={styles.bg}
			>
				<View>
					<HeaderBarBack />
				</View>
				<ScrollView style={styles.containerProfile} >
					<ImageBackground source={index_image} style={styles.photo}>
					</ImageBackground>
					<ProfileItemHeader
						matches={match}
						address_1={address_1}
						address_2={address_2}
						district={district}
					/>
					<View style={styles.containerProfileItemGalleryBox} onLayout={this.onLayout}>
						<SliderBox images={Images}
							sliderBoxHeight={250}
							//dotColor={colors.green1}
							parentWidth={this.state.width}
						/>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
};

export default HomeMatchDetailGalleryView;