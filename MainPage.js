import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  Dimensions,
  SafeAreaView,
  Animated,
  Share ,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import songs from './model/songDatas';
import Icons from 'react-native-vector-icons/FontAwesome';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialcommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Slider from '@react-native-community/slider';


const MainPage = () => {

  const progress = useProgress();

  const [showView1, setShowView1] = useState(true);
  const [showView2, setShowView2] = useState(false);
  const [showView3, setShowView3] = useState(false);
  const [showView4, setShowView4] = useState(false);

  const {width, height} = Dimensions.get('window');

  const toggleViews1 = () => {
    setShowView1(true);
    setShowView2(false);
    setShowView3(false);
    setShowView4(false);
  };

  const toggleViews2 = () => {
    setShowView1(false);
    setShowView2(true);
    setShowView3(false);
    setShowView4(false);
  };

  const toggleViews3 = () => {
    setShowView1(false);
    setShowView2(false);
    setShowView3(true);
    setShowView4(false);
  };

  const toggleViews4 = () => {
    setShowView1(false);
    setShowView2(false);
    setShowView3(false);
    setShowView4(true);
  };
  const playbackState = usePlaybackState();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);

  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackTitle, setTrackTitle] = useState();


  const songSlider = useRef(null);

  const skipTo = async (trackId) => {
    await TrackPlayer.skip(trackId);
    await TrackPlayer.play(); 
  }

  useEffect(() => {
    setupPlayer()
    scrollX.addListener(({ value }) => {
      const index = Math.round( value / width );
      skipTo(index);
      setSongIndex(index);
    });
    return() => {
      scrollX.removeAllListeners();
    }
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if( event.type === Event.PlaybackTrackChanged && event.nextTrack != null ){
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist } = track;
      setTrackTitle(title);
      setTrackArtwork(artwork);
      setTrackArtist(artist);
    }
  });

  const skipNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  }

  const skipPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  }

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.artworkWrapper}>
          <Image source={item.artwork} style={styles.artworkImg} />
        </View>
      </Animated.View>
    );
  };
  const setupPlayer = async() => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities:[
        Capability.Play,
        Capability.Pause, 
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ]
    })
    await TrackPlayer.add(songs);
  }
  
  const togglePlayBack = async(playbackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if( currentTrack !== null ) {
      const playbackState = await TrackPlayer.getState();
      if(playbackState === State.Paused ) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  } 

  const [repeatMode, setRepeatMode] = useState('off');

  const repeatIcon = () => {
    if( repeatMode == 'off' ) {
      return 'repeat-off'
    }
    if( repeatMode == 'track' ) {
      return 'repeat-once'
    }
    if( repeatMode == 'repeat' ) {
      return 'repeat'
    }
  }

  const changeRepeatMode = () => {
    if(repeatMode == 'off'){
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }
    if(repeatMode == 'track' ){
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }
    if(repeatMode == 'repeat' ){
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  }

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this cool app!',
        url: 'https://example.com/app',
        title: 'MusicPro',
      });

      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share was dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const [isClicked, setIsClicked] = useState(false); 

  const handleButtonClick = () => {
    setIsClicked(!isClicked); 
  };

  return (
    <View style={styles.container}>
      {showView1 ? (
        <View>
          <View style={styles.rowdirection}>
            <Text style={styles.logotext}>MusicPro</Text>
            <TouchableOpacity onPress={toggleViews2}>
              <Image
                source={require('./Images/avatar.png')}
                style={styles.avatarimage}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleViews4}>
            <Image
              source={require('./songImage/leo.png')}
              style={styles.leoimage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.nextSongImaTex} >
              <Image source={require("./songImage/leo.png")} style={styles.fixedImage} />
              <Text style={styles.nextSongImaTexText} >Naa Ready</Text>
              <Text style={styles.nextSongImaTexTextdemo} >Leo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.nextSongImaTex} >
              <Image source={require("./songImage/jailer.png")} style={styles.fixedImage} />
              <Text style={styles.nextSongImaTexText} >Kaavaalaa</Text>
              <Text style={styles.nextSongImaTexTextdemo1} >Jailer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.nextSongImaTex} >
              <Image source={require("./songImage/jawan.png")} style={styles.fixedImage} />
              <Text style={styles.nextSongImaTexText} >Hayyoda</Text>
              <Text style={styles.nextSongImaTexTextdemo2} >Jawan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.nextSongImaTex} >
              <Image source={require("./songImage/kushilo.png")} style={styles.fixedImage} />
              <Text style={styles.nextSongImaTexText} >En Royaa Neeya</Text>
              <Text style={styles.nextSongImaTexTextdemo3} >Kushi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.nextSongImaTex} >
              <Image source={require("./songImage/kushima.png")} style={styles.fixedImage}/>
              <Text style={styles.nextSongImaTexText} >Aradhya</Text>
              <Text style={styles.nextSongImaTexTextdemo4} >Kushi</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : showView2 ? (
        <View>
          <TouchableOpacity onPress={toggleViews1} style={styles.icons}>
            <Ionicons name="arrow-back" size={40} color="white" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.button} onPress={toggleViews3}>
              <Text style={styles.buttontext}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.rowdirection}>
            <Image
              source={require('./Images/avatar.png')}
              style={styles.avatarimagePRofiel}
            />
            <View style={styles.startIcon}>
              <Icons name="plus" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <View style={styles.rowdirection1}>
            <View>
              <Text style={styles.number1}>0</Text>
              <Text style={styles.posttest}>Song</Text>
            </View>
            <View>
              <Text style={styles.number2}>0</Text>
              <Text style={styles.posttest}>Followers</Text>
            </View>
            <View>
              <Text style={styles.number3}>0</Text>
              <Text style={styles.posttest}>Following</Text>
            </View>
          </View>
          <Text style={styles.textProfileName}>User Name</Text>
          <Icons
            name="check-circle"
            size={25}
            color="#1e90ff"
            style={styles.verified}
          />
          <View>
            <Text>Des</Text>
          </View>
        </View>
      ) : showView3 ? (
        <View>
          <TouchableOpacity onPress={toggleViews2} style={styles.icons}>
            <Ionicons name="ios-arrow-back" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./Images/avatar.png')}
              style={styles.imageedit}
            />
            <View style={styles.startIcons}>
              <Icons name="plus" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={styles.textedituse}>User Name</Text>
          <TouchableOpacity>
            <Ionicons
              name="pencil"
              size={20}
              color="white"
              style={styles.pencilplace}
            />
          </TouchableOpacity>
          <Text style={styles.textedituse}>xxxxx00000</Text>
          <TouchableOpacity>
            <Ionicons
              name="pencil"
              size={20}
              color="white"
              style={styles.pencilplace}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <SafeAreaView style={styles.maincontainer}>
          <TouchableOpacity onPress={toggleViews1} style={styles.icons}>
            <Ionicons name="arrow-back" size={40} color="white" />
          </TouchableOpacity>
          <View style={styles.containers1}>
            <View style={{width: width}}>
              <Animated.FlatList
                ref={songSlider}
                renderItem={renderSongs}
                data={songs}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {x: scrollX},
                      },
                    },
                  ],
                  {useNativeDriver: true},
                )}
              />
            </View>
            <View>
              <Text style={styles.title}>{trackTitle}</Text>
              <Text style={styles.artist}>{trackArtist}</Text>
            </View>
            <View>
              <Slider
                style={styles.progressContainer}
                value={progress.position}
                minimumValue={0}
                maximumValue={progress.duration}
                thumbTintColor="#FFD369"
                minimumTrackTintColor="#FFD369"
                maximumTrackTintColor="#FFF"
                onSlidingComplete={async value => {
                  await TrackPlayer.seekTo(value);
                }}
              />
              <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLabelText}>
                  {new Date(progress.position * 1000)
                    .toISOString()
                    .substr(14, 5)}
                </Text>
                <Text style={styles.progressLabelText}>
                  {new Date((progress.duration - progress.position) * 1000)
                    .toISOString()
                    .substr(14, 5)}
                </Text>
              </View>
            </View>
            <View style={styles.musicControlls}>
              <TouchableOpacity onPress={skipPrevious}>
                <Ionicons
                  name="play-skip-back-outline"
                  size={35}
                  color="#FFD369"
                  style={{marginTop: 25}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => togglePlayBack(playbackState)}>
                <Ionicons
                  name={playbackState === State.Playing ? 'play-circle' : 'pause-circle-sharp'}
                  size={75}
                  color="#FFD369"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={skipNext}>
                <Ionicons
                  name="play-skip-forward-outline"
                  size={35}
                  color="#FFD369"
                  style={{marginTop: 25}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderTopColor: '#393E46',
              borderTopWidth: 1,
              width: width,
              alignItems: 'center',
              paddingVertical: 15,
            }}>
            <View style={styles.bottomControls}>
              <TouchableOpacity onPress={handleButtonClick} >
                <Ionicons name="heart" size={30} color={isClicked ? 'red' : '#777777'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={changeRepeatMode} >
                <MaterialcommunityIcons name={`${repeatIcon()}`} size={30} color={ repeatMode !== 'off' ? "#FFD369" : "#777777"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShare} >
                <Ionicons name="share-outline" size={30} color="#777777" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-horizontal"
                  size={30}
                  color="#777777"
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  musicControlls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#fff',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#222831',
  },
  containers1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leoimage: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginLeft: 50,
    borderRadius:10,
  },
  play: {
    color: 'white',
    fontSize: 40,
  },
  pencilplace: {
    marginLeft: 300,
    marginTop: -24,
  },
  textedituse: {
    color: 'white',
    fontSize: 23,
    marginTop: 40,
    marginLeft: 30,
  },
  startIcons: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 220,
    marginTop: -25,
  },
  imageedit: {
    width: 100,
    height: 100,
    marginLeft: 150,
    marginTop: 40,
  },
  textprofile: {
    color: 'white',
    fontSize: 50,
  },
  avatarImage: {
    width: 80,
    height: 100,
  },
  edittexttt: {
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: -40,
    marginLeft: 290,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  number1: {
    color: 'white',
    marginTop: -20,
    marginLeft: 10,
  },
  verified: {
    marginLeft: 143,
    marginTop: -23,
  },
  number2: {
    color: 'white',
    marginTop: -20,
    marginLeft: 25,
  },
  number3: {
    color: 'white',
    marginTop: -20,
    marginLeft: 25,
  },
  posttest: {
    color: 'white',
    marginRight: 17,
    fontSize: 15,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  logotext: {
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    marginTop: 30,
  },
  avatarimage: {
    width: 50,
    height: 50,
    marginLeft: 180,
    marginTop: 30,
  },
  avatarimagePRofiel: {
    width: 80,
    height: 80,
    marginLeft: 50,
    marginTop: 30,
  },
  rowdirection: {
    flexDirection: 'row',
  },
  rowdirection1: {
    flexDirection: 'row',
    marginLeft: 170,
    marginTop: -40,
  },
  icons: {
    marginTop: 30,
    marginLeft: 30,
    color: 'white',
    width: 40,
  },
  textProfileName: {
    color: 'white',
    fontSize: 18,
    marginLeft: 45,
    marginTop: 30,
  },
  startIcon: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginLeft: -24,
  },
  nextSongImaTex:{
    width: '80%',
    height:70,
    backgroundColor:"#36454F",
    borderRadius:10,
    marginTop:30,
    marginLeft: 40,
    flexDirection:"row"
  },
  fixedImage:{
    width:100,
    height:70,
    borderRadius:10,
  },
  nextSongImaTexText:{
    fontSize:18,
    color:"white",
    marginLeft: 20,
    marginTop: 7,
  },
  nextSongImaTexTextdemo:{
    fontSize:15,
    color:"white",
    marginTop:35,
    marginLeft:-85,
    fontWeight:"300"
  },
  nextSongImaTexTextdemo1:{
    fontSize:15,
    color:"white",
    marginTop:35,
    marginLeft:-85,
    fontWeight:"300"
  },
  nextSongImaTexTextdemo2:{
    fontSize:15,
    color:"white",
    marginTop:35,
    marginLeft:-70,
    fontWeight:"300"
  },
  nextSongImaTexTextdemo3:{
    fontSize:15,
    color:"white",
    marginTop:35,
    marginLeft:-129,
    fontWeight:"300"
  },
  nextSongImaTexTextdemo4:{
    fontSize:15,
    color:"white",
    marginTop:35,
    marginLeft:-67,
    fontWeight:"300"
  },
});
