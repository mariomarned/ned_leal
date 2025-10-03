import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/Styles';

const { width, height } = Dimensions.get('window');

const OnboardingScreen5 = () => {
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
                    <Image
                        source={require('../../assets/images/Auth/Logo_NED.png')}
                        style={styles.logoNed}
                    />
                    <Text style={GlobalStyles.title}>DISFRUTA EL PODER DE LA LEALTAD</Text>
                    <Text style={[GlobalStyles.h3, { textAlign: 'center' }]}>
                        ¿Cómo deseas ingresar?
                    </Text>
                     <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 13, marginTop: height * 0.05 }}>
                        <TouchableOpacity style={styles.touchableImageContainer} onPress={() => navigation.navigate('RegisterScreen1')}>
                        <Animated.Image 
                        source={require('../../assets/images/Auth/negocio.png')} 
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
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableImageContainer} onPress={() => navigation.navigate('RegisterScreen1')}>
                        <Animated.Image 
                            source={require('../../assets/images/Auth/consumidor.png')} 
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
                        </TouchableOpacity>
                    </View>
                    </View>

                {/* Bottom left pink shape */}
                <View style={styles.bottomLeftPinkShape} />


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
        right: 0,
        width: width * 0.3,
        height: height * 0.3,
        backgroundColor: '#FFD700', // Yellow color
        borderBottomLeftRadius: width * 0.4,
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
        height: '100%',
        resizeMode: 'contain',
        // marginTop: height * 0.05,
    },

    logoNed: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    touchableImageContainer: {
        width: width * 0.43,
        height: height * 0.23,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OnboardingScreen5;
