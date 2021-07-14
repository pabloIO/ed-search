import React from 'react';
import { Tabs } from 'native-base';
import SearchList from './SearchList';
import ImageList from './ImageList';

function SearchTab({ navigation, searchArray, imageArray }) {
  console.log(searchArray, imageArray)
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>Todos</Tabs.Tab>
        <Tabs.Tab>Imágenes</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View> 
            <SearchList searchArray={searchArray} navigation={navigation}/>
        </Tabs.View>
        <Tabs.View>
            <ImageList imageArray={imageArray}/>
        </Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
}

export default SearchTab