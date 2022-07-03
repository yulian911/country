const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name:any) => BASE_URL + 'name/' + name;

export const filterByCode = (codes:any) => BASE_URL + 'alpha?codes=' + codes.join(',');