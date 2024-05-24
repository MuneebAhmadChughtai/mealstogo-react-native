import { mockImages, mocks } from './mock';
import camelize from 'camelize';
export const restaurantsRequest = (location = '51.219448,4.402464') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    console.log("mock", location)
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({results = []})=>{
  const mappedResults = results.map((restaurant)=>{
    restaurant.photos = restaurant.photos.map((p)=>{
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {...restaurant,
      address: restaurant.vicinity,
      isOpenNow : restaurant.opening_hours && restaurant.opening_hours.open_now,
      isCloseTemporarily : restaurant.business_status && restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};
