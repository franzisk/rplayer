import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

function PlayerControls() {
    const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();

    return (
        <>
            <div className="box controls has-background-grey-dark">
                {isPlaying && (
                    <div className="marquee">
                        <p>{currentTrackName}</p>
                    </div>
                )}

                {!isPlaying && <div style={{ textAlign: "center" }}>Stopped</div>}

                <div className="buttons">
                    <button className="button " onClick={playPreviousTrack} disabled={!currentTrackName}>
                        <FontAwesomeIcon icon={faStepBackward} size="2x" />
                    </button>

                    <button className="button " onClick={togglePlay} disabled={!currentTrackName}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
                    </button>

                    <button className="button " onClick={playNextTrack} disabled={!currentTrackName}>
                        <FontAwesomeIcon icon={faStepForward} size="2x" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default PlayerControls;
