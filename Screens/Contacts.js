import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../Components/Layout/Layout'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PicName from '../Components/contacts/PicName'
// import Entypo from 'react-native-vector-icons/Entypo'
import { contactsData } from '../Data/ContactsData'

const Contacts = () => {
    return (
        <Layout>
            {/* <View style={styles.container}>
                <View style={styles.dailIcon}>
                    <Entypo name="dial-pad" size={40} />
                </View>
            </View> */}
            <ScrollView style={{ marginBottom: 50, }}>
                <TouchableOpacity style={styles.create}>
                    <AntDesign name="adduser" size={28} style={styles.icon} />
                    <Text style={styles.text}>Create new contact</Text>
                </TouchableOpacity>
                <View style={styles.contacts}>
                    {contactsData?.map((contact) => (
                        <TouchableOpacity>
                            <PicName key={contact.ph_no} contact={contact} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Contacts

const styles = StyleSheet.create({
    create: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 20
    },
    icon: {
        color: "#4c93d2",
    },
    text: {
        fontSize: 20,
        color: "#4c93d2",
        fontWeight: "bold",
        marginLeft: 40
    },
    container: {
        flexDirection: "column",
        flex: 1
    },
    // dailIcon: {
    //     borderRadius: 18,
    //     width: 60,
    //     height: 60,
    //     backgroundColor: '#4b9ce5',
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    contacts: {
        marginLeft: 70
    }
})