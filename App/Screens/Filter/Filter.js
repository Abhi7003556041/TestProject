import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import HomeHeader from '../../Component/Header/HomeHeader';
import FilterHeader from '../../Component/Filter/FilterHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {COLORS} from '../../Constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-basic-elements';
import FilterFooter from '../../Component/Filter/FilterFooter';
import {FONTS} from '../../Constants/Fonts';

const FilterItems = () => {
  const Cat = [
    {
      cat_name: 'Subcategories',
    },
    {
      cat_name: 'Location',
    },
  ];

  const [Sub_Cat, setSub_Cat] = useState([
    {
      sub_cat_name: 'Medical Science',
    },
    {
      sub_cat_name: 'Anatomy',
    },
    {
      sub_cat_name: 'Space Science',
    },
    {
      sub_cat_name: 'Microbiology',
    },
    {
      sub_cat_name: 'Botany',
    },
    {
      sub_cat_name: 'Zoology',
    },
  ]);

  const [Sub_Loc, setSub_Loc] = useState([
    {
      sub_loc_name: 'Kolkata',
    },
    {
      sub_loc_name: 'Chennai',
    },
    {
      sub_loc_name: 'Mumbai',
    },
    {
      sub_loc_name: 'Delhi',
    },
    {
      sub_loc_name: 'Bangalore',
    },
    {
      sub_loc_name: 'Patna',
    },
  ]);

  const [filterArr, setFilterArr] = useState([]);

  const Clear = () => {
    setSub_Loc(s =>
      s.map(res => {
        return {...res, status: false};
      }),
    );
    setSub_Cat(s =>
      s.map(res => {
        return {...res, status: false};
      }),
    );
  };

  const [catName, setCatName] = useState('Subcategories');
  return (
    <View style={styles.container}>
      <FilterHeader func={Clear} />
      <View style={{flexDirection: 'row', flex: 1, paddingHorizontal: 5}}>
        <View
          style={{
            flex: 2,
            backgroundColor: '#f8f9fa',
          }}>
          {Cat.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  setCatName(item.cat_name);
                }}
                style={{
                  height: moderateScale(50),
                  borderBottomColor: '#EBEBEB',
                  borderBottomWidth: 1.5,
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                  // backgroundColor:'#EBEBEB'
                }}>
                <Text
                  style={{
                    color:
                      item.cat_name == catName
                        ? COLORS.primaryThemeColor
                        : '#000',
                    fontSize: 16,
                    // fontWeight: '500',
                    fontFamily: FONTS.bold,
                  }}>
                  {item.cat_name}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View
          style={{
            flex: 2.4,
            backgroundColor: '#fff',
          }}>
          {console.log('filterArrrrr>>>,', filterArr)}
          <ScrollView showsVerticalScrollIndicator={false}>
            {catName == 'Location'
              ? Sub_Loc.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => {
                        setSub_Loc(s =>
                          s.map((res, ind) =>
                            ind == index ? {...res, status: !item.status} : res,
                          ),
                        );
                      }}
                      style={{
                        height: moderateScale(50),
                        borderBottomColor: '#EBEBEB',
                        borderBottomWidth: 1.5,
                        paddingHorizontal: moderateScale(22),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // backgroundColor:'#EBEBEB'
                      }}>
                      <Text
                        style={{
                          color: item?.status
                            ? COLORS.primaryThemeColor
                            : '#8A8A8A',
                          fontSize: 16,

                          fontFamily: FONTS.medium,
                        }}>
                        {item.sub_loc_name}
                      </Text>
                      {item?.status ? (
                        <Icon
                          name="check"
                          type="FontAwesome5"
                          style={{alignSelf: 'center'}}
                          size={13}
                          color={COLORS.primaryThemeColor}
                        />
                      ) : null}
                    </Pressable>
                  );
                })
              : Sub_Cat.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => {
                        setSub_Cat(s =>
                          s.map((res, ind) =>
                            ind == index ? {...res, status: !item.status} : res,
                          ),
                        );
                      }}
                      style={{
                        height: moderateScale(50),
                        borderBottomColor: '#EBEBEB',
                        borderBottomWidth: 1.5,
                        paddingHorizontal: moderateScale(20),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // backgroundColor:'#EBEBEB'
                      }}>
                      <Text
                        style={{
                          color: item?.status
                            ? COLORS.primaryThemeColor
                            : '#8A8A8A',
                          fontSize: 16,
                          fontFamily: FONTS.medium,
                        }}>
                        {item.sub_cat_name}
                      </Text>
                      {item?.status ? (
                        <Icon
                          name="check"
                          type="FontAwesome5"
                          style={{alignSelf: 'center'}}
                          size={13}
                          color={COLORS.primaryThemeColor}
                        />
                      ) : null}
                    </Pressable>
                  );
                })}
          </ScrollView>
        </View>
      </View>
      <FilterFooter />
    </View>
  );
};
//Abhijit Adak
export default FilterItems;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
