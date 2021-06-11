import { proxy } from 'valtio';
import { taps } from './dataStub';

import { Beverage } from './types';


export interface TapStore {
    taps: Beverage[];
    filteredTaps: Beverage[];
    cart: Beverage[];
    searchText: string;
    alcoholLimit: number;
}

const store  = proxy<TapStore>({
    taps: [],
    filteredTaps: [],
    cart: [],
    searchText: '',
    alcoholLimit: 10,
})

export const load = () => {
    store.taps = taps;
    store.filteredTaps = filter();
}

export const filter = () => {
    const searchRE = new RegExp(store.searchText, "i");
    console.log('Filtering with text ', store.searchText);
    console.log('before', store.filteredTaps);
    
    return store.taps.filter(({ subjectName, abv }) => subjectName.match(searchRE) && abv < store.alcoholLimit);
    // store.filteredTaps =  filteredTaps;
    // console.log('filteredTaps', filteredTaps);
    // console.log('store', store);
}

export const setSearchText = (text: string) => {
    console.log('setting text to ' , text)
    store.searchText = text;
    console.log('store', store);
    store.filteredTaps = filter();
}

export const setAlcoholLimit = (newLimit: number) => {
    store.alcoholLimit = newLimit;
    store.filteredTaps =filter();
}

export const addToCart = (beverage: Beverage) => {
    store.cart.push(beverage);
}


export default store;