// components/ScoreDisplay.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ScoreDisplay = ({ score, totalQuestions, onRestart }) => (
  <View>
    <Text>Your score is {score} out of {totalQuestions}</Text>
    <Button title="Restart Quiz" onPress={onRestart} />
  </View>
);

export default ScoreDisplay;
