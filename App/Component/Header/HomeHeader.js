//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Pressable, Image, StatusBar as RNStatusBar } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import { AppBar, Icon, useTheme, StatusBar, Card } from 'react-native-basic-elements';
import { useSelector } from 'react-redux';
import { COLORS } from '../../Constants/Colors';

const HomeHeader = ({ title, icon }) => {
   
    const {userData} = useSelector((state)=>state.User)

    return (
        <Card style={{
            paddingBottom: moderateScale(10),
            borderBottomRightRadius: 2,
        borderBottomLeftRadius: 2,
        elevation:3,
        borderWidth:0.9,
        borderColor:'#EBEBEB'
        }}>

            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle='dark-content'
            />
            <View style={{ height: moderateScale(30) }} />

            <View style={{
                flexDirection: 'row',
                marginLeft: moderateScale(10),
                alignItems: 'center',
            }}>



                <TouchableOpacity
                    onPress={() => NavigationService.openDrawer()}
                    style={{alignSelf:'flex-end'}}
                >
                    <Icon
                        name='bars'
                        type='FontAwesome'
                        size={25}
                    />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: (10),
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        ...styles.welcome_txt,
                        color: COLORS.primaryFontColor
                    }}>Welcome</Text>

                    <View style={{
                        flexDirection:'row'
                    }}>
                        <Icon
                            name='search'
                            type='Feather'
                            style={{marginRight:moderateScale(10)}}
                        size={22}

                        />
                        <Icon
                       name='bell'
                       type='Feather'
                       style={{marginRight:moderateScale(10)}}
                       size={22}

                        />
                         <Icon
                        name='filter'
                        type='Ionicons'
                        size={23}
                        onPress={()=>NavigationService.navigate('FilterItems')}
                        />
                    </View>

                </View>

            </View>


        </Card>


    );
};

// define your styles
const styles = StyleSheet.create({
    team_name_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(15),
        textAlign: 'center',
    },
    welcome_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(15),
        alignSelf: 'center'
    },
    user_name: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(16),
        alignSelf: 'center'
    }
});

//make this component available to the app
export default HomeHeader;