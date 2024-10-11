import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useState } from "react";
export const Table = () => {
  const { load, stop, playing } = useGlobalAudioPlayer();

  const handleClickSound = (url: string) => {
    if (playing && url === songUrl) {
      stop();
    } else {
      load(url, { autoplay: true });
      setSongUrl(url);
    }
  };

  const [songUrl, setSongUrl] = useState("");
  return (
    <div role="wrapper">
      <p>Playing: {playing ? "True" : "False"}</p>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 200 }} // the Data Grid will fill the size of the parent container
      >
        <table
          style={{
            width: "50%",
            border: "1px solid black",
            borderCollapse: "collapse",
            margin: "20px auto",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Name
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Genre
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Mood
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button
                  className="text-white"
                  onClick={() =>
                    handleClickSound(
                      "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
                    )
                  }
                >
                  {"Play"}
                </button>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Classical
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Chill
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button
                  className="text-white"
                  onClick={() =>
                    handleClickSound(
                      "https://goldfirestudios.com/proj/howlerjs/sound.ogg"
                    )
                  }
                >
                  {"Play"}
                </button>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Techno
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Upbeat
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      Further work: For 100 + sounds investigate tool such as AG Grid/ Tanstack
      table for clean UI. Gotcha in updating table state and combining with
      hooks from useGlobalAudioPlayer associated with clicking a second time on
      an already playing song in order to stop it/render a different button
      function. TLDR: updating table row state in AG grid is complex.
      <br />
      <p>
        useful notes on updating row here:
        https://www.ag-grid.com/javascript-data-grid/data-update-single-row-cell/
      </p>
    </div>
  );
};
