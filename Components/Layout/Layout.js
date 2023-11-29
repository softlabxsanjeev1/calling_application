import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { StatusBar } from 'expo-status-bar'

const Layout = ({ children }) => {
    return (
        <>
            <StatusBar backgroundColor="#61dafb" />
            <View style={styles.container} ></View>
            <Header />
            <View>
                {children}
            </View>
            <View style={styles.footer} >
                <Footer />
            </View>
        </>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        height: 30
    },
    footer: {
        display: "flex",
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        zIndex: 100,
        position: "absolute",
        bottom: 0,
        // padding: 10,
    }
})