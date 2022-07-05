import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCountry, fetchDetails } from "./asyncActions";
import { CardProps, CountrySliceState, Status } from "./types";

const initialState:CountrySliceState ={
  items:[],
  status:Status.LOADING,
  item:[]
}


const counterSlice =createSlice({
  name:'country',
  initialState,
  reducers:{
      setItems(state ,action:PayloadAction<CardProps[]>){
        state.items = action.payload
      },
     
  },
  extraReducers: (builder) => {
    // country ALL
    builder.addCase(fetchCountry.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    // Details 
    builder.addCase(fetchDetails.pending, (state, action) => {
      state.status = Status.LOADING;
      state.item = [];
    });

    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.item = [];
    });
  },
})
export const { setItems } = counterSlice.actions;

export default counterSlice.reducer;