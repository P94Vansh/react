import { useParams } from 'react-router'
import React from 'react'

function User() {
    const {id}=useParams()
  return (
    <div>
      Id:{id}
    </div>
  )
}

export default User
