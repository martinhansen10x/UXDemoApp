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


const TouchableRoundedImage = ({ style, ...props }) => (
	<TouchableOpacity style={style}>
	  <ImageBackground
		borderRadius={6}
		style={stylelocal.touchableRoundedImage}
		{...props}
	  />
	</TouchableOpacity>
  );
  
  const { width, height } = Dimensions.get('window');

//const Home = () => {

class BookViewingView extends React.Component 
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
		  isDateTimePickerVisible: false
		};
	  }

	  showDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: true });
	  };
	
	  hideDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: false });
	  };
	
	  handleDatePicked = date => {
		console.log("A date has been picked: ", date);
		var hours = date.getHours();
		var minutes = date.getMinutes();
		if (hours < 10){
			hours = '0' + hours.toString();
		}
		if (minutes < 10){
			minutes = '0' + minutes.toString();
		}
		this.setState({time: hours + ':' + minutes, });
		this.hideDateTimePicker();
	  };


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
	  
		  that.setState({
			  todaysDate: year + '/' + month + '/' + date,
			  displayDate: '--/--/--',
			  time: "--:--",
		  });
		
		}


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
            <Text style={iOSUIKit.largeTitleEmphasized}>Book Viewing</Text>
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
              <Text style={stylelocal.viewingsRibbonTitle}>Select a Date</Text>
            </View> 
	   <CalendarDays
  // First day. Default = new Date()
  firstDate={this.state.todaysDate}
  // Last day. You can specify number of days instead
  //lastDate={"2019-09-30"}
  // You can use numberOfDays instead of lastDate. Default = 30
  numberOfDays={30}
  // Initial selected day. Default = firstDate
  //selectedDate={"2019-07-10"}
  // Text to display instead of week day in disables days
  disabledText={'not available'}
  // scrollView width
  width={0}
  // Instead of width you can specify number of days visible Each day box width = 120
  daysInView={3}
  // Only available if width % 120 = 0. Scroll by full width
  paginate
  // Array of disabled dates. Default [] 
  disabledDates={['2019-10-11', '2019-10-12', '2019-10-15']}
  // Function to get selected date in 'YYYY-MM-DD' format
  onDateSelect={date => this.changeSelectedDate(date)}
/>
<View style={stylelocal.card}>
      <Text style={stylelocal.bookedDate}>{this.state.displayDate}</Text> 
	   </View>
	   <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Select a Time</Text>
            </View>
			<TouchableOpacity
          onPress={this.showDateTimePicker}>
			<View style={stylelocal.card}>
      <Text style={stylelocal.bookedDate}>{this.state.time}</Text> 
	   </View>
	   </TouchableOpacity>
	   <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
		  mode={"time"}
		  minuteInterval={15}
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
              <Text style={stylelocal.viewingsRibbonTitle}>Confirm Booking</Text>
            </View>
		  <View style={stylelocal.card2} >
		  <Text style={stylelocal.caption}>REQUESTED TIME:</Text> 
		  <Text style={stylelocal.bookedDate}>{this.state.time}</Text> 
		  <Text style={stylelocal.caption}>REQUESTED DATE:</Text> 
		  <Text style={stylelocal.bookedDate}>{this.state.displayDate}</Text>
	   </View>
	   <Button
      title={`Change Time/Date`}
      onPress={() => {
      this.changeCurrentPage(0);
      }}
      buttonStyle={{ marginTop: 20, marginHorizontal: 16, backgroundColor: colors.COL_CORE_GREEN }}
    />
	   <Button
      title={`Submit Viewing Request`}
      onPress={() => {
      this.changeCurrentPage(2);
      }}
      buttonStyle={{ marginTop: 20, marginHorizontal: 16, backgroundColor: colors.COL_CORE_GREEN }}
    />
			 </View>

			 <View style={[{ backgroundColor: colors.COL_WHITE }, this.state.size]}>
			 <View style={stylelocal.viewingsRibbonTitleBar}>
              <Text style={stylelocal.viewingsRibbonTitle}>Viewing Request Sent</Text>
            </View>
		  <View style={stylelocal.card}>
       <Text>Your viewing request has been submitted to the property provider, you will receive a notification in your homehub when your appointment is confirmed.</Text>
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
	//fontSize: 36,
	paddingTop: 5,
	paddingBottom: 5,
	textAlign: 'center',
	},
	caption: {
		...iOSUIKit.footnoteEmphasizedObject,
		color: iOSColors.gray,
		marginBottom: 5,
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



export default BookViewingView;