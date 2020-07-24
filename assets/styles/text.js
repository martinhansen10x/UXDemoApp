import { StyleSheet, Dimensions } from "react-native";
import colors from './colors';
import { material } from 'react-native-typography';

export default StyleSheet.create({

    indexCard_Match_Text: {
        ...material.body2Object,
        color: colors.COL_WHITE, 
    },

	indexCardTitleText: {
        ...material.titleObject,
        marginTop: 5,
        textAlign: 'center',
        color: colors.COL_PLATINUM,
       // textTransform: "uppercase",
        
    },

    indexCard_Address2_Text: {
        ...material.body1Object,
        color: colors.COL_PLATINUM,
        marginLeft: 2,
        marginRight: 2,
        textAlign: 'center',
        marginBottom: 5,
    // textTransform: "uppercase", 
    },

    indexCard_RentAmount: {
        ...material.titleObject,
        color: colors.COL_CORE_GREEN,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 5,
        textAlign: 'center',
        //textTransform: "uppercase", 
    },

    indexCard_DepositAmount: {
        ...material.body2Object,
        color: colors.COL_CORE_GREEN,
        marginLeft: 2,
        marginRight: 2,
        textAlign: 'right',
        textTransform: "uppercase", 
    },

    indexCard_FeatureText: {
        ...material.titleObject,
        color: colors.COL_APPLE_GREEN,
        textAlign: 'left',
        marginRight:25,
        marginLeft:0,
    },

    indexCard_FeatureIcons: {
        color: colors.COL_PLATINUM,
        marginLeft: 25,
        marginRight: 0,
        textAlign: 'right',
        fontSize: 24,
    },

    indexCard_FeatureValueIcons: {
        color: colors.COL_APPLE_GREEN,
        marginLeft: 0,
        marginRight: 25,
        textAlign: 'right',
        fontSize: 24,
        },

    tag_text: {
        ...material.captionObject,
      
        textAlign: 'left',
        marginRight:0,
        marginLeft:2,
    },
    profileItem_keyFacts_Text:{
        ...material.captionObject,
        color: colors.COL_PLATINUM,
        textAlign: 'center',
        marginLeft: 0,
        marginRight: 0,
    },
    profileItem_keyFacts_icon:{
       
        color: colors.COL_PLATINUM,
        textAlign: 'center',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 5,
        marginBottom: 5,
    },
    indexCardDescriptionTitle:{

        ...material.titleObject,
        color: colors.COL_CORE_GREEN,
        textAlign: 'left',
        marginRight:5,
        marginLeft:0,
        marginTop: 5,
        marginBottom: 10,
    },

    indexCardDescriptionBodyText:{
        ...material.body2Object,
        color: colors.COL_PLATINUM,
        textAlign: 'left',
        marginRight:5,
        marginLeft:5,
        marginTop: 5,
        marginBottom: 10,
    },
    
    costsCardLineItem:{
        ...material.body2Object,
        color: colors.COL_PLATINUM,
        fontSize: 14,
    },
    costsCardTotalItem:{
        ...material.titleObject,
        color: colors.COL_BLACK,
        fontSize: 16,
    }
});