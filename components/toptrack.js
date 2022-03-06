import React from 'react'
import Image from 'next/image'

const Toptrack = (props) => {
    return (
        
        <div className='bg-slate-800 p-3 rounded-md flex items-center gap-x-2 gap-y-4'>
           
             <Image
              unoptimized
              src='/icons/brandspotify.svg'
              width="24"
              height="24"
              alt="star"
              layout="fixed"
              />
              <div>
              <p className='text-white text-[12px] font-semibold'>{props.songTitle}</p>
              <p className='text-white text-[8px]'>Artist: {props.artist}</p>
              
              </div>
        </div>
      )
}

export default Toptrack