import React from 'react'
import Image from 'next/image'

const Benefit = () => {
  return (
    <section>
      <div className='main-container py-10'>
      <div className='w-full'>
        <h1 className='text-header text-center text-3xl'>Kenapa beli Premium?</h1>
        <div className="flex justify-center grid grid-cols-1 gap-4 mt-10 ml-10 md:grid-cols-2 lg:grid-cols-4 ">
        <div className='bg-slate-800 p-5 rounded-lg'>
        <div className='text-center py-8'>
            <Image
              src="/icons/download.svg"
              alt="Download"
              height="54"
              width="54"
              />
            </div>
          <h1 className='text-white font-semibold text-center'>Download Musik</h1>
          <p className='text-white text-center text-sm'>Dengarkan dimana saja</p>
        </div>
         <div>
         <div className='bg-slate-800 p-5 rounded-lg'>
          <div className='text-center py-8'>
              <Image
                src="/icons/noads.svg"
                alt="Download"
                height="54"
                width="54"
                />
              </div>
            <h1 className='text-white font-semibold text-center'>Dengarkan musik bebas iklan.</h1>
            <p className='text-white text-center text-sm'>Nikmati musik tanpa henti</p>
          </div>
         </div>
         <div>
         <div className='bg-slate-800 p-5 rounded-lg'>
          <div className='text-center py-8'>
              <Image
                src="/icons/starticket.svg"
                alt="Star"
                height="54"
                width="54"
                />
              </div>
            <h1 className='text-white font-semibold text-center'>Putar lagu apa pun</h1>
            <p className='text-white text-center text-sm'>Bahkan di HP.</p>
          </div>
         </div>
         <div>
         <div className='bg-slate-800 p-5 rounded-lg'>
          <div className='text-center py-8'>
              <Image
                src="/icons/play.svg"
                alt="Play"
                height="54"
                width="54"
                />
              </div>
            <h1 className='text-white font-semibold text-center'>Lewati sesukamu</h1>
            <p className='text-white text-center text-sm'>Cukup tekan berikutnya.</p>
          </div>
         </div>
      </div>

      <div className='p-5 mt-5'>
        <div className='flex justify-center items-center gap-x-5 py-4'>
          <h2 className='text-white font-semibold text-xl'>Diskon khusus untuk mahasiswa yang memenuhi syarat</h2>
          <button className='text-white button-rounded text-sm
            border rounded-full px-7 py-2'>Pelajari<br/> Selengkapnya</button>
      
          </div>
        </div>
    </div>
    
      </div>
      
      <div className='border-t border-slate-700'></div>
    </section>
  )
}

export default Benefit