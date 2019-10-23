import React, { useState } from "react";
import Acoustic_Breeze from "./assets/mp3/Acoustic_Breeze.mp3";
import Dub_Step from "./assets/mp3/Dub_Step.mp3";
import Hey from "./assets/mp3/Hey.mp3";
import Memories from "./assets/mp3/Memories.mp3";
import Tenderness from "./assets/mp3/Tenderness.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: "Acoustic Breeze - Benjamin Tissot ",
                file: Acoustic_Breeze
            },
            {
                name: "Dub Step - Benjamin Tissot ",
                file: Dub_Step
            },
            {
                name: "Hey - Benjamin Tissot",
                file: Hey
            },
            {
                name: "Memories - Benjamin Tissot",
                file: Memories
            },
            {
                name: "Tenderness - Benjamin Tissot",
                file: Tenderness
            }
        ],
        currentTrackIndex: null,
        isPlaying: false
    });
    return <MusicPlayerContext.Provider value={[state, setState]}>{props.children}</MusicPlayerContext.Provider>;
};

export { MusicPlayerContext, MusicPlayerProvider };
