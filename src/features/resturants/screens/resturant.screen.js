import React, {useContext, useState} from 'react';
import {View, FlatList, SafeAreaView, StatusBar} from 'react-native';
import {ActivityIndicator, MD2Colors, Searchbar} from 'react-native-paper';
import {ResturantInfo} from '../components/resturant-info.component';
import styled from 'styled-components/native';

import {RestaurantsContext} from '../../../services/restaurants.context';
import {LocationContext} from '../../../services/location/location.context';

const SearchBarArea = styled(View)`
  padding: 10px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const StyledFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ResturantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  const { search} = useContext(LocationContext);
  console.log(restaurants);
  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </LoadingContainer>
        )}
        <SearchBarArea>
          <Searchbar
            placeholder="Search for a Keyword"
            onChangeText={text => {
              console.log(text);
              setSearchQuery(text);
            }}
            value={searchQuery}
            onSubmitEditing={()=>search(searchQuery)}
          />
        </SearchBarArea>
        <StyledFlatList
          data={restaurants}
          renderItem={({item}) => <ResturantInfo restaurant={item} />}
          keyExtractor={item => item.name}
        />
      </SafeArea>
    </>
  );
};
