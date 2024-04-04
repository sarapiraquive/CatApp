import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import React from 'react'
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({navigation}: any) {

  const {state}= React.useContext(AuthContext);

  return (
    
                <TouchableOpacity 
                onPress={() => navigation.navigate("Login")}
                >
                    <View>
                        <Text> IR AL LOGIN </Text>
                    </View>
            </TouchableOpacity>
  )
}