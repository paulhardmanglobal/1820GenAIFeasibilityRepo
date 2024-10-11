import { useWavesurfer } from "@wavesurfer/react";
import { useRef } from "react";

export const RealWaveform = () => {
  const containerRef = useRef(null);
  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    url: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
    waveColor: "purple",
    height: 100,
    width: 800,
    barRadius: 10,
    barGap: 2,
  });

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  return (
    <div className="flex flex-row-reverse items-center gap-2 w-full">
      <div ref={containerRef} />
      <button className="w-44 text-white" onClick={onPlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
