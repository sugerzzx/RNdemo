import { StyleSheet, Text, View } from 'react-native';
import { FC, useRef } from 'react';
import Video, { VideoRef } from 'react-native-video';

interface VideoScreenProps {

}

const VideoScreen: FC<VideoScreenProps> = ({ }) => {
  const videoRef = useRef<VideoRef>(null);
  const source = { uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4' };
  return (
    <View style={{
      height:
        '100%', width: '100%'
    }}>
      <Video
        source={source}
        ref={videoRef}
        style={styles.backgroundVideo}
        controls={true}></Video>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1, borderColor: 'black', borderWidth: 1
  }

});