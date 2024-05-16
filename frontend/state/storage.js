import AsyncStorage from '@react-native-async-storage/async-storage';

export function saveApiResponseToAsyncStorage(apiResponse) {
    try {
        AsyncStorage.setItem("user_details", JSON.stringify(apiResponse))
        console.log('Datalar başarıyla kaydedildi.');
    } catch (error) {
        console.error('Datalar kaydedilirken bir hata oluştu:', error);
    }
};
