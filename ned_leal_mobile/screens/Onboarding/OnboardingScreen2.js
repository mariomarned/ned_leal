import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen2 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Top right yellow shape */}
                <View style={styles.topRightYellowShape} />

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Tus negocios preferidos!</Text>
                    <Text style={styles.description}>
                        Negocios pequeños y grandes, todos pueden estar en NED y comenzar gratis.
                    </Text>

                    <View style={styles.categoriesContainer}>
                        <View style={styles.categoryRow}>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/restaurante.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>RESTAURANTE</Text>
                            </View>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/farmacia.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>FARMACIA</Text>
                            </View>
                        </View>
                        <View style={styles.categoryRow}>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/abogados.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>ABOGADOS</Text>
                            </View>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/ned_logo_small.png')} style={styles.categoryImage} />
                            </View>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/sastreria.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>SASTRERÍA</Text>
                            </View>
                        </View>
                        <View style={styles.categoryRow}>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/puesto_perros.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>PUESTO PERROS</Text>
                            </View>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/gasolinera.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>GASOLINERA</Text>
                            </View>
                            <View style={styles.categoryItem}>
                                <Image source={require('../../assets/images/tiendita.png')} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>TIENDITA</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingScreen3')}>
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
    categoriesContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    categoryItem: {
        alignItems: 'center',
    },
    categoryImage: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 12,
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

export default OnboardingScreen2;