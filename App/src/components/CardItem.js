import React from "react";
import styles from "../../../assets/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign, Foundation, MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { material } from 'react-native-typography';
import colors from '../../../assets/styles/colors';
import textStyle from '../../../assets/styles/text';
import XBar from 'react-native-x-bar';

const CardItem = ({
	actions,
	search_index,
	image,
	matches,
	address_1,
	address_2,
	district,
	city,
	postcode_search_area,
	rent_display_string,
	deposit_display_string,
	bedrooms,
	bathrooms,
	reception_rooms,
	parking_spaces,
	outside_space,
	elevator,
	pets,
	smokers,
	disabled_access,
	onPressLeft,
	onPressRight,
	onPressDown,
	status,
	variant
}) => {
	// Custom styling
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 150 : 175,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			paddingLeft: variant ? 10: 15,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];


	return (

		
		<View style={styles.containerCardItem}>
			{/* IMAGE */}
			<Image source={image} style={imageStyle} />

			{/* MATCHES */}
			{matches && (
				<View style={styles.matchesCardItem}>
					<Text style={textStyle.indexCard_Match_Text}>
						<FontAwesome name="heart" /> {matches}% Match!
					</Text>
				</View>
			)}

			{/* NAME */}
			<Text style={textStyle.indexCardTitleText}>{address_1}</Text>

			{/* DESCRIPTION */}
			
			<Text style={textStyle.indexCard_Address2_Text}>{address_2} - {district} </Text>
			
			<XBar 
			slots={[
				{ children : 	<Text style={textStyle.indexCard_RentAmount}> {rent_display_string} </Text> 
				,    style : {
		alignContent: 'flex-start',
      },
				},
			

			]}
			
			/>
			

<XBar
			slots={[
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<FontAwesome name="bed" size={18}/> 
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureText}>
						{bedrooms}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<FontAwesome name="bathtub" size={18}/>
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureText}>
					 {bathrooms}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<MaterialCommunityIcons name="sofa" size={18}/>
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureText}>
						{reception_rooms}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
			]}
			layout='space equal'
			/>

<XBar 
			slots={[
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<FontAwesome name="automobile" size={18}/> 
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureText}>
						{parking_spaces}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<MaterialCommunityIcons name="flower-tulip" size={18}/>
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureValueIcons}>
					{outside_space}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<Foundation name="elevator" size={18}/>
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureValueIcons}>
						{elevator}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
			]}
			layout='space equal'
			/>

<XBar 
			slots={[
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<MaterialIcons name="pets" size={18}/> 
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureValueIcons}>
						{pets}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<MaterialCommunityIcons name="smoking" size={18}/>
					</Text>	 
				,    style : {
		alignContent: 'flex-end',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureValueIcons}>
					 {smokers}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureIcons}>
						<FontAwesome name="wheelchair" size={18}/>
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
				{ children : <Text style={textStyle.indexCard_FeatureValueIcons}>
						{disabled_access}
					</Text>	 
				,    style : {
		alignContent: 'flex-start',
      },
				},
			]}
			layout='space equal'
			/>

			{/* STATUS */}
			{status && (
				<View style={styles.status}>
					<View style={status === "Online" ? styles.online : styles.offline} />
					<Text style={styles.statusText}>{status}</Text>
				</View>
			)}

			{/* ACTIONS */}
			{actions && (
			
				<View style={styles.actionsCardItem}>
				

					<TouchableOpacity style={styles.dislikebutton} onPress={() => onPressLeft()}>
						<Text style={styles.dislike}>
							<FontAwesome name="close" size= {32}/>
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonCentre} onPress={() => onPressDown(search_index)}>
						<Text style={styles.more}>
							<FontAwesome name="chevron-down" size= {32}/>
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.heartbutton}
						onPress={() => onPressRight()}
					>
						<Text style={styles.like}>
							<FontAwesome name="heart" size={32} />
						</Text>
					</TouchableOpacity>

				
				</View>
			)}
		
		</View>
	);
};

export default CardItem;
