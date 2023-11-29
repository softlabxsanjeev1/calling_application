import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native'

const Footer = () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.menucontainer}
                    onPress={() => navigation.navigate("favourite")}>
                    <FontAwsome name="star-o" style={[styles.icon, route.name === "favourite" && styles.active]} />
                    <Text>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menucontainer}
                    onPress={() => navigation.navigate("recents")}>
                    <Feather name="clock" style={[styles.icon, route.name === "recents" && styles.active]} />
                    <Text >Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menucontainer}
                    onPress={() => navigation.navigate("contacts")}>
                    <FontAwesome5 name="user-friends" style={[styles.icon, route.name === "contacts" && styles.active]} />
                    <Text >Contacts</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        backgroundColor: "#f3f6f4"
    },
    menucontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: 30,
        color: "#000000",
    },
    active: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor: "#cfe2f3",
        borderRadius: 30
    },

})