import { NextPage } from 'next'
import React from 'react'

const UserPage:NextPage<{params:string}> = ({params}) => {
    console.log(params);
    
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      UserPage
    </div>
  )
}

export default UserPage
