import AsyncStorage from '@react-native-async-storage/async-storage';

const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage\'deki tüm veriler başarıyla silindi.');
  } catch (error) {
    console.error('AsyncStorage verileri silerken bir hata oluştu:', error);
  }
};

export default clearAllData;
