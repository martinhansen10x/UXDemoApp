import React  from "react";
import { 
	StyleSheet,
	View,
	Dimensions,
	ScrollView,
	Text,
	Platform,
	Image,
	ImageBackground,
	TouchableOpacity,
	StatusBar,
	FlatList,
} from "react-native";
import {
	iOSColors,
	human,
	material,
  materialColors,
	iOSUIKit,
	systemWeights
  } from "react-native-typography";
import styles from "../../../../assets/styles";
import colors from "../../../../assets/styles/colors";
import { FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import NavigationService from '../../navigation/NavigationService';
import HeaderBar from '../../components/HeaderBar_back';
import Carousel from 'react-native-looped-carousel';
import CalendarDays from 'react-native-calendar-slider-carousel';
import DateTimePicker from "react-native-modal-datetime-picker";
import NextArrowButton from '../../components/NextArrowButton';
import { Button } from 'react-native-elements';
import PropertyCard from "../../../../assets/data/demoSearchResultsIndex";
import { min } from "moment";

  
  const { width, height } = Dimensions.get('window');

//const Home = () => {

class MakeOfferView extends React.Component 
{
	returnBoolIcon(bool) {
		if(bool)
		return <Ionicons name="ios-checkmark-circle-outline" size={24} color={colors.COL_APPLE_GREEN} />;
		else return <MaterialCommunityIcons name="cancel" size={24} color={colors.COL_RED} />;
	 }

	 constructor(props) {
		super(props);
	 
		this.state = {
		  size: { width, height },
		  offerRentAmount: 2000,
		  offerContractLength: 6,
		  contractStartDate: '--/--/--',
		  minContractLength: 1,
		  maxContractLength: 120,
		  minRentOffer: 0,
		  isDateTimePickerVisible: false,
		  minDate: null,
		};
		this.handleIncreaseRentOffer = this.handleIncreaseRentOffer.bind(this)
		this.handleDecreaseRentOffer = this.handleDecreaseRentOffer.bind(this)
		this.handleIncreaseContractLength = this.handleIncreaseContractLength.bind(this)
		this.handleDecreaseContractLength = this.handleDecreaseContractLength.bind(this)     
	
	}
	  
	  _onLayoutDidChange = (e) => {
		const layout = e.nativeEvent.layout;
		this.setState({ size: { width: layout.width, height: layout.height  } });
	  }

	  changeSelectedDate = date => {
		console.log(date); // "2019-07-20"
		var parts = date.split('-');
		var reverseDate = parts[2] + '/' + parts[1] + '/' + parts[0]; 

		this.setState({
		  selectedDate: date,
		  displayDate: reverseDate,
		 });
	  };

	  componentDidMount(){
		  var that = this;

		  var date = new Date().getDate();
		  var day = new Date().getDay();
		  var month = new Date().getMonth() + 1;
		  var year = new Date().getFullYear();
		  var searchIndex = this.props.navigation.state.params.search_index;
		  const {
			index_image,
			address_1,
			address_2,
			district,
			rent_display_string,
			short_description,
			available_date,
			match,
			rent_amount_num,
			min_lease_length_months,
			max_lease_length_months,
			min_rent_offer,

		} = PropertyCard[searchIndex];
		
		  that.setState({
			  todaysDate: year + '/' + month + '/' + date,
			  displayDate: '--/--/--',
			  time: "--:--",
			  date: '',
			  offerRentAmount: rent_amount_num,
			  minContractLength: min_lease_length_months,
			  maxContractLength: max_lease_length_months,
			  minRentOffer: min_rent_offer,
			  contractStartDate: available_date,
			  minDate: available_date,
		  });
		
		}

		handleIncreaseRentOffer() {
			
			var newRentAmount = this.state.offerRentAmount + 25;
			this.setState({
				offerRentAmount: newRentAmount,
			});
		}

		handleDecreaseRentOffer() {
			if (this.state.offerRentAmount > this.state.minRentOffer)
			{
			var newRentAmount = this.state.offerRentAmount - 25;
			this.setState({
				offerRentAmount: newRentAmount,
			});
			}
		}

		handleIncreaseContractLength() {
			if(this.state.offerContractLength < this.state.maxContractLength)
			{
			var newContractLength = this.state.offerContractLength + 1;
			this.setState({
				offerContractLength: newContractLength,
			});
		}
		}

		handleDecreaseContractLength() {
			if(this.state.offerContractLength > this.state.minContractLength)
			{
			var newContractLength = this.state.offerContractLength - 1;
			this.setState({
				offerContractLength: newContractLength,
			});
		}
		}

		showDateTimePicker = () => {
			console.log(this.state.contractStartDate);
			this.setState({ minDate: new Date(this.state.minDate) });
			this.setState({ isDateTimePickerVisible: true });
		  };
		
		  hideDateTimePicker = () => {
			this.setState({ isDateTimePickerVisible: false });
		  };
		
		  handleDatePicked = date => {
			console.log("A date has been picked: ", date);
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var date = date.getDate();

			this.setState({contractStartDate: date + '/' + month + '/' + year, });
			this.hideDateTimePicker();
		  };

		  changeSelectedDate = date => {
			console.log(date); // "2019-07-20"
			var parts = date.split('-');
			var reverseDate = parts[2] + '/' + parts[1] + '/' + parts[0]; 
	
			this.setState({
			  selectedDate: date,
			  displayDate: reverseDate,
			 });
		  };


		changeCurrentPage = i => {
			this._carousel.animateToPage(i);
			// this._carousel._animatePreviousPage();
		  }

	render (){
	
	return (
		
		<View style={{ flex: 1, marginTop: 0 }}>
       	<HeaderBar />
        <StatusBar barStyle="dark-content" />
        <View style={stylelocal.header}>
          <View>
            <Text style={stylelocal.date}>MONDAY, 18 NOVEMBER 2019</Text>
            <Text style={iOSUIKit.largeTitleEmphasized}>Rental Offer</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={stylelocal.avatar}
              source={require("../../../../assets/images/11.jpg")}
            />
          </TouchableOpacity>
        </View>
        <Carousel

          delay={2000}
          style={this.state.size}
          autoplay={false}
		  swipe={false}
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
		  currentPage={this.state.currentPageNo}
		  ref={ref => {
            this._carousel = ref;
          }}
        >
             <View style={[{ backgroundColor: colors.COL_WHITE }, this.state.size]}>
			 <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Offer Amount</Text>
            </View> 
<View style={stylelocal.card}>
<Button
      title={`-`}
      onPress={this.handleDecreaseRentOffer }
      buttonStyle={{ marginTop: 0, marginHorizontal: 16, padding: 10, backgroundColor: colors.COL_CORE_GREEN }}
    />
      <Text style={stylelocal.bookedDate}>£{this.state.offerRentAmount}</Text> 
	  <Button
      title={`+`}
      onPress={this.handleIncreaseRentOffer }
      
      buttonStyle={{ marginTop: 0, marginHorizontal: 16, padding: 10, backgroundColor: colors.COL_CORE_GREEN }}
    />
	   </View>
	   <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Contract Length</Text>
            </View>
			
			<View style={stylelocal.card}>
			<Button
      title={`-`}
      onPress={ this.handleDecreaseContractLength}
      buttonStyle={{ marginTop: 0, marginHorizontal: 16, padding: 10, backgroundColor: colors.COL_CORE_GREEN }}
    />
      <Text style={stylelocal.bookedDate}>{this.state.offerContractLength} Months</Text> 
	  <Button
      title={`+`}
      onPress={ this.handleIncreaseContractLength}
      buttonStyle={{ marginTop: 0, marginHorizontal: 16, padding: 10, backgroundColor: colors.COL_CORE_GREEN }}
    />
	   </View>
	  
	   <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Contract Start Date</Text>
            </View>

		
			<TouchableOpacity
          onPress={this.showDateTimePicker}>
			<View style={stylelocal.card}>
      <Text style={stylelocal.bookedDate}>{this.state.contractStartDate}</Text> 
	   </View>
	   </TouchableOpacity>
	 
	 
	   <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
		  mode={"date"}
		  minimumDate={this.state.minDate}
		  isDarkModeEnabled={true}
        />
		   <Button
      title={`Continue`}
      onPress={() => {
      this.changeCurrentPage(1);
      }}
      buttonStyle={{ marginTop: 20, marginHorizontal: 16, backgroundColor: colors.COL_CORE_GREEN }}
    />
	   </View>

	   <View style={[{ backgroundColor: colors.COL_WHITE }, this.state.size]}>
			 <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Confirm Your Offer</Text>
            </View>
		  <View style={stylelocal.card2} >
		  <Text style={stylelocal.title}>YOUR RENT OFFER:</Text> 
		  <Text style={stylelocal.bookedDate}>£{this.state.offerRentAmount} Per Week  </Text> 
		  <Text style={stylelocal.title}>CONTRACT LENGTH:</Text> 
		  <Text style={stylelocal.bookedDate}>{this.state.offerContractLength} Months </Text>
		  <Text style={stylelocal.title}>CONTRACT START:</Text> 
		  <Text style={stylelocal.bookedDate}>{this.state.contractStartDate}</Text>
	
	   </View>
	   <Button
      title={`Change Offer`}
      onPress={() => {
      this.changeCurrentPage(0);
      }}
      buttonStyle={{ marginTop: 20, marginHorizontal: 16, backgroundColor: colors.COL_CORE_GREEN }}
    />
	   <Button
      title={`Submit Rental Offer`}
      onPress={() => {
      this.changeCurrentPage(2);
      }}
      buttonStyle={{ marginTop: 20, marginHorizontal: 16, backgroundColor: colors.COL_CORE_GREEN }}
    />
			 </View>

			 <View style={[{ backgroundColor: colors.COL_WHITE }, this.state.size]}>
			 <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Rental Offer Sent</Text>
            </View>
		  <View style={stylelocal.card}>
       <Text>Your offer has been submitted to the property provider, you will receive a notification in your homehub when your offer has been accepted or rejected.</Text>
	   </View>
	   <Button
      title={`Back To Listing`}
      onPress={() => { NavigationService.back()}
      }
      buttonStyle={{ marginTop: 20, marginHorizontal: 16, backgroundColor: colors.COL_CORE_GREEN }}
    />
			 </View>
        </Carousel>

      </View>	
	
	);
}};

const lightTextShadow = {
	textShadowColor: materialColors.blackTertiary,
	textShadowOffset: {
	  width: 0,
	  height: 1
	},
	textShadowRadius: 4
  };

const stylelocal = StyleSheet.create({
	screenContainer: {
	  flex: 1,
	  backgroundColor: iOSColors.white
	},
	header: {
	  flexDirection: "row",
	  justifyContent: "space-between",
	  alignItems: "flex-start",
	  marginHorizontal: 10,
	  marginTop: 10,
	  paddingBottom: 8,
	  borderBottomWidth: 1,
	  borderColor: iOSColors.customGray
	},
	viewingsRibbonTitleBar: {
		marginTop: 15,
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	  },
	  viewingsRibbonTitle: {
		...human.title2Object,
		...systemWeights.bold
	  },
	bookedDate: {
	...material.display2Object,
	fontSize: 24,
	paddingTop: 0,
	paddingBottom: 5,
	textAlign: 'center',
	},
	title: {
		...material.titleObject,
		color: colors.COL_CORE_GREEN,
		fontSize: 16,
		marginBottom: 5,
	  },
	caption: {
		...material.captionObject,
		color: iOSColors.gray,
		marginBottom: 10,
	  },
	date: {
	  ...iOSUIKit.footnoteEmphasizedObject,
	  color: iOSColors.gray,
	  marginBottom: 5,
	},
	avatar: {
	  height: 43,
	  width: 43,
	  borderRadius: 43 / 2
	},
	body: {
	  flexDirection: "column",
	  justifyContent: "flex-start",
	  alignItems: "stretch"
	},
	card: {
	  marginTop: 10,
	  marginBottom: 10,
	  marginHorizontal: 16,
	  padding: 10,
	  flexDirection: "row",
	  justifyContent: "center",
	  alignItems: "center",
	  backgroundColor: iOSColors.white,
	  borderRadius: 6,
	  ...Platform.select({
		android: { elevation: 16 },
		ios: {
		  shadowColor: "black",
		  shadowOffset: {
			width: 0,
			height: 16
		  },
		  shadowOpacity: 0.2,
		  shadowRadius: 16
		}
	  })
	},

	card2: {
		marginTop: 10,
		marginBottom: 10,
		marginHorizontal: 16,
		padding: 10,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: iOSColors.white,
		borderRadius: 6,
		...Platform.select({
		  android: { elevation: 16 },
		  ios: {
			shadowColor: "black",
			shadowOffset: {
			  width: 0,
			  height: 16
			},
			shadowOpacity: 0.2,
			shadowRadius: 16
		  }
		})
	  },
  

	touchableRoundedImage: {
	  flex: 1,
	  height: undefined,
	  width: undefined,
	  flexDirection: "column",
	  justifyContent: "space-between",
	  alignItems: "flex-start"
	}
  });



export default MakeOfferView;