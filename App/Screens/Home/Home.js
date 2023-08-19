import React, {Component, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';
import BackHeader from '../../Component/Header/BackHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';
import HomeHeader from '../../Component/Header/HomeHeader';
import {COLORS} from '../../Constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {updateLike} from '../../Redux/reducer/Home';

// create a component
const Home = () => {
  const {homedata} = useSelector(state => state.Home);
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const [postId, setpostId] = useState('');
  const dispatch = useDispatch();
  const toggleNumberOfLines = id => {
    setTextShown(!textShown);
    setpostId(id);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 2 ? true : false);
    // console.log('dfdfdfdf0',e.nativeEvent);
  }, []);
  return (
    <Container>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <HomeHeader />
      {console.log('homeddadada', homedata)}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 5}}>
        {homedata.map((item, index) => {
          return (
            <Card key={index} style={{marginBottom: 20, paddingHorizontal: 15}}>
              <View style={styles.card}>
                <Image source={item.profile_image} style={styles.image} />
                <View style={{}}>
                  <Text
                    numberOfLines={2}
                    style={{
                      ...styles.header_text,
                      color: COLORS.primaryFontColor,
                    }}>
                    {item.profile_name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{
                        ...styles.Profile_name,
                        color: COLORS.secondaryFontColor,
                      }}>
                      {item.time}
                      {'  | '}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'baseline',
                        marginTop: moderateScale(5),
                      }}>
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
              <Text
                style={{
                  ...styles.dfetails,
                  color: COLORS.primaryFontColor,
                }}>
                {item.topic_details}
              </Text>
              <Text
                style={{
                  color: COLORS.secondaryFontColor,
                  fontSize: 12,
                  fontFamily: FONTS.medium,
                  marginVertical: 5,
                  lineHeight: 20,
                  // marginLeft: 10,
                }}
                onTextLayout={onTextLayout}
                numberOfLines={postId == item.id && textShown ? 4 : 2}>
                {item.description}
              </Text>
              {lengthMore ? (
                <Text
                  onPress={() => toggleNumberOfLines(item.id)}
                  style={{
                    color: COLORS.primaryThemeColor,
                    fontSize: 10,
                    fontFamily: FONTS.medium,
                    textAlign: 'right',
                    marginRight: '5%',
                    marginBottom: 3,
                  }}>
                  {postId == item.id && textShown
                    ? '..Read Less'
                    : '..Read More'}
                </Text>
              ) : null}
              {item.post_image ? (
                <Image source={item.post_image} style={styles.main_image} />
              ) : null}
              <View style={styles.like_Icon_view}>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Icon
                    onPress={() => {
                      dispatch(updateLike(item.id));
                      console.log('object');
                    }}
                    style={{marginLeft: 5}}
                    type="AntDesign"
                    name={item.like ? 'like1' : 'like2'}
                    size={22}
                  />
                  <Text style={styles.like_number}>{item.likecount}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Icon
                    style={{marginLeft: 20}}
                    type="Feather"
                    name="message-square"
                    size={22}
                  />
                  <Text style={styles.like_number}>
                    {item.commentcount} comments
                  </Text>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
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
    marginTop: moderateScale(15),
    marginHorizontal: moderateScale(5),
    marginBottom: moderateScale(5),
  },
  main_image: {
    height: moderateScale(180),
    width: '100',
    marginTop: moderateScale(15),
    borderRadius: 5,
  },
  dfetails: {
    fontFamily: FONTS.semibold,
    fontSize: moderateScale(12),
    marginTop: moderateScale(15),
  },
  Profile_name: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  P_text: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(10),
  },
  header_text: {
    // fontFamily: FONTS.bold,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
    width: '96%',
    fontFamily: FONTS.semibold,
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
//Abhijit Adak
//make this component available to the app
export default Home;
