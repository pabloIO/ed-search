import React, { useState, useEffect } from "react"
import {
  Input,
  VStack,
  Button,
  Spinner,
  List,
  Text,
  Heading,
  ScrollView,
  Icon
} from "native-base"
import { Alert } from "react-native"
import { Ionicons, FontAwesome } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const Search = ({ navigation }) => {
  const [ search, setSearch ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  
  const [ searchStorage, setSearchStorage ] = useState([])

  useEffect(() => {
    init()
  }, [])

  async function init(){
    const searches = await AsyncStorage.getItem('@searches')
    if (searches !== null){
      const parse = JSON.parse(searches)
      setSearchStorage(parse)
    }
  }

  function searchText(text){
    setSearch(text)
  }

  async function searchApi(query){
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: {q: query, pageNumber: '1', pageSize: '50', autoCorrect: 'true'},
      headers: {
        'x-rapidapi-key': 'de4ce26224mshd88fbaf7fe855dcp1dc3a6jsn036d1babeef8',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    }
    const optionsImages = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      params: {q: query, pageNumber: '1', pageSize: '30', autoCorrect: 'true'},
      headers: {
        'x-rapidapi-key': 'de4ce26224mshd88fbaf7fe855dcp1dc3a6jsn036d1babeef8',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    }
    saveSearch(query)
    setIsLoading(true)
    try {
      const resWebSearch = await axios.request(options)
      const resImageSearch = await axios.request(optionsImages)
      // console.log(res.data)
      setIsLoading(false)
      navigation.navigate('EDsearch', { searchResult: resWebSearch.data.value, imageResult: resImageSearch.data.value })
    } catch (e) {
      setIsLoading(false)
      Alert.alert('Error', 'No se pudo realizar la búsqueda ahora, intenta más tarde...' )
    }
  }

  async function saveSearch(search){
    try {
      const searches = await AsyncStorage.getItem('@searches')
      if (searches === null){
        const searchArray = [search]
        await AsyncStorage.setItem("@searches", JSON.stringify(searchArray))
      } else {
        const parsed = JSON.parse(searches)
        const searchArray = [...parsed, search]
        await AsyncStorage.setItem("@searches", JSON.stringify(searchArray))
      }
    } catch (e){
      Alert.alert('Error', 'No se pudo guardar su búsqueda')
    }
  }

  async function quickSearch(searchText){
    setSearch(searchText)
    searchApi(searchText)
  }

  return (
      <ScrollView>
        <VStack space={8} width="100%">
          <VStack width="100%" space={2}>
            <Input
              my={4}
              mx={2}
              value={search}
              placeholder="Buscar..."
              bg="#fff"
              width="73%"
              borderRadius={4}
              py={3}
              px={4}
              fontSize={14}
               _web={{
                _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
              }}
              onChangeText={(t) => searchText(t)}
              InputRightElement={ 
                isLoading 
                  ? <Spinner/> 
                  : <Button mx={2} onPress={() => searchApi(search)} size='xs'> Buscar </Button>  
                }
            />
            <Heading size="xs" mx={4}>Búsquedas anteriores</Heading>
            {
              searchStorage.map((e, i) => 
                  e.trim() !== '' &&
                  <List.Item 
                    mx={2}
                    key={i}
                    onPress={() => quickSearch(e)}>
                      <Text>
                        {e}
                      </Text>
                  </List.Item>
              )
            }
            </VStack>
          </VStack>
    </ScrollView>
  )
}

export default Search