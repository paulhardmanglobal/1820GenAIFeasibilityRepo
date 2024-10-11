import { useGlobalAudioPlayer } from "react-use-audio-player";
import type { AudioLoadOptions } from "react-use-audio-player";
import { useState, ChangeEvent, useEffect } from "react";

export const GlobalAudioPlayer = () => {
  // hooks loads only correct audio file, one at a time, we will proceed with this approach
  const [audioFile, setAudioFile] = useState("/audio.mp3");
  const state = useGlobalAudioPlayer();
  const {
    load,
    isReady,
    error,
    play,
    pause,
    stop,
    mute,
    muted,
    playing,
    loop,
    looping,
  } = state;
  useEffect(() => {
    const loadOptions: AudioLoadOptions = { initialVolume: 0.5 };

    load(audioFile, loadOptions);
  }, [audioFile, load]);

  const selectAudioFile = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value) {
      setAudioFile(value);
    }
  };

  return (
    <div>
      <h1>GlobalAudioPLayer</h1>
      <h2>Select Audio track</h2>
      <div>
        <h5>select audio file:</h5>
        <select onChange={selectAudioFile} value={audioFile}>
          <option value="https://ccrma.stanford.edu/~jos/mp3/cello.mp3">
            ch_tunes - baby_seal
          </option>
          <option value="http://goldfirestudios.com/proj/howlerjs/sound.ogg">
            does not exist
          </option>
        </select>
        {!isReady && !error && <p>Fetching audio file...</p>}
        {error && <p className="errorMessage">Failed to load</p>}
      </div>
      <div>
        <button onClick={() => (playing ? pause() : play())}>
          {playing ? "pause" : "play"}
        </button>
        <button onClick={() => stop()}>stop</button>
        <button onClick={() => mute(!muted)}>toggle mute</button>
        <button onClick={() => loop(!looping)}>toggle loop</button>
      </div>
      {state.isReady && (
        <table>
          <tbody>
            {Object.entries(state).map(([k, v]) => {
              if (typeof v === "function") return null;

              return (
                <tr key={k}>
                  <td>{k}</td>
                  <td>{v?.toString() ?? "--"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
