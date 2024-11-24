import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Linking, Button } from 'react-native';
// import CourseScreen from './ClassScreen';
// import PostScreen from '../components/PostScreen'
import BasicComputerMt from '../components/mcqtest/BasicComputerMt'
const { width: screenWidth } = Dimensions.get('window');
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

// end implementing class section





const CardScreen = () => {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleDropdown = (index) => {
        setExpandedCards((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const cardData = [
        {
            id: 1,
            title: 'Git Commands',
            name: 'course name',
            description: 'This slide view covers the essential Git commands youll use regularly for working with version control. Let me know if you need more details on any specific command!',
            link: 'https://ajaykumardhurwe.github.io/pyqbook/',
            images: [
                require('../assets/images/1.png'),
                require('../assets/images/2.png'),
                require('../assets/images/3.png'),
                require('../assets/images/4.png'),
                require('../assets/images/5.png'),
                require('../assets/images/6.png'),
                require('../assets/images/7.png'),
                require('../assets/images/8.png'),
                require('../assets/images/9.png'),
                require('../assets/images/10.png'),
                require('../assets/images/11.png'),
            ],
            Button: <BasicComputerMt></BasicComputerMt>
           
        },
        {
            id: 2,
            title: 'Mern Stack',
            name: 'course name',
            description: 'A MERN stack course typically focuses on teaching web development using four key technologies: MongoDB, Express.js, React.js, and Node.js. These technologies provide a full-stack solution for building dynamic, database-driven web applications.',
            link: 'https://ajaykumardhurwe.github.io/pyqbook/',
            images: [
                require('../assets/images/mern1.png'),
                require('../assets/images/mern2.png'),
                require('../assets/images/mern3.png'),
            ],
        },
        // Add more card data here...
    //     {
    //       id: 3,
    //       title: 'Project Beta',
    //       description: 'This is the description of Project Beta.',
    //       link: 'https://example.com/beta',
    //       images: [
    //           require('../assets/images/project2-1.jpg'),
    //           require('../assets/images/project2-2.jpg'),
    //           require('../assets/images/project2-3.jpg'),
    //       ],
    //   },



   

    ];
 // start implementing class scre

    const courses = [
        {
            title: 'English Class',
            description: 'An English class can be designed with different focuses depending on whether it is for competitive exams or for improving speaking skills. Here"s an overview for both:',
            thumbnail: require('../assets/images/eng1.png'),
            videos: [
                { thumbnail: require('../assets/images/eng2.png') },
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
        },
        {
            title: '9th to 12th offline classes',
            description: 'Here"s an overview of 9th to 12th offline classes typically offered at Raipur',
            thumbnail: require('../assets/images/class1.png'),
            videos: [
                { thumbnail: require('../assets/images/class2.png') },
                { thumbnail: require('../assets/images/class3.png') },
                { thumbnail: require('../assets/images/class4.png') },
                { thumbnail: require('../assets/images/class5.png') },
            ],
            link: 'https://ajaykumardhurwe.github.io/pyqbook/',
        },
        // Add more courses here...
    ];

 // end implementing class scre


    return (
        <ScrollView style={styles.container}>
       

            {cardData.map((item, index) => (
              
                <View key={item.id} style={styles.card}>
                    {/* Sliding Images using ScrollView */}
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.imageContainer}
                    >
                        {item.images.map((image, imgIndex) => (
                            <Image key={imgIndex} source={image} style={styles.cardImage} />
                        ))}
                    </ScrollView>

                    {/* Touchable Card */}
                    <TouchableOpacity onPress={() => toggleDropdown(index)} style={styles.touchableCard}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>

                    {/* Dropdown Content */}
                    {expandedCards[index] && (
                        <View style={styles.dropdown}>
                            <Text style={styles.description}>{item.description}</Text>
                            <Button
                                title="Learn More"
                                onPress={() => Linking.openURL(item.link)}
                                color="#2980b9"
                            />
                        </View>
                    )}
                </View>
            ))}
         
             {/* <PostScreen ></PostScreen>
 <CourseScreen></CourseScreen> */}
{/* // start implementing class screen */}

{/* {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))} */}

{/* // end implementing class screen */}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
   
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,  // Android shadow
        overflow: 'hidden',
    },
    imageContainer: {
        width: screenWidth,
        height: 200,
    },
    cardImage: {
        width:screenWidth,
        height: 200,
        resizeMode: 'cover',
    },
    touchableCard: {
        padding: 15,
        backgroundColor: '#75e0a0',
        // '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dropdown: {
        padding: 15,
        backgroundColor: '#ecf0f1',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#34495e',
    },
});

export default CardScreen;
