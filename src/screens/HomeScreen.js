import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Go to Search Screen Now"
      onPress={() => navigation.navigate('Search')}
    />
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>)
}

const styles = StyleSheet.create({});

export default HomeScreen;