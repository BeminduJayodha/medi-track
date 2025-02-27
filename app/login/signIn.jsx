import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Constant/Colors'

export default function signIn() {
  return (
    <View style={{
        padding:25
    }}>
      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.SubText}>Welcome Back</Text>
      <Text style={styles.SubText}>You've been missed!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textHeader:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:15
    },
    SubText:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:10,
        color:Colors.GRAY
    },
})