import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import tw from 'twrnc'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome name='search' size={22} style={styles.icon} />
            </TouchableOpacity>
            <TextInput>
                <Text style={styles.text}> Search contacts & places </Text>
            </TextInput>
            <TouchableOpacity>
                <MaterialIcons name='keyboard-voice' size={25} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo name='dots-three-vertical' size={20} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: "7%",
        backgroundColor: "#eaeaff",
        // backgroundColor: "#6fa8dc",
        marginTop: 30,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        color: "#62696f",
    },
    text: {
        color: "#62696f",
        fontSize: 20,
    },
})