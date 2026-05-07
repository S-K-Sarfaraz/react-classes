import React from 'react'

const BlogPost = async (props) => {

    const name = await props.params

  return (
    <div>
        <div>BlogPost {name.slug}</div>
    </div>
  )
}

export default BlogPost