import React from 'react'

export const Posts = ({posts,loading}) => {
    return (
        <div>
           { loading?(<h2>Loading...</h2>):( 
                <ul className='list-group mb-4'>
                    {
                        posts.map((post)=>(
                           <li key={post.id} className='list-group-item'>{post.title} </li> 
                        ))
                    }

                </ul>

                )}
        </div>
    )
}
