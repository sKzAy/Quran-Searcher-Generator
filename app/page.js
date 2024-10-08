import React from 'react'
import Ayah from '@/components/Ayah'
import "@/components/Ayah.css"
import Search from '@/components/Search'


const Page = () => {
  return (<>
<div className="absolute inset-0 -z-10 min-h-max w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div>
        <Ayah/>
    </div>
    <br />
    <div>
    <Search/>
    </div>
    </div>
    </>
  )
}

export default Page



