import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text, View,
  SafeAreaView,
  Image,
  Slider,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useRoute } from '@react-navigation/native'

export default function CardMusic({ navigation, route }) {
  const { music, imgAlbum, author, album } = useRoute().params;
  const [play, setPlay] = useState(true);

  Audio.setAudioModeAsync({
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    shouldDuckAndroid: true,
    staysActiveInBackground: true,
    playThroughEarpieceAndroid: true
  })

  const musica = new Audio.Sound();

  useEffect(() => {

    async function repos() {
      try {
        await musica.loadAsync(music);
      } catch (err) {
        console.log(err)
      }
    }

    repos()

  }, [])


  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

        <View>
          <View style={styles.content}>
            <View style={styles.albumImage}>
              <Image
                source={imgAlbum}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 130
                }} />
            </View>

            <View style={styles.albumDescription}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18
                }}>
                {author}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 3,
                  color: "gray"
                }}>
                {album}
              </Text>
            </View>

            <View>
              <Slider
                style={{
                  width: 300,
                  height: 40,
                  marginTop: 20
                }}
                maximumValue={100}
                minimumValue={0}
                value={30}
                minimumTrackTintColor="#444"
                maximumTrackTintColor="gray" />
            </View>

            <View style={styles.optionsPlay}>
              <TouchableOpacity>
                <View style={styles.prevNext}>
                  <MaterialIcons
                    name="skip-previous"
                    size={20}
                    color="gray"
                    style={{
                      paddingTop: 2,
                      paddingRight: 3
                    }} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                play ? setPlay(false) : setPlay(true)
                play ? musica.playAsync() : musica.pauseAsync();
              }}>
                <View style={styles.playPause}>
                  <MaterialIcons
                    name={play ? "play-arrow" : "pause"}
                    size={50}
                    color="gray"
                    style={{
                      paddingTop: 2,
                      paddingLeft: 1
                    }} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.prevNext}>
                  <MaterialIcons
                    name="skip-next"
                    size={20}
                    color="gray"
                    style={{
                      paddingTop: 2,
                      paddingLeft: 3
                    }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 20
  },

  titleContent: {
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold"
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

  content: {
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center"
  },

  albumImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 210,
    height: 210,
    borderRadius: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 2
  },

  albumDescription: {
    marginTop: 20,
    alignItems: "center"
  },

  optionsPlay: {
    width: 200,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  prevNext: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 2
  },

  playPause: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 2
  }
});
