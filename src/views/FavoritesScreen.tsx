import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import React from 'react'

export default function FavoritesScreen({navigation}: any) {
  return (
    
                <TouchableOpacity 
                onPress={() => navigation.navigate("History")}
                >
                    <View>
                        <Text> HISTORY </Text>
                    </View>
            </TouchableOpacity>
  )
}