import { v4 as uuidv4 } from 'uuid';
import YeggStomp from './assets/songs/01-YeggStomp.wav';
import DuckAndCover from './assets/songs/05-DuckAndCover.wav';
import Baja from './assets/songs/06-Baja.wav';
import MaltLiquor from './assets/songs/07-MaltLiquor.wav';
import Landlord from './assets/songs/09-Landlord.wav';
import AirRaid from './assets/songs/14-AirRaid.wav';

import HeavyWater from './assets/images/yeggs_heavy.jpeg';
import YeggsLogo from './assets/images/yeggs_logo.jpeg';

const chillHop = () => {
  return [
    {
      name: 'Duck And Cover',
      cover: `${HeavyWater}`,
      artist: 'The Yeggs',
      audio: `${DuckAndCover}`,
      color: ["#E48F4A", "#902428"],
      id: uuidv4(),
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#F6B96C", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#FFD0BC", "#806BAA"],
      id: uuidv4(),
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#571956", "#DC8F8F"],
      id: uuidv4(),
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#FFD0BC", "#806BAA"],
      id: uuidv4(),
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#571956", "#DC8F8F"],
      id: uuidv4(),
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#F6B96C", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Left Hand",
      cover: "https://chillhop.com/wp-content/uploads/2023/10/38731803e8cbc15c8d6c92ce7f3137c4b2489362-1024x1024.jpg",
      artist: "Bao, Venuz Beats",
      audio: "https://stream.chillhop.com/mp3/69646",
      color: ["#F39675", "#96344D"],
      id: uuidv4(),
    },
    {
      name: "Delicate",
      cover: "https://chillhop.com/wp-content/uploads/2023/02/ef337196272ee56d2e76383d39ed446b57472aec-1024x1024.jpg",
      artist: "Middle School, Henry Gritton",
      audio: "https://stream.chillhop.com/mp3/49381",
      color: ["#FADEA2", "#655E2E"],
      id: uuidv4(),
    },
    {
      name: "Malt Liquor",
      cover: `${HeavyWater}`,
      artist: "The Yeggs",
      audio: `${MaltLiquor}`,
      color: ["#E48F4A", "#902428"],
      id: uuidv4(),
    },
    {
      name: "Yegg Stomp",
      cover: `${YeggsLogo}`,
      artist: "The Yeggs",
      audio: `${YeggStomp}`,
      color: ["#D59E42", "#181314"], 
      id: uuidv4(),
    },
    {
      name: "Baja",
      cover: `${HeavyWater}`,
      artist: "The Yeggs",
      audio: `${Baja}`,
      color: ["#E48F4A", "#902428"],
      id: uuidv4(),
    },
    {
      name: "Landlord",
      cover: `${HeavyWater}`,
      artist: "The Yeggs",
      audio: `${Landlord}`,
      color: ["#E48F4A", "#902428"],
      id: uuidv4(),
    },
    {
      name: "Air Raid",
      cover: `${HeavyWater}`,
      artist: "The Yeggs",
      audio: `${AirRaid}`,
      color: ["#E48F4A", "#902428"],
      id: uuidv4(),
    },
  ];
};

export default chillHop;
