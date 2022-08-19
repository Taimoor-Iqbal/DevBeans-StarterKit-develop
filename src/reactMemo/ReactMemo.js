import { Text, View } from 'react-native'
import React, { memo } from 'react'


//it also work like pure function, 6 component make and all are update on single click
// it will stop it to automatically update
// https://www.youtube.com/watch?v=A0mF0Y9-OAk&ab_channel=CodeStepByStep
//it is also called memorization

const ReactMemo = ({ data }) => {
    console.log("Inner component", data)
    return (
        <View>
            <Text style={{ fontSize: 40 }}>React.Memo</Text>

        </View>
    )
}

export default memo(ReactMemo)

