import {Offers} from '../types/types.ts';
import {SortType, SortTypeList} from '../const';
import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

const compareOffersPriceLow = (a:Offers, b: Offers) => a.price - b.price;
const compareOffersPriceHigh = (a:Offers, b: Offers) => b.price - a.price;
const compareOffersTopRated = (a:Offers, b: Offers) => b.rating - a.rating;

export const sortOffers = (offers: Offers[], sortingType: SortType): Offers[] => {
  switch (sortingType) {
    case SortTypeList.popular:
      return offers;
    case SortTypeList.priceLow:
      return [...offers].sort(compareOffersPriceLow);
    case SortTypeList.priceHigh:
      return [...offers].sort(compareOffersPriceHigh);
    case SortTypeList.topRated:
      return [...offers].sort(compareOffersTopRated);

    default:
      return offers;
  }
};

export const getOffersByCityName = (offers: Offers[], cityName: string) =>
  offers.filter((offer) => cityName.toLowerCase() === offer.city.name.toLowerCase());

export const defineCityLocation = (offers: Offers[]) => offers[0]?.city.location;

export const getRandomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const redirectToRoute = createAction<AppRoute>('navigation/redirectToRoute');
