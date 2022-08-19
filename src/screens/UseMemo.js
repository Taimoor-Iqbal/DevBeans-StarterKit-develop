import React, { useState, useMemo } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


//its use for the optimization of the App and increase speed

// https://www.youtube.com/watch?v=yM2q_joUmNQ&ab_channel=CodeStepByStep
const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(20)

    const memoHook = useMemo(function multiCount() {
        console.log("multiCount called")
        return (
            count * 5
        )
    }, [count])

    return (
        <View style={{ width: '90%', alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>Usememo Hooks</Text>
            <Text>Count: {count}</Text>
            <Text>Item: {item}</Text>
            <Text>MultiCount: {memoHook}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "80%" }}>
                <Button
                    title='Update Count'
                    onPress={() => setCount(count + 1)} />
                <Button
                    title='Update Item'
                    onPress={() => setItem(item * 10)} />
            </View>

        </View>
    )
}

export default UseMemo

const styles = StyleSheet.create({})