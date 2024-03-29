import { useContext } from "react";
import { MusicPlayerContext } from "../MusicPlayerContext";

const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicPlayerContext);

    const playTrack = index => {
        if (index === state.currentTrackIndex) {
            togglePlay();
        } else {
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file);
            state.audioPlayer.play();
            setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
        }
    };

    const togglePlay = () => {
        if (state.isPlaying) {
            state.audioPlayer.pause();
        } else {
            state.audioPlayer.play();
        }
        setState(state => ({ ...state, isPlaying: !state.isPlaying }));
    };

    const playPreviousTrack = () => {
        const newIndex = (((state.currentTrackIndex + -1) % state.tracks.length) + state.tracks.length) % state.tracks.length;
        playTrack(newIndex);
    };

    const playNextTrack = () => {
        const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
        playTrack(newIndex);
    };

    return {
        playTrack,
        togglePlay,
        currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
        playPreviousTrack,
        playNextTrack
    };
};

export default useMusicPlayer;
