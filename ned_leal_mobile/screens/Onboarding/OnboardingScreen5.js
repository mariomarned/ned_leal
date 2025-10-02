import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen5 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Top center ned logo */}
                <View style={styles.topCenterNedLogoContainer}>
                    <Image source={require('../../assets/images/ned_logo_large.png')} style={styles.nedLogo} />
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>DISFRUTA EL PODER DE LA LEALTAD</Text>
                    <Text style={styles.description}>
                        ¿Cómo deseas ingresar?
                    </Text>

                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('NEGOCIO selected')}>
                            <Image source={require('../../assets/images/negocio_icon.png')} style={styles.optionIcon} />
                            <Text style={styles.optionText}>NEGOCIO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => console.log('CONSUMIDOR selected')}>
                            <Image source={require('../../assets/images/consumidor_icon.png')} style={styles.optionIcon} />
                            <Text style={styles.optionText}>CONSUMIDOR</Text>
                        </TouchableOpacity>
                    </View>
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
    topCenterNedLogoContainer: {
        position: 'absolute',
        top: height * 0.1,
        alignSelf: 'center',
        zIndex: 1,
    },
    nedLogo: {
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: 'contain',
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
        paddingTop: height * 0.3, // Adjust based on logo position
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
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    optionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        backgroundColor: '#FFD700', // Yellow color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionIcon: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    optionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
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

export default OnboardingScreen5;