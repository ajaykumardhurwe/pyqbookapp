

import React, { useState } from 'react';
import MCQTest from '../components/MCQTest';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const tabs = [
  { id: '1', title: 'Tab 1', content: <MCQTest></MCQTest>},
  { id: '2', title: 'Tab 2', content: 'This is content for Tab 2' },
  { id: '3', title: 'Tab 3', content: 'This is content for Tab 3' },
  { id: '4', title: 'Tab 4', content: 'This is content for Tab 4' },
  { id: '5', title: 'Tab 5', content: 'This is content for Tab 5' },
];

const HorizontalTabsWithScrollableSections = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // Default to first tab

  return (
    <View 
    style={styles.container}
    >
      {/* Horizontal Tab Buttons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tabButton,
              activeTab === tab.id ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Scrollable Tab Content */}
      <ScrollView 
      // style={styles.container}
      style={styles.contentContainer}
      >
        <Text 
        style={styles.contentText}
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  tabContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f0f0f0',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 15,
    borderWidth: 1,
  },
  activeTab: {
    backgroundColor: '#6200ea',
    borderColor: '#6200ea',
  },
  inactiveTab: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#6200ea',
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    marginTop: 10,
  },
});

export default HorizontalTabsWithScrollableSections;
