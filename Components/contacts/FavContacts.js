import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FavContacts = ({ contact }) => {
    return (
        <View style={styles.conatiner}>
            {/* Image or text conatiner */}
            <Text style={styles.imageContainer}>{contact.name[0]}</Text>
            {/* <TouchableOpacity style={styles.icon}>
                <Ionicons name='call-outline' size={30} />
            </TouchableOpacity> */}
            <View style={styles.conatinerTxt}>
                <Text style={styles.nameTxt}>{contact.name}</Text>
                <Text>Mobile</Text>
            </View>
        </View>
    )
}

export default FavContacts

const styles = StyleSheet.create({
    conatiner: {
        margin: 10,
    },
    imageContainer: {
        height: 70,
        width: 70,
        borderRadius: 70,
        backgroundColor: "#4ea2e2",
        fontSize: 45,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 21
    },
    // icon: {
    //     position: 'absolute',
    //     top: '55%',
    //     borderRadius: 50,
    // },
    nameTxt: {
        fontSize: 22
    },
    conatinerTxt: {
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
})