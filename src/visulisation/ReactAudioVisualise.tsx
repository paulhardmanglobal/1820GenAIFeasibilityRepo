import { useState, useRef, useEffect } from "react";
import { AudioVisualizer } from "react-audio-visualize";

// github.com/samhirtarif/react-audio-visualize#readme/
export const Visualizer = () => {
  const [blob, setBlob] = useState<Blob>();
  const visualizerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchThing = async () => {
      const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";
      if (url) {
        try {
          const response = await fetch(url);
          const data = await response.blob();
          setBlob(data);
        } catch (error) {
          console.error("Error fetching the audio file:", error);
        }
      }
    };

    fetchThing();
  }, []);

  return (
    <div>
      {blob && (
        <AudioVisualizer
          ref={visualizerRef}
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={"#f76565"}
          currentTime={14}
        />
      )}
    </div>
  );
};
