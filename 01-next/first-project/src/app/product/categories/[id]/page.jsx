import React from 'react'

const ChildProduct = async ({params}) => {
    const {id} = await params
  return (
    <div> this page is dynamically create for {id}</div>
  )
}

export default ChildProduct