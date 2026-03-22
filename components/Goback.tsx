import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Goback() {
    const router = useRouter()
  return (
    <Button  className='rounded-full bg-neutral-200 text-black' size="icon-lg" onClick={() => router.back()}>
  <ArrowLeft />
</Button>
  )
}
