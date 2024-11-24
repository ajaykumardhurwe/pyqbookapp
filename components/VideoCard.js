
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const categories = [
  {
    id: '1',
    title: 'Watch Videos',
    videos: [
      { id: 'v1', source: require('../assets/videos/1.mp4'), title: 'English Class', description: 'English class is coming soon for both competitive and speaking' },
      { id: 'v2', source: require('../assets/videos/2.mp4'), title: 'English Class', description: 'English class is coming soon for both competitive and speaking' },
      { id: 'v3', source: require('../assets/videos/3.mp4'), title: 'English Class', description: 'English class is coming soon for both competitive and speaking' },

    ],
  },
  // {
  //   id: '2',
  //   title: 'Cityscapes',
  //   videos: [
  //     { id: 'v3', source: require('../assets/videos/2.mp4'), title: 'City Lights', description: 'Vibrant city lights at night.' },
  //     { id: 'v4', source: require('../assets/videos/1.mp4'), title: 'Downtown', description: 'Life in the bustling downtown area.' },
  //   ],
  // },
];


export default function App() {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const videoRef = useRef(null);

  const openVideoList = (videos) => {
    setSelectedVideos(videos);
    setCurrentVideoIndex(0);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    videoRef.current?.pauseAsync();
  };

  const playNextVideo = () => {
    if (currentVideoIndex < selectedVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const playPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      videoRef.current.getStatusAsync().then((status) => {
        if (status.isPlaying) {
          videoRef.current.pauseAsync();
        } else {
          videoRef.current.playAsync();
        }
      });
    }
  };

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => openVideoList(item.videos)}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderButton}
        contentContainerStyle={styles.buttonList}
      />

      {isModalVisible && (
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            {/* Top Bar with Title and Description */}
            <View style={styles.topBar}>
              <Text style={styles.title}>
                {selectedVideos[currentVideoIndex].title}
              </Text>
              <Text style={styles.description}>
                {selectedVideos[currentVideoIndex].description}
              </Text>
            </View>

            {/* Video Number Display */}
            <View style={styles.videoNumberContainer}>
              <Text style={styles.videoNumber}>
                Video {currentVideoIndex + 1} / {selectedVideos.length}
              </Text>
            </View>

            <Video
              ref={videoRef}
              source={selectedVideos[currentVideoIndex].source}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
            />
            <View style={styles.controls}>
              <View style={styles.controlButtons}>
                <TouchableOpacity onPress={playPreviousVideo} disabled={currentVideoIndex === 0}>
                  <Ionicons
                    name="play-skip-back-outline"
                    size={40}
                    color={currentVideoIndex === 0 ? '#555' : 'white'}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={togglePlayPause}>
                  <Ionicons name="pause-circle-outline" size={50} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={playNextVideo}
                  disabled={currentVideoIndex === selectedVideos.length - 1}
                >
                  <Ionicons
                    name="play-skip-forward-outline"
                    size={40}
                    color={currentVideoIndex === selectedVideos.length - 1 ? '#555' : 'white'}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  buttonList: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: '#444',
    // padding: 15,
    // borderRadius: 10,
    // marginVertical: 10,
    // alignItems: 'center',

    backgroundColor: '#f20505', // Updated to Dodger Blue
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  //   color: '#fff',
  // fontSize: 18,
  // fontWeight: 'bold',
  // textTransform: 'uppercase',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    fontStyle: 'italic',
  },
  videoNumberContainer: {
    position: 'absolute',
    top: 100,
    left: 20,
    backgroundColor: '#f20524',
    borderRadius: 5,
    padding: 5,
    zIndex: 1,
  },
  videoNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  video: {
    width: width,
    height: height * 0.7,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  controlButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});