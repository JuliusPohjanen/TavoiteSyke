import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = () => {
    const ageValue = parseInt(age, 10); // Convert age to an integer

    if (isNaN(ageValue)) {
      // Check if age is not a number
      setLowerLimit('');
      setUpperLimit('');
      return;
    }

    const lower = Math.round((220 - ageValue) * 0.65);
    const upper = Math.round((220 - ageValue) * 0.85);

    setLowerLimit(lower.toString());
    setUpperLimit(upper.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
        onBlur={calculateHeartRateLimits} // Calculate on blur (when the user finishes typing)
      />

      <Text style={styles.label}>Heart Rate Limits:</Text>
      <Text>{`Lower: ${lowerLimit}`}</Text>
      <Text>{`Upper: ${upperLimit}`}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
});
