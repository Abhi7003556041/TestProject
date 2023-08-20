import { createSlice } from '@reduxjs/toolkit'

export const CommunitySlice = createSlice({
  name: 'community',
  initialState: {
   communitydata:[
    {
      profile_image: require('../../Assets/images/profile.jpg'),
      topic: 'Malina Smith',
      area: 'Australia',

      topic_details: 'Anatomy Student',
    },
    {
      profile_image: require('../../Assets/images/annie-spratt-ORDz1m1-q0I-unsplash.jpg'),
      topic: 'Robert John',
      area: 'Namibia',

      topic_details: 'Anatomy Student',
    },
    {
      profile_image: require('../../Assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg'),
      topic: 'Stephen Smith',
      area: 'Australia',

      topic_details: 'Doctor of Medicine',
    },
    {
      profile_image: require('../../Assets/images/pullup.jpg'),
      topic: 'Peter Perker',
      area: 'Namibia',

      topic_details: 'Anatomy Student',
    },
  ]
  },
  reducers: {
    setCommunity(state, action) {
      state.communitydata = action.payload
      
    },
   
  }
})
export const { setCommunity } = CommunitySlice.actions;
//Abhijit Adak
export default CommunitySlice.reducer;