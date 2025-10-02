import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen3 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Top right yellow shape */}
                <View style={styles.topRightYellowShape} />

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Queremos que tu experiencia con los negocios sea la mejor</Text>
                    <Text style={styles.description}>
                        Puedes ir al negocio o comprar online (pronto)
                    </Text>

                    <View style={styles.featuresContainer}>
                        <View style={styles.featureRow}>
                            <View style={styles.featureItem}>
                                <Image source={require('../../assets/images/participa_dinamicas.png')} style={styles.featureImage} />
                                <Text style={styles.featureText}>Participas en sus dinámicas</Text>
                            </View>
                            <View style={styles.featureItem}>
                                <Image source={require('../../assets/images/veras_productos.png')} style={styles.featureImage} />
                                <Text style={styles.featureText}>Verás los productos y servicios que ofrecen</Text>
                            </View>
                        </View>
                        <View style={styles.featureRow}>
                            <View style={styles.featureItem}>
                                <Image source={require('../../assets/images/hablar_directamente.png')} style={styles.featureImage} />
                                <Text style={styles.featureText}>Podrás hablar directamente con ellos</Text>
                            </View>
                            <View style={styles.featureItem}>
                                <Image source={require('../../assets/images/ahorraras_dinero.png')} style={styles.featureImage} />
                                <Text style={styles.featureText}>Ahorrarás dinero</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingScreen4')}>
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
    topRightYellowShape: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: width * 0.8,
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
    featuresContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    featureItem: {
        width: '40%',
        alignItems: 'center',
    },
    featureImage: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    featureText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
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

export default OnboardingScreen3;