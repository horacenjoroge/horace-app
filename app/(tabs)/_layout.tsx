import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const Layout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
    </>
  )
}

export default Layout

const styles = StyleSheet.create({})
