import Toast from 'react-native-toast-message';

export const showToast = (type, message) => {
    Toast.show({
        type: type, // 'success' or 'error'
        text1: type === 'success' ? 'Success' : 'Error',
        text2: message,
        position: 'top', // You can also use 'bottom'
    });
};

// Example usage:
// showToast('success', 'Your operation was successful!');
// showToast('error', 'Something went wrong.');
