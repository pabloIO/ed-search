import React from "react"
import { ScrollView, Image, Center, VStack } from "native-base"

export const ImageList = ({ imageArray }) => {

  return (
    <ScrollView>
      <VStack space={3}>
        {
            imageArray.map(e => 
              <Center>
                <Image
                    key={e.id}
                    source={{
                        uri: e.url,
                    }}
                    alt="Alternate Text"
                    size={"xl"}
                />
              </Center>
            )
        }
      </VStack>
    </ScrollView>
  )
}

export default ImageList