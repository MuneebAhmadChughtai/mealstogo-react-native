import React, {useState, useEffect, createContext} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('antwerp');

  const onSearch = (searchKeyword = 'antwerp') => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    console.log("search keyword",searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then( locationTransform )
      .then(result => {
        // console.log("result", result);
        setIsLoading(false);
        setLocation(result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  useEffect( ()=>{
    console.log("location=>",location);
  });

  return (
    <LocationContext.Provider
      value={{
        location,
        error,
        isLoading,
        search: onSearch,
        keyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
