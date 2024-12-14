import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (value, name) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(name, jsonValue);
    } catch (e) {
        console.log('e', e)
    }
}
export const getData = async (name) => {
    try {
        const jsonValue = await AsyncStorage.getItem(name) || [];
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};