import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Detailsong from './components/Detailsong';
import Playings from './components/Playing'
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-100 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <Detailsong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playings/>
      </Songs.Provider>
    </div>
  );
}

export default App;
