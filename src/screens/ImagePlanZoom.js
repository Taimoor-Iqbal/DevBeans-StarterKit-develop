import { Image, Dimensions, View, TouchableOpacity, Alert, Text, ScrollView } from 'react-native'
import React from 'react'
import ImageZoom from 'react-native-image-pan-zoom';

const ImagePlanZoom = () => {
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Seat Booked",
            "For One Person",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );
    const arr = [{
        id: 0,
        color: 'green',
        status: 'available',
        resourceType: 'Hot desk',
        xaxis: 2,
        yaxis: 10,
        left: 30,
        top: 50,
    }, {
        id: 1,
        color: 'green',
        status: 'available',
        resourceType: 'Hot desk',
        xaxis: 20,
        yaxis: 30,
        left: 50,
        top: 0,
    }, {}]

    return (
        <ImageZoom cropWidth={Dimensions.get('screen').width}
            cropHeight={Dimensions.get('screen').height}
            imageWidth={500}
            imageHeight={500}

        >
            <>
                <View>
                    <Image style={{ width: 500, height: 500, resizeMode: 'contain' }}
                        source={require('../assets/space.png')} />
                    <TouchableOpacity onPress={createTwoButtonAlert} style={{ backgroundColor: 'green', width: 12, height: 12, borderRadius: 6, position: 'absolute', right: 186, top: 79 }}></TouchableOpacity>
                    <TouchableOpacity onPress={createTwoButtonAlert} style={{ backgroundColor: 'green', width: 12, height: 12, borderRadius: 6, position: 'absolute', right: 205, top: 106 }}></TouchableOpacity>
                    <TouchableOpacity onPress={createTwoButtonAlert} style={{ backgroundColor: 'green', width: 12, height: 12, borderRadius: 6, position: 'absolute', right: 165.2, top: 106 }}></TouchableOpacity>
                    <View>

                    </View>
                </View>
                {
                    arr.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text style={{ fontSize: 30 }}>{item.id}</Text>
                            </View>
                        )
                    })
                }
            </>

        </ImageZoom >
    )
}

export default ImagePlanZoom
