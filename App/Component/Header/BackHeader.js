//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Pressable, Image, StatusBar as RNStatusBar } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import { AppBar, Icon, useTheme, StatusBar, Card } from 'react-native-basic-elements';
import { COLORS } from '../../Constants/Colors';


const BackHeader = ({ title, icon }) => {
    
    return (
        <Card style={styles.Card}>

            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle='dark-content'
            />

            {/* <View style={{ height: moderateScale(15) }} /> */}

            <View style={styles.arrow_view}>

                {
                    title ?

                        <View style={{
                            marginLeft: moderateScale(10),
                            alignItems: 'center',
                        }}>

                            <Text style={{
                                ...styles.team_name_txt,
                                color: COLORS.primaryFontColor
                            }}>{title}</Text>

                        </View>

                        :
                        null
                }

            </View>


        </Card>


    );
};

// define your styles
const styles = StyleSheet.create({
    team_name_txt: {
        fontWeight:'600',
        fontSize: moderateScale(17),
        alignSelf: 'center',
        paddingBottom: moderateScale(5)
    },
    Card: {
        paddingTop: moderateScale(35),
        paddingBottom: moderateScale(5),
        borderBottomRightRadius: 2,
        borderBottomLeftRadius: 2,
        elevation:3,
        borderWidth:0.9,
        borderColor:'#EBEBEB'
    },
    arrow_view: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(5),
        alignItems: 'center',
    }

});

//make this component available to the app
export default BackHeader;
