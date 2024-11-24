import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import VideoCard from './VideoCard'
// import Videos from './Videos';
import BasicComputerMt from '../components/mcqtest/BasicComputerMt'
import { Button } from 'react-native-paper';
const CourseCard = ({ course }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.card}>
            {/* Course Thumbnail */}
            <Image source={course.thumbnail} style={styles.thumbnail} />

            {/* Title */}
            <Text style={styles.title}>{course.title}</Text>

            {/* Description */}
            <Text style={styles.description}>{course.description}</Text>

<VideoCard></VideoCard>

            {/* Video List */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.videoList}>
              
                {course.videos.map((video, index) => (
                    <Image key={index} source={video.thumbnail} style={styles.videoThumbnail} />
                ))}
            </ScrollView>

            {/* Dropdown View */}
            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>{expanded ? 'Hide Details' : 'Show Details'}</Text>
            </TouchableOpacity>

            {expanded && (
                <View style={styles.dropdown}>
                    <Text style={styles.courseLinkTitle}>Enroll in this course:</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(course.link)}>
                        <Text style={styles.courseLink}>Click here to enroll</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const CourseScreen = () => {
    const courses = [
        {
            title: 'English Class',
            description: 'An English class can be designed with different focuses depending on whether it is for competitive exams or for improving speaking skills. Here"s an overview for both:',
            thumbnail: require('../assets/images/eng1.png'),
            videos: [
                { thumbnail:
                     require('../assets/images/eng2.png')
                },
                { thumbnail: require('../assets/images/eng3.png') },
                { thumbnail: require('../assets/images/eng4.png') },
                { thumbnail: require('../assets/images/eng5.png') },
                { thumbnail: require('../assets/images/eng6.png') },
                { thumbnail: require('../assets/images/eng7.png') },
                { thumbnail: require('../assets/images/eng8.png') },
                { thumbnail: require('../assets/images/eng9.png') },
                { thumbnail: require('../assets/images/eng10.png') },
                { thumbnail: require('../assets/images/eng11.png') },
                // { thumbnail: require('../assets/images/eng1.png') },
            ],
        
            link: 'https://ajaykumardhurwe.github.io/pyqbook/',
            // video:<VideoCard></VideoCard>
        },


        // {
        //     title: '9th to 12th offline classes',
        //     description: 'Here"s an overview of 9th to 12th offline classes typically offered at Raipur',
        //     thumbnail: require('../assets/images/class1.png'),
        //     videos: [
        //         { thumbnail: require('../assets/images/class2.png') },
        //         { thumbnail: require('../assets/images/class3.png') },
        //         { thumbnail: require('../assets/images/class4.png') },
        //         { thumbnail: require('../assets/images/class5.png') },
        //     ],
        //     link: 'https://example.com/advanced-react-native',
        // },

        
        // Add more courses here...


    ];

    return (
        <ScrollView style={styles.container}>
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,  // Shadow for Android
    },
    thumbnail: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    video: {
backgroundColor: '#000',
color: '#555'
    },
    videoList: {
        marginBottom: 10,
    },
    videoThumbnail: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    dropdownButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    dropdown: {
        backgroundColor: '#ecf0f1',
        padding: 10,
        borderRadius: 5,
    },
    courseLinkTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    courseLink: {
        color: '#3498db',
        textDecorationLine: 'underline',
    },
});

export default CourseScreen;
