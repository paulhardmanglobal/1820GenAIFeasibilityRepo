import { useEffect, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Progress } from "@/components/ui/progress";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import placeholderImage from "./image.png";

export const CardPlayer = () => {
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
    <>
      <div className="w-full m-auto flex flex-col items-center">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Winter Warmer</CardTitle>
            <CardDescription>Coffee Roasters</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <img className="max-w-32" src={placeholderImage} />

            <Progress value={progress} />
            <p>
              {getPosition().toFixed(0)} /{duration.toFixed(0)}
            </p>
            <button onClick={handlePlayPause} className="text-white">
              {!playing ? "Play" : "Pause"}
            </button>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <p>Friendly</p>
          </CardFooter>
        </Card>
      </div>
      <p>
        note: Should investigate updating the progress marker using useRef to
        avoid excessive re-renders
      </p>
    </>
  );
};
