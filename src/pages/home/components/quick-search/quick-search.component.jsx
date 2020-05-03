import React from 'react';
import {
    SearchContainer,
    TypeLabel,
    SearchButton,
} from './quick-search.styles';

const QuickSearch = () => (
    <SearchContainer>
        <div className="type">
            <TypeLabel>Search By</TypeLabel>
            <SearchButton>Body Style</SearchButton>
            <SearchButton>Make & Model</SearchButton>
        </div>
    </SearchContainer>
);

export default QuickSearch;
