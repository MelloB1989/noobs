import React from 'react'
import { useParams } from 'react-router-dom'

export default function Blogs() {
  const params = useParams();
  return (
    <div>
      {params.category}
    </div>
  )
}
