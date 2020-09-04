import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import dados from '../../data';
import { useRoute } from '@react-navigation/native'

const List = ({ navigation, route }) => {      
    const { id } = useRoute().params;

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.iconReply}>
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={40}
                            color="#444"
                            style={{
                                paddingRight: 6
                            }} />
                    </View>
                </TouchableOpacity>

                <View style={styles.titleContent}>
                    <MaterialIcons name="library-music" size={15} />
                    <Text style={styles.title}> Music App </Text>
                </View>
            </View>

            <View style={{ padding: 10, marginTop: 30 }}>
                <FlatList
                    data={dados[id].paths} // <== Data recept
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={{
                                margin: 10,
                                width: 310,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderLeftWidth: 3,
                                borderLeftColor: "gray"
                            }}>
                                <View>
                                    <Image
                                        source={item.imgAlbum}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 130,
                                            marginLeft: 10
                                        }} />
                                </View>
                                <View style={{ width: "60%" }}>
                                    <Text style={{ fontWeight: "bold" }}>{item.author}</Text>
                                    <Text style={{ color: "gray" }}>{item.album}</Text>
                                </View>
                                <View>
                                    <MaterialIcons
                                        name={item.author === "Deice Nascimento" ? "favorite" : "favorite-border"} size={25} color="#377" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 20
    },

    iconReply: {
        width: 70,
        height: 70,
        borderRadius: 130,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 2
    },

    titleContent: {
        flexDirection: "row",
        justifyContent: "center",
    },

    title: {
        fontWeight: "bold"
    },
})

export default List;
