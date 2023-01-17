import React from 'react'
import { Play, Rewind, FastForward, Pause } from 'phosphor-react'

interface PlayerControllerProps{
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<boolean>;
}

export default function PlayerController({ isPlaying, setIsPlaying }: PlayerControllerProps) {
  return (
    <>
      <div className='flex justify-between box-content'>
        <button className='group'>
          <Rewind 
            className='text-[#E1E1E6] group-hover:text-[#b398ce] transition-colors duration-200' size={28} weight="fill"
          />
        </button>
        <button 
          className='group'
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <Play 
              className='text-[#E1E1E6] group-hover:text-[#b398ce] transition-colors duration-200' size={28} weight="fill"
            />
          ) : 
          (
            <Pause 
              className='text-[#E1E1E6] group-hover:text-[#b398ce] transition-colors duration-200'  size={28} weight="fill"
            />
          )}
        </button>
        <button className='group'>
          <FastForward 
            className='text-[#E1E1E6] group-hover:text-[#b398ce] transition-colors duration-200' size={28} weight="fill"
          />
        </button>
      </div>
    </>
  )
}
