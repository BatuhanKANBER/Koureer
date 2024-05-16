import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStoredData = (key) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchStoredData = async () => {
            try {
                const storedData = await AsyncStorage.getItem(key);
                if (storedData !== null) {
                    const parsedData = JSON.parse(storedData);
                    setData(parsedData);
                } else {
                    console.log('AsyncStorage\'de saklanan veri bulunamadı.');
                }
            } catch (error) {
                console.error('AsyncStorage veri alırken bir hata oluştu:', error);
            }
        };
        fetchStoredData();
    }, [key]);

    return data;
};
