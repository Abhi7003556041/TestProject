import { createSlice } from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
  name: 'home',
  initialState: {
   homedata:[
    {
        id:1,
        profile_image: require('../../Assets/images/profile.jpg'),
        profile_name: 'Malina Smith',
        area: 'Australia',
        time: '7 min ago',
        topic_details: 'All details here, All details here, All details here,',
        post_image: require('../../Assets/images/history.jpg'),
        like:false,
        likecount:120,
        commentcount:80,
         description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

        },
    {
        id:2,
        profile_image: require('../../Assets/images/annie-spratt-ORDz1m1-q0I-unsplash.jpg'),
        profile_name: 'Stephen Smith',
        area: 'Australia',
        time: '1 day ago',
        topic_details: 'All details here, All details here, All details here,',
        // post_image: require('../../Assets/images/scholar1.jpeg'),
        like:false,
        likecount:115,
        commentcount:89,
        description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        
    },
    {
        id:3,
        profile_image: require('../../Assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg'),
        profile_name: 'Stephen Smith',
        area: 'Australia',
        time: '2 days ago',
        topic_details: 'All details here, All details here, All details here,',
        post_image: require('../../Assets/images/math.jpg'),
        like:false,
        likecount:105,
        commentcount:78,
        description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    }
],
refress: false,
  },
  reducers: {
    setHomedata(state, action) {
      state.homedata = action.payload
      
    },
    updateLike(state,action){
      let index = state.homedata.findIndex((it)=>it.id == action.payload)
      if(index>=0){
        state.homedata[index].like = !state.homedata[index].like
        if(state.homedata[index].like){
          state.homedata[index].likecount += 1
        }
        else{
          state.homedata[index].likecount -= 1
        }
        state.refress = !state.refress;
      }
     
    }
   
  }
})
export const { setHomedata, updateLike } = HomeSlice.actions;
//Abhijit Adak
export default HomeSlice.reducer;