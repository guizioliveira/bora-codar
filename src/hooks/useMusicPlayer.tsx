import React, { createContext, ReactNode, useContext, useState } from "react";

type Music = {
  title: string
  artist: string
  musicDuration: number
  photo: string
}

interface MusicPlayerContextData {
  playList: Music[];
  isPlaying: boolean;
  currentTime: number;
}

interface MusicPlayerProviderProps {
  children: ReactNode;
}

const MusicPlayerContext = createContext<MusicPlayerContextData>({} as MusicPlayerContextData);

export function MusicPlayerProvider({ children }: MusicPlayerProviderProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  const playList = [{ title: "Teste", artist: "Teste", musicDuration: 200, photo: './assets/album-photo.png'}];

  return (
    <MusicPlayerContext.Provider 
      value={{
        isPlaying,
        currentTime,
        playList
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}


export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  return context;
}


