import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Button } from 'react-native'
import Todos from "./Todos";

const UseCallbackHook = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
    return (
        <View style={{ width: '90%', alignItems: 'center' }}>
            <>
                <Todos title="new todo" todos={todos} addTodo={addTodo} />
                <View>
                    <Text>Count: {count}</Text>
                    <Button title="+" onPress={() => increment()} />
                </View>
            </>
        </View>
    )
}

export default UseCallbackHook

const styles = StyleSheet.create({})