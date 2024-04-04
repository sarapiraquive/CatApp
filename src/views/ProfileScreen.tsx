import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import React from 'react'

export default function ProfileScreen({navigation}: any) {
  return (
    
                <TouchableOpacity 
                onPress={() => navigation.navigate("Home")}
                >
                    <View>
                        <Text> HOME </Text>
                    </View>
            </TouchableOpacity>
  )
}