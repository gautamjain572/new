import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ title, posterUrl, id , description }) => {
  return (
    <div>
        <div className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img src={posterUrl} className='hover:scale-110 transition ease-in-out rounded-lg' alt="" />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-medium pt-3 pb-1 text-sm text-black hover:text-[#ea7700]'>{title}</p>
                        {/* <p className='text-sm font-medium'>{new Date(releaseDate).toLocaleDateString()}</p> */}
                        <p className='text-sm'>{description}</p>
                    </div>
                    <div className='mt-3'>
                       <Link to={`/booking/${id}`}><button className='text-white rounded-3xl px-2 py-1 text-sm hover:border border-gray-700 bg-[#ea7700] hover:text-white transition-all duration-500'>Book Ticket</button></Link> 
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MovieCard