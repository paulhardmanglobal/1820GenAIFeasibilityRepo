import { CardPlayer } from "./CardPlayer/CardPlayer";
import { RealWaveform } from "./RealWaveForm/RealWaveform";
import { Table } from "./Table/Table";
import { WaveformProgress } from "./FakeWaveForm/FakeWaveform";
export const MVP = () => {
  return (
    <div className="flex flex-col gap-12 w-full py-40">
      <div className="flex flex-col gap-12 w-full">
        <h1>Table example with multiple sounds</h1>
        <Table />
      </div>
      <div className="flex flex-col gap-12 w-full">
        <h1>Card Example with progress bar</h1>
        <CardPlayer />
      </div>
      <div className="flex flex-col gap-12 w-full">
        <h1>Waveform with real waveform</h1>
        <RealWaveform />
      </div>
      <div className="flex flex-col gap-12 w-full">
        <h1>Fake waveform with mocked progress</h1>
        <WaveformProgress />
      </div>
      <div className="flex flex-col gap-12 w-full">
        <h1>General notes</h1>

        <ul>
          <li>
            useGlobalAudioPlayer only ever loads 1 sound at a time, so page
            loading should be unaffected by browser attempting to load all mp3
            files.
          </li>
          <li>
            useGlobalAudioPlayer hook allows us to custom build UI from scratch
            and not rely on playback from other UI
          </li>
          <li>
            question: We should provide a fallback audio html tag for when
            browser has issues?
          </li>
          <li>
            Consideration: Don't want to rely on HTML5 audio tags for
            playback/don't want to download sounds until the user requires them,
            in the event they won't listen to the other sounds it could slow
            loading
          </li>
          <li>
            Question: does waveform need to represent actual audio?/allow
            scrubbing?
          </li>
          <li>need to handle laoding states e.t.c</li>
          <li>consideration: wavesurfer might be slow for 6 audio files</li>
          <li>
            Consideration: size of network requests and total rendering time
          </li>
        </ul>
      </div>
    </div>
  );
};
