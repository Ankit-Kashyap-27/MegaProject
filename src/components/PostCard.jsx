import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <div>
      <Link to={`/post/${$id}`} >
        <div className=" w-full bg-gray-100 rounded-xl p-4 ">
          <div className="w-full justify-center mb-4  ">

            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-52 object-cover rounded-lg' />

          </div>
          <h2 className='text-xl font-semibold text-gray-800 mt-2'>{title}</h2>
        </div>
      </Link>

    </div>
  )
}

export default PostCard
