import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const sizeVariations = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariation = {
    top: 'margin-left',
    bottom: 'margin-bottom',
    left: 'margin-left',
    right:'margin-right',
};


const getVariations = (position, size, theme)=>{
    const property = positionVariation[position];
    const sizeIndex = sizeVariations[size];
    const value = theme.space[sizeIndex];
    return `${property} : ${value}`;
};


const SpaceView = styled(View)`
    ${({variant}) => variant};
`;


export const Space  = ({position, size, children})=>{
    const theme = useTheme();
    const variant = getVariations(position, size, theme);
    return <SpaceView variant={variant}>{children}</SpaceView>;
};

Space.defaultProps = {
    position : 'top',
    size: 'small',
};
