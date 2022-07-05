import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CardProps, DetailsParams, DetailsType } from './types';
import {ALL_COUNTRIES, searchByCountry} from './../../config'


export const fetchCountry = createAsyncThunk<CardProps[]>(
  'country/fetchCountryStatus',
  async () => {

    const { data } = await axios.get<CardProps[]>(ALL_COUNTRIES);

    return data;
  },
);

export const fetchDetails = createAsyncThunk<DetailsType[],DetailsParams>(
  'details/fetchDetailsStatus',
  async (params) => {
    const {name}=params

    const { data } = await axios.get<DetailsType[]>(searchByCountry(name));

    return data;
  },
);