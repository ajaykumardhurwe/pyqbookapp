import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Question = ({ questionData, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
    onAnswer(option === questionData.correctOption);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questionData.question}</Text>
      {questionData.options.map((option, index) => {
        const isSelected = selectedOption === option;
        const isCorrect = questionData.correctOption === option;
        const showIcon = showExplanation && isSelected;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              isSelected && (isCorrect ? styles.correctOptionButton : styles.incorrectOptionButton),
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={showExplanation}
          >
            <Text style={styles.optionText}>{option}</Text>
            {showIcon && (
              <FontAwesome
                name={isCorrect ? 'check' : 'times'}
                size={20}
                color={isCorrect ? 'green' : 'red'}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        );
      })}
      {showExplanation && (
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>Explanation:</Text>
          <Text style={styles.explanationText}>{questionData.explanation}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 1,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  correctOptionButton: {
    backgroundColor: '#d1e7dd',
  },
  incorrectOptionButton: {
    backgroundColor: '#f8d7da',
  },
  optionText: {
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  explanationContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  explanationText: {
    fontSize: 14,
  },
});

export default Question;
