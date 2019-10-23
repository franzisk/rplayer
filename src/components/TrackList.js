import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const TrackList = () => {
    const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
    return (
        <>
            {trackList.map((track, index) => (
                <div className="box track-list" key={index} onClick={() => playTrack(index)}>
                    <button className="button" onClick={() => playTrack(index)}>
                        <FontAwesomeIcon icon={currentTrackName === track.name && isPlaying ? faPause : faPlay} />
                    </button>
                    <div className="song-title">{track.name}</div>
                </div>
            ))}
        </>
    );
};

export default TrackList;
