import {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import Slider from "rc-slider";
import {usePlayer} from "../../contexts/PlayerContext";
import {convertDurationToTimeString} from "../../utils/convertDurationToTimeString";

import "rc-slider/assets/index.css";
import styles from './styles.module.scss';

export function Player() {
    //referencia
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1.0);

    const {
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isMute,
        isShuffling,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        toggleMute,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious,
        setPlayingState,
        clearPlayerState,
    } = usePlayer();

    // Efeitos Colaterais useEffect
    // Toda vez que tiver uma ação no site executa a função
    useEffect(() => {
        if (!audioRef.current){
            return;
        }
        if(isPlaying){
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        if(isMute){
            audioRef.current.muted = true;
        } else {
            audioRef.current.muted = false;
        }

    }, [isPlaying, isMute, setVolume])

    function setupProgressListener () {
        audioRef.current.currentTime = 0;
        audioRef.current.addEventListener("timeupdate", () => {
            setProgress(Math.floor(audioRef.current.currentTime));
        })
    }

    function handfleSeek(amount: number) {
        audioRef.current.currentTime = amount;
        setProgress(amount);
    }

    function handleEpisodeEnded () {
        if (hasNext) {
            playNext()
        } else {
            clearPlayerState()
        }
    }

    function changeVolume (amountVolume: number) {
        audioRef.current.volume = amountVolume;
        setVolume(amountVolume);
        console.log(amountVolume)

        if (amountVolume === 0 || isMute ){
            toggleMute();
        }
    }

    const episode = episodeList[currentEpisodeIndex];

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong> Tocando agora </strong>
            </header>

            { // if se tem episodio tocando ou não
                episode ? (
                    <div className={styles.currentEpisode}>
                        <Image
                            width={592}
                            height={592}
                            src={episode.thumbnail}
                            objectFit={"cover"}
                        />
                        <strong>{episode.title}</strong>
                        <span>{episode.members}</span>
                    </div>
                ) : (
                    <div className={styles.emptyPlayer}>
                        <strong>Selecione um podcast para ouvir</strong>
                    </div>
                )
            }

            <footer className={!episode ? styles.empty : '' }>
                <div className={styles.progress}>
                    <span> {convertDurationToTimeString(progress)} </span>
                    <div className={styles.slider}>
                        { episode ? (
                            <Slider
                                max={episode.duration}
                                value={progress}
                                onChange={handfleSeek}
                                trackStyle={ { backgroundColor: "#04d361" } }
                                railStyle={{ backgroundColor: "#9f75ff"  }}
                                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
                            />
                        ) : (
                            <div className={styles.emptySlider} />
                        ) }
                    </div>
                    <span> {convertDurationToTimeString(episode?.duration ?? 0 )} </span>
                </div>

                <div className={styles.volume}>
                    {  isMute ? <img src="/mute.svg" alt="Tocar" height={16} onClick={toggleMute} /> : <img src="/volume.svg" alt="Tocar" height={16} onClick={toggleMute} /> }

                    <div className={styles.slider}>
                        { episode ? (
                            <Slider
                                min={0.0}
                                max={1.0}
                                step={0.01}
                                value={volume}
                                onChange={changeVolume}
                                trackStyle={ { backgroundColor: "#04d361" } }
                                railStyle={{ backgroundColor: "#9f75ff"  }}
                                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
                            />
                        ) : (
                            <div className={styles.emptySlider} />
                        ) }
                    </div>
                </div>

                {/* Somente if */}
                { episode &&  (
                    <audio
                        src={episode.url}
                        ref={audioRef}
                        loop={ isLooping }
                        autoPlay
                        onEnded={handleEpisodeEnded}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                        onLoadedMetadata={setupProgressListener}
                    />
                ) }

                <div className={styles.buttons}>
                    <button
                        type="button"
                        disabled={!episode || episodeList.length === 1}
                        onClick={toggleShuffle}
                        className={isShuffling ? styles.isActive : '' }
                    >
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button" disabled={!episode || !hasPrevious} onClick={playPrevious}>
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>
                    <button
                        type="button"
                        className={styles.playButton}
                        disabled={!episode}
                        onClick={togglePlay}
                    >
                        { isPlaying
                            ? <img src="/pause.svg" alt="Tocar"  />
                            : <img src="/play.svg" alt="Tocar" />
                        }
                    </button>
                    <button type="button" disabled={!episode || !hasNext} onClick={playNext}>
                        <img src="/play-next.svg" alt="Tocar próxima" />
                    </button>
                    <button
                        type="button"
                        disabled={!episode}
                        onClick={toggleLoop}
                        className={isLooping ? styles.isActive : '' }
                    >
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </div>
            </footer>
        </div>
    );
}