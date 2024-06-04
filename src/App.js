import React, { useState, useRef, useEffect } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';
// import { NeatConfig, NeatGradient } from "@firecms/neat";

const App = () => {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  // ref
  // const canvasRef = useRef();
  // const gradientRef = useRef(NeatGradient | null)

  // effect
  // useEffect(() => {

  //   if (!canvasRef.current) {
  //     return;
  //   }
  //   console.log(canvasRef.current);

  //   gradientRef.current = new NeatGradient({
  //     ref: canvasRef.current,
  //     "colors": [
  //       {
  //         "color": "#3D7354",
  //         "enabled": true
  //       },
  //       {
  //         "color": "#dde2c6",
  //         "enabled": true
  //       },
  //       {
  //         "color": "#FFFFFC",
  //         "enabled": true
  //       },
  //       {
  //         "color": "#093513",
  //         "enabled": true
  //       },
  //       {
  //         "color": "#e6eed6",
  //         "enabled": true
  //       }
  //     ],
  //     "speed": 4,
  //     "horizontalPressure": 3,
  //     "verticalPressure": 3,
  //     "waveFrequencyX": 2,
  //     "waveFrequencyY": 2,
  //     "waveAmplitude": 9,
  //     "shadows": 0,
  //     "highlights": 10,
  //     "colorBrightness": 1,
  //     "colorSaturation": -1,
  //     "wireframe": false,
  //     "colorBlending": 8,
  //     "backgroundColor": "#FFFFFF",
  //     "backgroundAlpha": 1,
  //     "resolution": 1
  //   });
  // }, [canvasRef.current]);


  return (
    <div>
      {/* <canvas
        ref={canvasRef}
      ></canvas> */}
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song
        currentSong={currentSong}
      />
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
