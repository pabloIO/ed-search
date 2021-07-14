import React from "react"
import { List, Box, Text, ScrollView, VStack, HStack, Divider, Pressable } from "native-base"

export const SearchList = ({ navigation, searchArray }) => {

  if (searchArray.length === 0){
    return <Text>No se encontraron resultados para la búsqueda</Text>
  }

  return (
    <ScrollView>
      <Box w="100%">
        <List space={2} my={2}>
          {
              searchArray.map(e => 
                <Pressable key={e.id} onPress={() => navigation.navigate('WebView', { url: e.url })}>
                  <VStack mx={3} my={2} space={3} divider={<Divider />} w="90%">
                    <HStack justifyContent="space-between">
                      <Text> {e.title} </Text>
                    </HStack>
                  </VStack>
                </Pressable>
              )
          }
        </List>
      </Box>
    </ScrollView>
  )
}

export default SearchList