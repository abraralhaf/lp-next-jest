import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axiosFetch from '../config/axios'
// import Toptrack from '../components/Toptrack'
import { useEffect, useState } from 'react/cjs/react.development'



export default function Home() {
    
    // const [dataMusic, setDataMusic] = useState(null);


    // const getRecommendation = async() =>{
    //   const result = await axiosFetch('hot');
    //   console.log("result :",result.data);
    //   const resultApi = result.data
    //   console.log("hasil", resultApi.data);
    //   setDataMusic(resultApi.data)
    // }
    // useEffect(() =>{
    //   getRecommendation();
    //   // setTracks(getRecommendation);
    // },[])

  return (
    <div className='main'>
      <Head>
        <title>Spotify Premium - Spotify (ID)</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <nav className="nav bg-slate-900 sticky top-0 z-50">
        <div className="main-container gap-x-6 justify-between h-full w-full ">
          <div>
            <Link href="/" passHref>
              <a>
                <Image
                src="/spotify_text.svg"
                alt="Spotify Inc."
                height="30px"
                width="170px"
                />
              </a>
              </Link>
              </div>
              <div>
                <ul className='flex items-center gap-x-7'>
                  <li className='hidden sm:list-item'>
                    <Link href="#" passHref>
                      <a className='text-header text-sm hover:text-green-500'>Premium</a>
                    </Link>
                  </li>
                  <li className='hidden sm:list-item'>
                    <Link href="#" passHref>
                      <a className='text-header text-sm  hover:text-green-500'>Dukungan</a>
                    </Link>
                  </li>
                  <li className='hidden sm:list-item'>
                    <Link href="#" passHref>
                      <a className='text-header text-sm  hover:text-green-500'>Download</a>
                    </Link>
                  </li>
                
                  <li>
                    <Link href="#" passHref>
                      <button className="text-header button-login text-sm  hover:text-green-500">Masuk</button>
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
      </nav> 

      <header className='header'>
        <div className='main-container p-20 mt-8 header-bg'>
          <div className='w-3/6 ml-10 md:w-3/6'>
            <h1 className='text-header text-4xl mb-4'>Dapatkan 2 bulan Premium cuma Rp 54,990 dengan e-wallet dan pulsa.</h1>
            <h2 className='text-white/80 text-md'>Hanya Rp 54,990/bulan sesudahnya. Batalkan kapan saja.</h2>
            <div className='hidden sm:flex items-center gap-x-2 py-4'>
            <button className='font-bold text-black text-sm button-rounded
            border border-green-600/75
            bg-green-600 px-6 py-1 rounded-full shadow-sm
            hover:shadow-xl px-7 py-2'>MULAI</button>
            <button className='font-semi-bold text-white/80 text-sm button-rounded
             px-6 py-1 rounded-full shadow-sm border border-white/80
            hover:shadow-xl px-7 py-2'>LIHAT PAKET</button>
             </div>
            <p className='text-white/80 text-xs' ><u>Persyaratan dan ketentuan berlaku.</u> Tawaran tidak tersedia untuk pengguna yang pernah mencoba Premium.</p>
          </div>
       
          </div>
          <div className='main-container p-16'>
            <div className='w-full'>
            <h1 className='text-header text-center  text-3xl mb-2'>Memperkenalkan Premium Mini</h1>
            <h2 className='text-white text-center'>Download 30 lagu dan dengarkan musik bebas iklan semaumu, di 1 ponsel</h2>
            <div className='flex justify-center gap-x-5 py-4'>
                <button className='font-bold text-black text-sm button-rounded
                border border-gray-300 bg-gray-300 px-6 py-1 rounded-full shadow-sm  px-7 py-2
                hover:shadow-xl'>1 HARI RP 2,500</button>
                <button className='font-semi-bold text-white/80 text-sm button-rounded
                px-6 py-1 rounded-full shadow-sm border border-white/80
                hover:shadow-xl px-7 py-2'>1 MINGGU RP 9,500</button>
             </div>
             <p className='text-white/80 text-xs text-center' >
               <u>Persyaratan dan ketentuan berlaku.</u>
               </p>
            </div>
            </div>  
            <div className='border-t border-slate-800'></div>
      </header>
    
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
          <div className='border-t border-slate-800'></div>
        </section>

        {/* <section>
          <div className='main-container py-10'>
            <div className='ml-10'>
              <div className='flex items-center gap-x-4 py-2'>
                <Image
                unoptimized
                src='/icons/star.svg'
                width="28"
                height="28"
                alt="star"
                layout="fixed"
                />
                <h2 className='text-white font-bold tracking-wider text-3xl'>Trending Musik</h2>
              </div>
              <div className='grid grid-cols-1 mt-10 gap-5 overflow-y-auto h-72 scrollbar-hide md:grid-cols-3 lg:grid-cols-4'>
                {dataMusic && dataMusic.map((music) =>{
                 return <Toptrack key={music.songId}{...music} /> 
                })}
                </div>
            </div>
            </div>
        </section> */}


        <footer className='bg-black mt-10'>
          <div className='main-container py-20'>
            <div className='grid grid-cols-1 ml-10 gap-4 md:grid-cols-3 lg:grid-cols-5'>
            <Link href="#" passHref>
            <a><Image
                unoptimized
                src='spotify_text_white.svg'
                height="30px"
                width="170px"
                alt="Spotify"
                /></a>
                </Link>
                
                <div>
                  <ul className='gap-2'>
                    <li>
                    <p className='uppercase font-semibold text-white/80 text-[12px] mb-2'>Perusahaan</p>
                    </li>
                    <li>
                    <Link href="#" passHref>
                      <a className='text-footer-item'>Tentang</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>Pekerjaan</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>For the Record</a></Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='gap-2'>
                    <li>
                    <p className='uppercase font-semibold text-white/80 text-[12px] mb-2'>Komunitas</p>
                    </li>
                    <li>
                    <Link href="#" passHref>
                      <a className='text-footer-item'>Untuk Artis</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref>
                      <a className='text-footer-item'>Pengembang</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref>
                      <a className='text-footer-item'>Iklan</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>Investor</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>Vendor</a></Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='gap-2'>
                    <li>
                    <p className='uppercase font-semibold text-white/80 text-[12px] mb-2'>Tautan Berguna</p>
                    </li>
                    <li>
                    <Link href="#" passHref>
                      <a className='text-footer-item'>Dukungan</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>Pemutar Web</a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>Aplikasi Seluler Gratis</a></Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='flex justify-end gap-x-16 gap-2'>
                    <li>
                    <Link href="#" passHref>
                      <a className='text-footer-item'>
                      <Image
                            unoptimized
                            src='/icons/ig.svg'
                            height="32"
                            width="32"
                            alt="Instagram"
                            />
                        </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>    
                    <Image
                            unoptimized
                            src='/icons/twitter.svg'
                            height="32"
                            width="32"
                            alt="Twitter"
                            /></a></Link>
                    </li>
                    <li>
                    <Link href="#" passHref><a className='text-footer-item'>
                    <Image
                            unoptimized
                            src='/icons/facebook.svg'
                            height="32"
                            width="32"
                            alt="Facebook"
                            /></a></Link>
                    </li>
                  </ul>
                </div>
              
            </div>
          
          </div>
          <div className='main-container pb-10 ml-10'>
          <div className='flex items-center gap-x-6 ml-10'>
                  <Link href='#' passHref>
                  <a className='text-footer-item-2'>Hukum</a>
                  </Link>
                  <Link href='#' passHref>
                  <a className='text-footer-item-2'>Pusat Privasi</a>
                  </Link>
                  <Link href='#' passHref>
                  <a className='text-footer-item-2'>Kebijakan Privasi</a>
                  </Link>
                  <Link href='#' passHref>
                  <a className='text-footer-item-2'>Cookie</a>
                  </Link>
                  <Link href='#' passHref>
                  <a className='text-footer-item-2'>Tentang Iklan</a>
                  </Link>
                </div>
                </div>
        </footer>
    </div>
  )
}
