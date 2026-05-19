import React from 'react'
import PostCard from '../component/ui/post-card'
import { apiClient } from '../lib/ApiClient';

const page = async() => {
  const res = await apiClient.get("/posts",{
    next: {
      revalidate: 60*5, // Revalidate every 60 seconds
    }
    
  } );  
  return (
    <div className="container space-y-3">
      <h1 className="text-center mt-9 mb-5">About Us</h1>
      {
        res.posts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))

      }
       
    </div>
  )
}

export default page;
