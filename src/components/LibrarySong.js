import React from "react";

const LibrarySong = ( {song, currentSong, setCurrentSong, setIsPlaying} ) => {

  const songSelectHandler = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`} onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;