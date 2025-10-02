import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen4 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Top left yellow shape */}
                <View style={styles.topLeftYellowShape} />

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Pasa la voz!</Text>
                    <Text style={styles.description}>
                        Todos los negocios pueden comenzar gratis!
                    </Text>

                    <Image source={require('../../assets/images/pasa_la_voz.png')} style={styles.mainImage} />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingScreen5')}>
                        <Text style={styles.buttonText}>SIGUIENTE</Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom left pink shape */}
                <View style={styles.bottomLeftPinkShape} />
                {/* Bottom left arrow */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/arrow_back.png')} style={styles.backArrow} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    topLeftYellowShape: {
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: height * 0.1, // Adjust based on top shape
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
    },
    mainImage: {
        width: width * 0.8,
        height: height * 0.4,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#FF69B4', // Pink color
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
    backButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        padding: 10,
    },
    backArrow: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default OnboardingScreen4;