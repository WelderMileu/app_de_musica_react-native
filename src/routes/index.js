import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import List from '../components/list_albums';
import Home from '../components/home';
import MusicCard from '../components/music_card';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const MusicCardStack = createStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: "#377",
                    inactiveTintColor: "gray",
                    style: {
                        backgroundColor: "#e6e5e5",
                    },
                    showLabel: true
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="home" size={25} color={color} />
                    }}
                    name="Home"
                    component={HomeScreen}
                />

                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color }) => <Ico color={color} />
                    }}
                    name="Favoritos"
                    component={Favoritos}
                />

                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="list" size={25} color={color} />,
                        tabBarVisible : false
                    }}
                        name="List"
                        component={ListScreen}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export const Ico = props => {
    return (
        <View style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: -30,
            padding: 5,
            backgroundColor: "#fff",
            borderRadius: 130,
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2
            },
            shadowOpacity: 0.35,
            shadowRadius: 130,
            elevation: 5
        }}>
            <MaterialIcons name="favorite" size={50} color={props.color} />
        </View>
    )
}

export const HomeScreen = () => {
    return (
        <HomeStack.Navigator 
            screenOptions={{ 
                headerShown: false, 
            }}>
            <HomeStack.Screen name="home" component={Home} />
        </HomeStack.Navigator>
    )
}

export const ListScreen = () => {
    return (
        <ListStack.Navigator 
            initialRouteName="list"
            screenOptions={{ 
                headerShown: false,
            }}
            
        >
            <ListStack.Screen name="list" component={List} />
            <ListStack.Screen
                name="CardMusic" 
                component={MusicCardScreen}/>
        </ListStack.Navigator>
    )
}

export const MusicCardScreen = () => {
    return (
        <MusicCardStack.Navigator 
            screenOptions={{ 
                headerShown: false,
            }}>
            <MusicCardStack.Screen name="music_card" component={MusicCard} />
        </MusicCardStack.Navigator>
    )
}

export const Favoritos = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialIcons name="favorite" size={100} color="gray" />
            <Text style={{
                marginTop: 10
            }}>Favorites Page</Text>
        </View>
    )
}

export default Route;
