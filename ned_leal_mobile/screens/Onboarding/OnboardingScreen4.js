import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/Styles';

const { width, height } = Dimensions.get('window');

const OnboardingScreen4 = () => {
    const navigation = useNavigation();
    const bounceAnim = useRef(new Animated.Value(0)).current; // Initial value for animation

    useEffect(() => {
        Animated.spring(
            bounceAnim,
            {
                toValue: 1,
                friction: 3,
                tension: 40,
                useNativeDriver: true,
            }
        ).start();
    }, [bounceAnim]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Top yellow background shape */}
                <View style={styles.topYellowShape} />

                <View style={styles.contentContainer}>
                    <Text style={GlobalStyles.title}>Gana con cada dinámica y sin complique!</Text>
                    <Text style={[GlobalStyles.h3, { textAlign: 'center' }]}>
                        Nunca fue tan fácil ganar recompensas de los negocios, no mas formularios y procesos complicados.
                    </Text>
                    <Animated.Image 
                        source={require('../../assets/images/Auth/welcome1_image.png')} 
                        style={[
                            styles.welcomeImage,
                            { 
                                transform: [
                                    {
                                        scale: bounceAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.5, 1] // Start smaller and bounce to normal size
                                        })
                                    },
                                    {
                                        translateY: bounceAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [height * 0.2, 0] // Start 20% down and bounce up
                                        })
                                    }
                                ]
                            }
                        ]}
                    />
                </View>

                {/* Bottom left pink shape */}
                <View style={styles.bottomLeftPinkShape} />

                {/* Button positioned at bottom right */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingScreen5')}>
                        <Text style={styles.buttonText}>SIGUIENTE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: height * 0.05, // Adjust based on status bar height
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    topYellowShape: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width * 0.8,
        height: height * 0.3,
        backgroundColor: '#FFD700', // Yellow color
        borderBottomRightRadius: width * 0.4,
    },
    bottomLeftPinkShape: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width * 0.4,
        height: height * 0.2,
        backgroundColor: '#FF69B4', // Pink color
        borderTopRightRadius: width * 0.2,
        opacity: 0.7,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10, // Adjust based on top shape
    },
    featuresContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
        alignItems: 'flex-end'
    },
    welcomeImage: {
        width: '100%',
        height: height * 0.4,
        resizeMode: 'contain',
        marginTop: height * 0.05,
    },
    button: {
        backgroundColor: '#C4227D', // Pink color
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
});

export default OnboardingScreen4;
