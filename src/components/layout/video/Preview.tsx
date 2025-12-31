"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const videoUrl = "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000708/Home-page_video_tzmxjd.mov";
const playButtonIcon = "https://res.cloudinary.com/seunsanyaa/image/upload/v1767047113/Path_2_utz67t.png";

export function Preview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatTime = (time: number): string => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimerClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      if (video) {
        video.currentTime = 0;
        setCurrentTime(0);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
      <div className="flex flex-col items-center gap-0">
        {/* Video Container */}
        <div className="relative h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[189px] md:w-[189px] rounded-full overflow-hidden shadow-[0px_3.24px_3.24px_0px_rgba(0,0,0,0.25)]">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover rounded-full"
            loop
            playsInline
            preload="metadata"
          >
            <source src={videoUrl} type="video/quicktime" />
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>

        {/* Play Button with Duration - Clickable */}
        <div className="relative -mt-[8px] sm:-mt-[10px]">
          <div 
            onClick={handleTimerClick}
            className="bg-[rgba(137,136,136,0.53)] backdrop-blur-sm flex items-center gap-[4px] sm:gap-[6px] px-[14px] sm:px-[19px] py-1.5 sm:py-2 pr-[8px] sm:pr-[11px] rounded-[50px] shadow-[0px_2.066px_3.935px_0px_rgba(0,0,0,0.06),0px_5.711px_10.879px_0px_rgba(0,0,0,0.09),0px_13.751px_26.192px_0px_rgba(0,0,0,0.11),0px_45.612px_86.879px_0px_rgba(0,0,0,0.17),0px_0px_0px_5px_rgba(255,255,255,0.4)] cursor-pointer hover:bg-[rgba(137,136,136,0.65)] transition-colors"
          >
            {/* Play Icon */}
            <div className="relative w-[9px] h-[11px] sm:w-[11px] sm:h-[13px] shrink-0">
              <Image
                alt="Play icon"
                src={playButtonIcon}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            
            {/* Duration/Time */}
            <p className="font-normal text-[15px] sm:text-[17px] text-white leading-normal">
              {formatTime(currentTime)}/{formatTime(duration)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

