import React from "react";
import styles from "../../../../assets/styles";
import textStyle from "../../../../assets/styles/text";
import { Text, View } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';

const ProfileItemGalleryBox = ({
	images,
}) => {
	return (
		<View style={styles.containerProfileItemGalleryBox}>
			
			<Text style={textStyle.indexCardDescriptionTitle}>Property Image Gallery</Text>
	
            <SliderBox images={images} 
                    sliderBoxHeight={200}
                    />
		</View>
		
	);
};

export default ProfileItemGalleryBox;
