import Image from 'next/image'
import React from 'react'

const Widget = () => {
  return (
    <div id="widget" className="fixed bottom-1 right-3 md:right-5 md:bottom-5 z-10">
        {/* Phone */}
        <div className="w-14 h-14">
            <a href="tel:+84869073435" className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 rounded-full animate-[zoomInZoomOut_1s_ease-in-out_infinite] bg-[#9addf5] z-10" />
                <div className="absolute w-9 h-9 rounded-md bg-[#0c784c] z-20" />
                <Image 
                  src="/images/phone1.svg"
                  alt="phone"
                  width={28}
                  height={28}
                  className="absolute z-30"
                  />
            </a>
        </div>
    </div>
  )
}

export default Widget