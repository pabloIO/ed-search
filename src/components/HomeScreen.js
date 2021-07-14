import React, { useEffect, useState } from 'react';
import Search from './Search';
import SearchTab from './SearchTab';
import { Center, ScrollView } from 'native-base'
import SearchView from './SearchView';

function HomeScreen({ navigation, route }) {

    const [searchArray, setSearchArray] = useState([])
    const [imageArray, setImageArray] = useState([])

    useEffect(() => {
      if (route.params?.searchResult && route.params?.imageResult) {
        setSearchArray(route.params.searchResult)
        setImageArray(route.params.imageResult)
      }
    }, [route.params?.searchResult, route.params?.imageResult]);

    return (
      <ScrollView>
        <Center>
          <SearchView navigation={navigation}/>
          <SearchTab 
            imageArray={imageArray}
            searchArray={searchArray} 
            navigation={navigation}/>
        </Center>
      </ScrollView>
    );
}

export default HomeScreen
  