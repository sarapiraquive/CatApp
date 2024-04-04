import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import React from 'react'

export default function HistoryScreen({navigation}: any) {
  return (
    
                <TouchableOpacity 
                onPress={() => navigation.navigate("Profile")}
                >
                    <View>
                        <Text> PROFILE </Text>
                    </View>
            </TouchableOpacity>
  )
}