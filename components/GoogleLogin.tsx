'use client'

import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const GoogleSignin = () => {
  return (
    <div>
      <GoogleLogin onSuccess={cred => console.log(cred)}/>
    </div>
  )
}

export default GoogleSignin
