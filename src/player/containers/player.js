import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import Layout from '../components/playerLayout';
import ControlLayout from '../components/controlLayout';
import PlayPause from '../components/playPause';

class Player extends Component {
    
    state = {
        loading: true,
        paused: false,
    }

    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }

    onLoad = () => {
        this.setState({
            loading: false
        })
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }

    render() {
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video 
                        source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style={styles.video}
                        resizeMode='contain'
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator color='red' />
                }
                controls={
                    <ControlLayout>
                        <PlayPause 
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <Text>Progress bar |</Text>
                        <Text>Time Left |</Text>
                        <Text>FullScreen |</Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player;