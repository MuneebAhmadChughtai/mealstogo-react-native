import React, {useEffect, useState, createContext, useContext} from 'react';
import {restaurantsRequest, restaurantTransform} from './restaurants.service';

import { LocationContext } from './location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const {location} = useContext(LocationContext);
  console.log("loc->>>>",location);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantTransform)
        .then(result => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    console.log("i am logged", location);
    if (location) {
      console.log("restaurant",location);
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
