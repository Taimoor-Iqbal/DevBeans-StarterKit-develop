import React, { useEffect } from 'react';
import { PermissionsAndroid, Text, Alert, StyleSheet, View } from 'react-native';

const Location = () => {
    async function request_location_runtime_permission() {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'ReactNativeCode Location Permission',
                    'message': 'ReactNativeCode App needs access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert("Location Permission Granted.");
            }
            else {
                Alert.alert("Location Permission Not Granted");
            }
        } catch (err) {
            console.warn(err)
        }
    }

    useEffect(async () => {
        await request_location_runtime_permission()
    }, [])

    return (
        <View style={styles.container} >
            <Text>React Native Runtime Permission Request</Text>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
})