import React, {} from 'react';
import LibrarySong from './LibrarySong';

const Library = ( {songs, currentSong, setCurrentSong, setIsPlaying, libraryStatus} ) => {

  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''} `}>
      <h2>Songs</h2>
      <div className="library-songs">
        
        {songs.map(song => 
          <LibrarySong 
            song={song} 
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            key={song.id}
            setIsPlaying={setIsPlaying}
            />
        )}
      </div>
    </div>
  );
};

export default Library;
