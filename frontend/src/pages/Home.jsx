import React from 'react'
import Slider from '../components/Slider'
import MovieCard from '../components/MovieCard'
import Title from '../components/Title'
import { assets } from '../assets/assets.js'

const movies = [
    {
      id: 1,
      posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICAxODlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-laqwpcazag-portrait.jpg",
      title: "Bhool Bhulaiyaa 3",
      description: "U/A - Hindi"
    },
    {
      id: 2,
      posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICAxODlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-laqwpcazag-portrait.jpg",
      title: "Bhool Bhulaiyaa 3",
      description: "U/A - Hindi"
    },
    {
      id: 3,
      posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICAxODlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-laqwpcazag-portrait.jpg",
      title: "Bhool Bhulaiyaa 3",
      description: "U/A - Hindi"
    },
    {
      id: 4,
      posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICAxODlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-laqwpcazag-portrait.jpg",
      title: "Bhool Bhulaiyaa 3",
      description: "U/A - Hindi"
    },
    {
      id: 5,
      posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICAxODlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-laqwpcazag-portrait.jpg",
      title: "Bhool Bhulaiyaa 3",
      description: "U/A - Hindi"
    },
]

const Home = () => {
  return (
    <div>
      <Slider />
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Now'} text2={'Showing'} />
      </div>
      <div className='mx-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 gap-y-6'>
        {
          movies?.slice(0, 5)?.map((item, index) => (
            <MovieCard key={index} id={item.id} posterUrl={item.posterUrl} title={item.title} description={item.description} />
          ))
        }
      </div>
      <div className='text-center py-8 text-3xl mt-6'>
        <Title text2={'Lounges'} />
      </div>
      <div className='flex justify-center items-center gap-8 mb-16'>
        <img className='w-96' src={assets.l1} alt="" />
        <img className='w-96' src={assets.l2} alt="" />
        <img className='w-96' src={assets.l3} alt="" />
      </div>
    </div>
  )
}

export default Home