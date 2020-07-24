import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
    TouchableHighlight,
    StyleSheet,
    View,
} from 'react-native';
import colors from '../../../assets/styles/colors';
import {Ionicons} from '@expo/vector-icons';

export default class NextArrowButton extends Component {
    render(){
        const { disabled, handleNextButton } = this.props;
        const opacityStyle = disabled ? 0.2 : 0.6;
        return(
            <View style={styles.nextButton}>
            <TouchableHighlight style={[{opacity: opacityStyle}, styles.button]}
            onPress={handleNextButton}
            disabled={disabled}>
                <Ionicons name="md-arrow-forward"
                color={colors.COL_RED}
                size={32}
                style={styles.icon}
                />  
            </TouchableHighlight>
            </View>
        );
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: colors.white,
    },
    nextButton:{
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
});