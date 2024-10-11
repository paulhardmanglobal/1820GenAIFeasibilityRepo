import { useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";

export const HowlerPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loop, setLoop] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [seek, setSeek] = useState(0); // State to track the current seek position

  const playerRef = useRef(null);

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        if (playerRef.current) {
          setSeek(playerRef.current.seek()); // Update seek position every second
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [playing]);

  const handleToggle = () => {
    setPlaying(!playing);
  };

  const handleOnLoad = () => {
    setLoaded(true);
    setDuration(playerRef.current.duration());
  };

  const handleOnPlay = () => {
    setPlaying(true);
  };

  const handleOnEnd = () => {
    setPlaying(false);
  };

  const handleStop = () => {
    playerRef.current.stop();
    setPlaying(false); // Update local state to prevent autoplay
    setSeek(0); // Reset seek position
  };

  const handleSeekToPoint = () => {
    if (playerRef.current) {
      playerRef.current.seek(12); // Seek to 12 seconds
      setSeek(12); // Update state to reflect the new position
    }
  };

  return (
    <div className="full-control">
      <ReactHowler
        src={["http://goldfirestudios.com/proj/howlerjs/sound.ogg"]}
        playing={playing}
        onLoad={handleOnLoad}
        onPlay={handleOnPlay}
        onEnd={handleOnEnd}
        loop={loop}
        mute={mute}
        volume={volume}
        ref={playerRef}
      />
      <button onClick={handleSeekToPoint}>Skip to 12 seconds</button>
      <p>
        Track position: {seek.toFixed(2)} /{" "}
        {duration ? duration.toFixed(2) : "Loading..."}
      </p>
      <div className="volume">
        <label>
          Volume:
          <span className="slider-container">
            <input
              type="range"
              min="0"
              max="1"
              step=".05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </span>
          {volume.toFixed(2)}
        </label>
      </div>

      <button onClick={handleToggle}>{playing ? "Pause" : "Play"}</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
