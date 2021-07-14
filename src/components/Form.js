import React, { useState } from "react"
import {
    Center,
    Select,
    VStack,
    CheckIcon,
    HStack,
    Spinner
} from "native-base"
import { Alert } from "react-native"

export const Form = () => {
  const [ language, setLanguage ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  function changeSelect (item) {
    setLanguage(item)
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
        Alert.alert('PROCESO TERMINADO')
    }, 3000)
  }

  return (
    <Center flex={1}>
         <VStack alignItems="center" space={4}>
            <Select
                selectedValue={language}
                minWidth={200}
                accessibilityLabel="Selecciona tu lenguaje preferido"
                placeholder="Selecciona tu lenguaje preferido"
                onValueChange={(itemValue) => changeSelect(itemValue)}
                _selectedItem={{
                bg: "cyan.600",
                endIcon: <CheckIcon size={4} />,
                }}
            >
                <Select.Item label="JavaScript" value="JavaScript" />
                <Select.Item label="TypeScript" value="ts" />
                <Select.Item label="C" value="c" />
                <Select.Item label="Python" value="py" />
                <Select.Item label="Java" value="java" />
            </Select>
        </VStack>
        <HStack space={2}>
            {
                isLoading && <Spinner accessibilityLabel="Loading posts" />
            }
        </HStack>
    </Center>
  )
}

export default Form