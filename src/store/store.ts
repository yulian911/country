import { configureStore } from "@reduxjs/toolkit"
import country from './country/countrySlice'
import { useDispatch } from 'react-redux';


export const store =configureStore({
  reducer:{
    country,
  }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();