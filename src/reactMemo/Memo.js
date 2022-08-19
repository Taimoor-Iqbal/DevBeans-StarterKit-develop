import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import ReactMemo from './ReactMemo'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(1)
    return (
        <View style={{ width: '90%', alignItems: 'center' }}>
            <ReactMemo data={data} />
            <Text>Count: {count}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "80%" }}>
                <Button
                    title='Update Count'
                    onPress={() => setCount(count + 1)} />
                <Button
                    title='Update Item'
                    onPress={() => setData(data * 2)} />
            </View>
        </View>
    )
}

export default Memo

const styles = StyleSheet.create({})