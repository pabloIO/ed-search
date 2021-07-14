import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function HomeScreen2({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Text>Pantalla de inicio 2</Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen2
  