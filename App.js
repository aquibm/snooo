import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Audio } from 'expo'

import snoop from './assets/snoop.gif'

export default class App extends React.Component {
    componentDidMount() {
        this.playSnoopSound()
    }

    playSnoopSound() {
        const sound = new Audio.Sound()
        Audio.setIsEnabledAsync(true)
            .then(() => sound.loadAsync(require('./assets/snoop.mp3')))
            .then(() => sound.playAsync())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={snoop} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})
