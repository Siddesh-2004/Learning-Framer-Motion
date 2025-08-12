import React from 'react'
import * as motion from "motion/react-client"
function waveLoader() {
  return (
   <div className='flex space-x-2'>
      {
       [...Array(3)].map((_,index)=>(
        
       
   <motion.div
     key={index}
     className="w-8 h-8 rounded-full bg-teal-500"
     animate={{ scaleY: [1, 2, 1] }}
     transition={{
       duration: 1.2,
       repeat: Infinity,
       ease: "easeInOut",
       repeatDelay: index * 0.1,
     }}
   />
   
   
   
       ))
      }
      </div>
  )
}

export default waveLoader
