import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import axios from 'axios';
import { Cat } from '../interfaces/AppInterface';
import CardCat from '../components/CardCat';

export default function HomeScreen({ navigation, route }: any) {

    const [list, setList] = useState([] as Cat[]);
    const [isLoading, setIsLoading] = useState(false);
    const [numCats, setNumCats] = useState(10);
    const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get("https://meowfacts.herokuapp.com/?count=" + numCats);
            const response2 = await axios.get("https://api.thecatapi.com/v1/images/search?limit=" + numCats);

            if (response.status === 200 && response2.status === 200) {
                const newList = response.data.data.map((item: string, index: number) => ({
                    id: index,
                    text: item,
                    url: response2.data[index].url
                }));
                setList(newList);
            }
        } catch (error) {
        }
    }

    const getTranslation = async (textToTranslate: string) => {
        const baseTranslateURL = "https://swift-translate.p.rapidapi.com/translate";
        const body = {
            text: textToTranslate,
            sourceLang: "en",
            targetLang: "es"
        };
        const headers = {
            "X-RapidAPI-Key": "bd61e28000msh611526b6fc0c620p1155dejsnd52dce060b93",
            "X-RapidAPI-Host": "swift-translate.p.rapidapi.com"
        };
        try {
            const response = await axios.post(baseTranslateURL, body, { headers });
            if (response.status === 200) {
                return response.data.translatedText;
            }
            return ""
        } catch (error) {
        }
        return '';
    };

    const handleCatPress = async (cat: Cat) => {
        console.log("EJECUTADO")
        const translatedText = await getTranslation(cat.text);

        setSelectedCat({ ...cat, translatedText });
        setModalVisible(true);

    };

    const closeModal = () => {
        setModalVisible(false);
    }
    const ModalContent = () => {
        return (
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                <Image
                    style={{ width: 200, height: 200, marginBottom: 10 }}
                    source={{ uri: selectedCat?.url }}
                />
                <Text>Translated Text: {selectedCat?.translatedText}</Text>
                <Button title="Close" onPress={closeModal} />
            </View>
        );
    };

    return (

        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
            >
                <View>
                    <Text> FAVORITOS </Text>
                </View>
            </TouchableOpacity>
            <ScrollView style={{ flex: 1, marginHorizontal: 10 }}>

                {list.map((item, i) => (
                    <CardCat {...item} key={i} onPress={() => navigation.navigate("item")} />
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <ModalContent />
                </View>
            </Modal>
        </View>
    );
}

