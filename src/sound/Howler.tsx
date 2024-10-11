import { useState } from "react";
import ReactHowler from "react-howler";
//khoanguyen.me/react-howler/
// no UI generated
// high control of audio playback
// can disable audio preloading? Maybe good for the tables?
// React Howler
export const Howler = () => {
  const [preload, setPreload] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleLoad = () => {
    setPreload(true);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  //   Good
  //   Complete access to audio playback
  // Can completely custom implement a UI & playback & custom loading

  // Concerns
  // No component rendered for semantic purposes
  //   seeking track position looks a bit fiddly => See the Howler player example, just not as clean potenially?

  return (
    <div role="audio player??">
      <ReactHowler
        html5={true}
        src={["http://goldfirestudios.com/proj/howlerjs/sound.ogg"]}
        preload={preload}
        playing={playing}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <button className="full" onClick={handleLoad}>
          Load (Optional)
        </button>
      )}
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};
