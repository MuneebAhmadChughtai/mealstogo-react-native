import React from 'react';
import {Text, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Space} from '../../../components/space.component';

import {
  Title,
  Address,
  ResturantCard,
  ResturantCardCover,
  Rating,
  Section,
  SectionEnd,
} from './resturant-info.component.style';

export const ResturantInfo = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = true,
  } = restaurant;

  const ratingIcons = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingIcons.map(() => (
            <SvgXml width="20" height="20" xml={star} />
          ))}
        </Rating>
        <SectionEnd>
          {isCloseTemporarily && (
            <Text variant="label" style={{color: 'red'}}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <Space position="top" size="small">
            {isOpenNow && <SvgXml height={20} width={20} xml={open} />}
          </Space>
          <Space position="top" size="large">
            <Image source={{uri: icon}} style={{width: 20, height: 20}} />
          </Space>
        </SectionEnd>
      </Section>

      <Address>{address}</Address>
    </ResturantCard>
  );
};
