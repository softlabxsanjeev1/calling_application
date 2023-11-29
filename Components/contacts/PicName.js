import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PicName = ({ contact }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.imageText} >{contact.name[0]}</Text>
            </View>
            <Text style={styles.nameText}>{contact.name}</Text>
        </View>
    )
}

export default PicName

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
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
        marginBottom: 6
    },
    imageText: {
        fontSize: 20
    }
})