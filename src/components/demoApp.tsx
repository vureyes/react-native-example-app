import React from 'react'
import { ScrollView, Text, TextInput } from 'react-native'

const App = () => {
  return (
    <ScrollView>
      <Text>Un poco de texto</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'grey',
          borderWidth: 1,
        }}
      />
    </ScrollView>
  )
}