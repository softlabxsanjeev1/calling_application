import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../Components/Layout/Layout'
import FavContacts from '../Components/contacts/FavContacts'
import { favouritesContacts } from '../Data/FavouritesData'
import { contactsData } from '../Data/ContactsData'
import PicNameNo from '../Components/contacts/PicNameNo'

const Favourite = () => {
    return (
        <Layout>
            <View style={styles.section1}>
                <View style={styles.txt}>
                    <Text>Favourite</Text>
                    {/* <TouchableOpacity style={styles.addtxt} >
                        <Text >Add</Text>
                    </TouchableOpacity> */}
                </View>
                <ScrollView horizontal scrollIndicatorInsets={false}>
                    {
                        favouritesContacts?.map((contact) => (
                            <FavContacts key={contact.ph_no} contact={contact} />
                        ))
                    }
                </ScrollView>

            </View>
            <View style={styles.section2}>
                <Text style={styles.txt}>Frequents</Text>
                <ScrollView>
                    {
                        contactsData?.map((contact) => (
                            <PicNameNo key={contact.ph_no} contact={contact} />
                        ))
                    }
                </ScrollView>
            </View>

        </Layout>
    )
}

export default Favourite

const styles = StyleSheet.create({
    section1: {
        marginVertical: 5
    },
    section2: {
        marginTop: 15
    },
    txt: {
        display: "flex",
        flexDirection: "row",
        marginStart: 18,
        marginVertical: 15
    },
    // addtxt: {
    //     color: "#4ea2e2",
    //     alignSelf: "auto",
    // },
})