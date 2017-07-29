import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Audio } from 'expo'
import Please from 'pleasejs'

import snoop from './assets/snoop.gif'
import backgroundImage from './assets/background.gif'

export default class App extends React.Component {
    state = {
        backgroundColor: '#fff'
    }

    componentDidMount() {
        this.playSnoopSound()
        setInterval(this.setRandomBackground, 250)
    }

    componentWillUnmount() {
        clearInterval(this.setRandomBackground)
    }

    setRandomBackground = () => {
        const backgroundColor = Please.make_color()

        this.setState(state => ({
            backgroundColor
        }))
    }

    playSnoopSound() {
        const sound = new Audio.Sound()
        Audio.setIsEnabledAsync(true)
            .then(() => sound.loadAsync(require('./assets/snoop.mp3')))
            .then(() => sound.playAsync())
            .catch(err => console.log(err))
    }

    render() {
        const { backgroundColor } = this.state

        return (
            <View style={[styles.container, { backgroundColor }]}>
                <Image source={backgroundImage} style={styles.background} />
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
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    }
})
