import {locations} from './location.mock';
import camelize from 'camelize';

export const locationRequest = (searchTerm)=> {
  console.log(searchTerm);
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('Not found!!!');
    }
    resolve(locationMock);
  });
};

export const locationTransform = result => {
  const formattedResponse = camelize(result);
  const {geometry = {}} = formattedResponse.results[0];
  const {lat, lng} = geometry.location;
  return {lat, lng};
};
