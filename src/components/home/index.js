import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import data from '../../data';

const Home = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.Containertitle}>
                <View style={styles.titleContent}>
                    <MaterialIcons name="library-music" size={15} />
                    <Text style={styles.titleHeader}> Music App </Text>
                </View>
            </View>
            <View style={{ marginTop: 10, padding: 15 }}>
                <Text style={styles.title}>Full Albums{"  "}</Text>
                <FlatList
                    numColumns={2}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("List", {
                                screen : "list",
                                params : {
                                    id: index,
                                }
                            });
                        }}>
                            <View style={{
                                padding: 4,
                                marginBottom: 5
                            }}>
                                <Image
                                    source={item.image}
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 5
                                    }} />
                                <Text style={{
                                    color: "gray",
                                    paddingTop: 3,
                                    paddingLeft: 3,
                                    fontSize: 16,
                                }}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Containertitle: {
        marginTop: 10,
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    title: {
        fontSize: 15,
        marginBottom: 15,
        paddingLeft: 10,
        color: "gray",
        fontWeight: "bold",
        textTransform: "uppercase"
    },

    titleContent: {
        flexDirection: "row",
        justifyContent: "center",
    },

    titleHeader: {
        fontWeight: "bold"
    },
})

export default Home;
