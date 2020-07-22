import React from 'react';
import { SavedSearchesPageContainer } from './saved-searches.styles';
import Cover from './components/cover/cover.component';
import SavedSearchesMain from './components/saved-searches-main/saved-searches-main.component';

const SavedSearches = () => {
  return (
    <SavedSearchesPageContainer>
      <Cover />
      <SavedSearchesMain />
    </SavedSearchesPageContainer>
  );
};

export default SavedSearches;
