import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PicNameNo = ({ contact }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.imageText} >{contact.name[0]}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.nameText}>{contact.name}</Text>
                <Text style={styles.day}>↙ Mobile . Sun</Text>
            </View>
            <TouchableOpacity style={styles.callIcon}>
                <Ionicons name='call-outline' size={30} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default PicNameNo

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: "#4c93d2",
        color: "black",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        fontSize: 20,
        marginLeft: 15,
    },
    info: {
        display: "flex",
        flexDirection: "column"
    },
    day: {
        fontSize: 15,
        marginLeft: 10
    },
    imageText: {
        fontSize: 20
    },
    callIcon: {
        alignSelf: "auto",
        flex: 1,
    },
    icon: {
        marginLeft: "auto",
        marginEnd: 10

    }
})