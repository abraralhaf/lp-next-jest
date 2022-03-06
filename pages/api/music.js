import React from 'react'
export const music = async () =>{

    const res = await fetch('https://api-song-lyrics.herokuapp.com/hot');
    const data = await res.json();

    return{
        props:{music: data}
    }
}

// const music = ({}) => {
//   return (
//     <div>musik</div>
//   )
// }

export default music