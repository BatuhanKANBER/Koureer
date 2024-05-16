import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
    const navigation = useNavigation();

    const handleGoToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleGoToScreen('CompanyHome')}>
                <Text style={styles.link}>Ana Sayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoToScreen('OurApplications')}>
                <Text style={styles.link}>İlanlarım</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoToScreen('CompanyProfile')}>
                <Text style={styles.link}>Profilim</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: '#eee',
    },
    link: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default NavigationBar;
