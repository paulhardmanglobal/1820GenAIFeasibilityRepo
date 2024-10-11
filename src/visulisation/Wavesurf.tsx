import { useWavesurfer } from "@wavesurfer/react";
import { useRef } from "react";
export const Wavesurf = () => {
  const containerRef = useRef(null);

  //   https://www.npmjs.com/package/wavesurfer.js
  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    url: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
    waveColor: "purple",
    height: 100,
    barRadius: 50,
    barGap: 20,
    mediaControls: true,
  });

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const skipToHalfway = () => {
    if (wavesurfer) {
      wavesurfer.seekTo(0.5);
    }
  };
  return (
    <>
      {/* <div ref={containerRef} /> */}
      <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={skipToHalfway}>{"Skip to 5 seconds?"}</button>
    </>
  );
};
