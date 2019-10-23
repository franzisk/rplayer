import React from "react";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import { MusicPlayerProvider } from "./MusicPlayerContext";

export default () => {
    return (
        <MusicPlayerProvider>
            <div className="container">
                <div className="app-title">React Music Player</div>
                <TrackList />
                <PlayerControls />
                <div className="music-rights">
                    All mp3 files downloaded from{" "}
                    <a href="https://www.bensound.com/" target="_blank" rel="noopener noreferrer">
                        Bensound.com
                    </a>{" "}
                    under free license.
                </div>
            </div>
        </MusicPlayerProvider>
    );
};
