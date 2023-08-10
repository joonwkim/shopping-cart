'use client'
import { useSession } from "next-auth/react"

const MePage = () => {
    const { data } = useSession()

  if(data ==null){
    return (
    
      <h5>로그인 해야 프로파일을 볼 수 있습니다.</h5>
    )
  }
  return (
    
    <h2>{JSON.stringify(data, null, 2)}</h2>
  )
}

export default MePage