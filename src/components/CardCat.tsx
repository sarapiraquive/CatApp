import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Cat } from '../interfaces/AppInterface';

interface Props extends Cat {
    onPress: (textToTranslate: string, idItem: number) => void;
}

export default function CardCat({ id, text, url, onPress }: Props) {
    return (
        <TouchableOpacity
            key={id}
            onPress={() => onPress(text, id)}
            style={{
                flexDirection: 'row', gap: 5,
                marginVertical: 10,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
                elevation: 3, 
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            }}
        >
            <Image
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    marginRight: 10,

                }}
                source={{
                    uri: url
                }}
            />
            <Text
                numberOfLines={2}
                style={{
                    fontSize: 16,
                    color: '#333',
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}