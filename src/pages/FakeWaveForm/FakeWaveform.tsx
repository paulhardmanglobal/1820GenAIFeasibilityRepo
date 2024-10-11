import { useState, useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export const WaveformProgress = () => {
  const { load, playing, play, pause, duration, getPosition } =
    useGlobalAudioPlayer();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    load("https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3");
  }, [load]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPosition = getPosition();
      if (duration) {
        setProgress((currentPosition / duration) * 100);
      }
    }, 150); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [duration, getPosition]);

  const handlePlayPause = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  return (
    <div className="flex gap-4 flex-row-reverse w-full justify-center items-center">
      <FakeWave progress={progress} />
      <button onClick={handlePlayPause} className="text-white">
        {!playing ? "Play" : "Pause"}
      </button>
    </div>
  );
};

interface FakeWaveProps {
  progress: number;
}

const FakeWave: React.FC<FakeWaveProps> = ({ progress }) => {
  return (
    <div style={{ position: "relative", width: "300px", height: "100px" }}>
      {/* Base Waveform SVG */}
      <svg
        viewBox="0 0 300 100"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          fill: "#ccc", // Light color for the base waveform
        }}
      >
        <path d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 L300,100 L0,100 Z" />
      </svg>

      {/* Overlay Waveform SVG with clipping */}
      <svg
        viewBox="0 0 300 100"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          fill: "#333", // Dark color for the progress overlay
          clipPath: `inset(0 ${100 - progress}% 0 0)`, // Clip from left to right as progress increases
        }}
      >
        <path d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 L300,100 L0,100 Z" />
      </svg>
    </div>
  );
};
