import React  from "react";
import styles from "../../../../assets/styles";
import textStyle from "../../../../assets/styles/text";
import { Text, View, Image } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import XBar from 'react-native-x-bar';


const PropertyCosts = ({

	matches,
	address_1,
	address_2,
	district,
	available_date,
    rent_display_string,
    short_description,
    index_image,
    rent_amount_num_month,
    rent_currency_symbol,
    council_tax_month,
    gas_month,
    electric_month,
    water_month,
    internet_month,
    insurance_month,
    total_costs,
}) => {
	return (

       
		<View style={styles.containerCostsItemDescription}>
			
			<Text style={textStyle.indexCardDescriptionTitle}>Property Costs (Month)</Text>

            <XBar
            slots={[
              {
                children : (
                  <Image
                    source={ index_image }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Rent</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{rent_amount_num_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

            <XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/counciltax.png') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Council Tax</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{council_tax_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

            <XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/gas-logo.jpg') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Gas</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{gas_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

<XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/electriclogo.jpeg') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Electricity</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{electric_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

<XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/waterlogo.png') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Water</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{water_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

<XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/phonelogo.png') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Broadband/Phone</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{internet_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />


<XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/insurancelogo.png') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardLineItem}>Contents Insurance</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardLineItem}>{rent_currency_symbol}{insurance_month}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

<XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../../../../assets/images/gradient_blank.png') }
                    style={{
                      width : 40,
                      height : 40,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text style={textStyle.costsCardTotalItem}>Total Per Month</Text>,
                  
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                 <Text style={textStyle.costsCardTotalItem}>{rent_currency_symbol}{total_costs}</Text>
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />


	
		</View>
		
	);
};

export default PropertyCosts;
