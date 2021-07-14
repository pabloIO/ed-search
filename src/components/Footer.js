import React from 'react'

import {
  Text,
  HStack,
  Center,
  Pressable,
} from 'native-base'

export default function Footer() {
  const [selected, setSelected] = React.useState(1);
  return (
    <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
        opacity={selected === 0 ? 1 : 0.5}
        py={2}
        flex={1}
        onPress={() => setSelected(0)}
        >
        <Center>
            <Text color="white" fontSize={14}>Favorites</Text>
        </Center>
        </Pressable>
        <Pressable
        opacity={selected === 1 ? 1 : 0.5}
        py={2}
        flex={1}
        onPress={() => setSelected(1)}
        >
        <Center>

            <Text color="white" fontSize={14}>Music</Text>
        </Center>
        </Pressable>
        <Pressable
        opacity={selected === 2 ? 1 : 0.6}
        py={2}
        flex={1}
        onPress={() => setSelected(2)}
        >
        <Center>
            <Text color="white" fontSize={14}>Places</Text>
        </Center>
        </Pressable>
        <Pressable
        opacity={selected === 3 ? 1 : 0.5}
        py={2}
        flex={1}
        onPress={() => setSelected(3)}
        >
        <Center>
            <Text color="white" fontSize={14}>News</Text>
        </Center>
        </Pressable>
    </HStack>
  );
}