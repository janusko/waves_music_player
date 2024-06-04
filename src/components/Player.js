import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
  // ref
  const audioRef = useRef(null);

  // event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    };
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    };
  };

  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1]);
    };
    if (direction === 'skip-back') {
      await setCurrentSong(songs[currentIndex === 0 ? songs.length - 1 : currentIndex - 1]);
    };
  };

  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // variables
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  // styles
  const trackStyling = {
    background: `linear-gradient(to bottom right, ${currentSong.color[0]}, ${currentSong.color[1]})`
  }
  const trackAnimStyling = {
    transform: `translateX(${animationPercentage}%`,
  };

  return (
    <div className="player-container">

      <div className="timer-control">
        <p>{getTime(songInfo.currentTime)}</p>

        <div className="track" style={trackStyling}>
          <input
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />

          <div
            className="animate-track"
            style={trackAnimStyling}
          ></div>
        </div>

        <p>{getTime(songInfo.duration || 0)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipTrackHandler('skip-back')}
          size="2x"
          icon={faAngleLeft} />

        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay} />

        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipTrackHandler('skip-forward')}
          size="2x"
          icon={faAngleRight} />
      </div>


      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        onLoadedData={autoPlayHandler}
        onEnded={() => skipTrackHandler("skip-forward")}
      ></audio>
    </div>
  );
};

export default Player;
