import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../Components/Layout/Layout'
import { recetsData } from '../Data/RecentsData'
import Feather from 'react-native-vector-icons/Feather'
import PicNameNo from '../Components/contacts/PicNameNo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Recents = () => {
    return (
        <Layout>
            <ScrollView>
                <View style={styles.recentContainer}>
                    <Text style={styles.text}>Yesterday</Text>
                    <View style={styles.contacts}>
                        {recetsData?.map((contact) => (
                            <TouchableOpacity>
                                <PicNameNo key={contact.ph_no} contact={contact} />
                            </TouchableOpacity>
                        ))}
                        <View style={styles.midsection}>
                            <TouchableOpacity style={styles.btn}>
                                <Feather name="user-plus" style={styles.icon} size={16} />
                                <Text style={styles.txt}> Add contact</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <AntDesign name="exclamationcircleo" style={{ color: "red" }} size={16} />
                                <Text style={styles.txt}> Add contact</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.olderContainer}>
                    <Text style={styles.text}>Older</Text>
                    <View style={styles.contacts}>
                        {recetsData?.map((contact) => (
                            <TouchableOpacity>
                                <PicNameNo key={contact.ph_no} contact={contact} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Recents


const styles = StyleSheet.create({
    recentContainer: {
        height: "40%",
        width: "100%",
        marginTop: 15
    },
    text: {
        marginLeft: 25
    },
    midsection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        paddingRight: 15,
        marginTop: 10,
    },
    icon: {
        color: "blue",
    },
    btn: {
        flexDirection: "row",
        borderColor: "#999999",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    txt: {
        fontSize: 14,
        marginHorizontal: 5,
        color: "#716a6a"
    },

    olderContainer: {
        height: "60%",
        width: "100%",
        marginTop: 56,
        marginBottom: 29
    }

})

