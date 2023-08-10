import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const Adminpage = async () => {
  const session = await getServerSession(authOptions)

  if(!session?.user.roles.includes('ADMIN')){
    return (<>
      <h1>This page is protected for admin user</h1>
      <p>관리자로 등록되어 있지 않습니다.</p>
    </>)
  }
  else{
    return (<>
      <h1>관리자 화면입니다.</h1>
    </>
  
    )
  }
  
}

export default Adminpage