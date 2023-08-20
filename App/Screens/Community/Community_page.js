//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  AppTextInput,
  Card,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';
import BackHeader from '../../Component/Header/BackHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import {COLORS} from '../../Constants/Colors';
import {useSelector} from 'react-redux';

// create a component
const Community_page = () => {
  const [Search, setSearch] = useState('');
  const {communitydata} = useSelector(state => state.Community);

  return (
    <Container>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View>
        <BackHeader title={'Community'} />
        <AppTextInput
          value={Search}
          leftIcon={{
            type: 'AntDesign',
            name: 'search1',
            color: 'grey',
          }}
          onChangeText={val => {
            setSearch(val);
          }}
          placeholder="Search here"
          inputContainerStyle={{
            width: '96%',
            height: 50,
            alignSelf: 'center',
            backgroundColor: COLORS.cardColor,
            borderCoor: '#fcfffd',
            borderWidth: 0,
            paddingLeft: 5,
            marginTop: moderateScale(25),
          }}
          mainContainerStyle={{
            marginHorizontal: 10,
          }}
          inputStyle={{
            fontFamily: FONTS.regular,
            fontSize: 14,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginVertical: 15,
            marginLeft: 5,
          }}>
          <Text
            // numberOfLines={2}
            style={{
              ...styles.header_text,
              color: COLORS.primaryFontColor,
            }}>
            {'Medical Science'} :
          </Text>
          <Text
            // numberOfLines={1}
            style={{
              ...styles.header_text,
              color: COLORS.secondaryFontColor,
              fontFamily: FONTS.semibold,
              fontSize: 14,
              // alignItems:'baseline'
            }}>
            {communitydata.length} Members
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}>
          {communitydata.map((item, index) => {
            return (
              <View
                key={index}
                style={{marginBottom: 20, paddingHorizontal: 15}}>
                <View style={styles.card}>
                  <Image source={item.profile_image} style={styles.image} />
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{
                        ...styles.header_text,
                        color: COLORS.primaryFontColor,
                      }}>
                      {item.topic}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: moderateScale(5),
                      }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          ...styles.Profile_name,
                          color: COLORS.secondaryFontColor,
                        }}>
                        {item.topic_details}
                        {'  | '}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'baseline'}}>
                        <Icon
                          name="bookmark"
                          type="FontAwesome5"
                          style={{marginLeft: 5}}
                          size={14}
                          color={COLORS.secondaryFontColor}
                        />
                        <Text
                          style={{
                            ...styles.P_text,
                            color: COLORS.secondaryFontColor,
                          }}>
                          {item.area}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(30),
  },
  like_number: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginLeft: 5,
  },
  like_Icon_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main_image: {
    height: moderateScale(180),
    width: '100',
    marginTop: moderateScale(20),
  },
  dfetails: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(12),
    marginTop: moderateScale(15),
  },
  Profile_name: {
    fontSize: moderateScale(12),
    marginLeft: moderateScale(10),
    // marginTop: moderateScale(3),
    fontFamily: FONTS.semibold,
  },
  P_text: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(10),
  },
  header_text: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter_view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    padding: moderateScale(15),
  },
});

//make this component available to the app
//Abhijit Adak
export default Community_page;
