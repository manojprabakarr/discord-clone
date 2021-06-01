import {createSlice} from '@reduxjs/toolkit'


export const Appslice=createSlice({
    name:"app",
    initialState:{
        channelId:null,
        channelname:null,
    },

    reducers:{
        Setchannelinfo:(state,action)=> {
            state.channelId=action.payload;
            state.channelname=action.payload;

        }
    }

    


})

export const  {Setchannelinfo}=Appslice.actions;


export const selectchannelId=(state)=>state.app.channelId;
export const selectchannelname=(state)=>state.app.channelname;



export default Appslice.reducer;