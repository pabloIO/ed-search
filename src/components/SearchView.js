import React, { useState } from "react"
import {
  Input,
  VStack,
  Spinner
} from "native-base"
import { TouchableOpacity } from "react-native"

export const SearchView = ({ navigation }) => {

  return (
        <VStack space={8} width="100%">
          <VStack width="100%" space={2}>
            <TouchableOpacity onPress={() => navigation.navigate('Busqueda')}>
            <Input
              pointerEvents="none"
              onTouchStart={()=> navigation.navigate('Busqueda')}
              editable={false}
              my={4}
              placeholder="Buscar..."
              bg="#fff"
              width="100%"
              borderRadius={4}
              py={3}
              px={4}
              fontSize={14}
               _web={{
                _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
                }}
            />
            </TouchableOpacity>
            </VStack>
          </VStack>
  )
}

export default SearchView