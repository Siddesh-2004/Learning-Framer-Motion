import React from 'react'
import "./App.css";
import {motion,useScroll} from 'motion/react'

function App() {
  console.log(useScroll().scrollYProgress)
  // console.log(motion)
  return (
 <div className='box'
 
 >
 <motion.div className='bg-red-500 w-full h-3 fixed top-0 left-0'
 style={{
  scaleX:useScroll().scrollYProgress
 }}
 >

 </motion.div>


<h1 className='text-8xl text-center'>Framer motion</h1>
<p className='text-amber-300 text-center font-bold text-4xl'>
The evening sky stretched endlessly, painted in hues of soft amber and pale violet, as a gentle breeze carried the faint scent of blooming jasmine through the quiet streets. A distant hum of life echoed from the marketplace, where vendors called out their final offers before closing for the night. Lanterns flickered to life, their warm glow spilling over cobblestone paths, guiding late wanderers home. Somewhere nearby, the rhythmic sound of footsteps grew softer until they merged with the city’s natural hush. Time seemed to slow, wrapping everything in a blanket of calm. Even the restless waves at the harbor seemed to move with a careful patience, glistening under the silver touch of the rising moon. In a small café tucked between two weathered buildings, an old man stirred his tea, lost in thoughts only he could understand. A faded photograph rested beside his cup, its edges curled with age, holding a story that no one had asked to hear. Life moved on around him, yet in that moment, the world felt still, as if pausing to remember something important. Somewhere in the quiet, the night promised that morning would come, as it always had, bringing with it both change and familiarity.

Do you want me to also give you a "lorem ipsum" style 200-word version for React testing? That’s more common for coding.<br></br>
The evening sky stretched endlessly, painted in hues of soft amber and pale violet, as a gentle breeze carried the faint scent of blooming jasmine through the quiet streets. A distant hum of life echoed from the marketplace, where vendors called out their final offers before closing for the night. Lanterns flickered to life, their warm glow spilling over cobblestone paths, guiding late wanderers home. Somewhere nearby, the rhythmic sound of footsteps grew softer until they merged with the city’s natural hush. Time seemed to slow, wrapping everything in a blanket of calm. Even the restless waves at the harbor seemed to move with a careful patience, glistening under the silver touch of the rising moon. In a small café tucked between two weathered buildings, an old man stirred his tea, lost in thoughts only he could understand. A faded photograph rested beside his cup, its edges curled with age, holding a story that no one had asked to hear. Life moved on around him, yet in that moment, the world felt still, as if pausing to remember something important. Somewhere in the quiet, the night promised that morning would come, as it always had, bringing with it both change and familiarity.

Do you want me to also give you a "lorem ipsum" style 200-word version for React testing? That’s more common for coding.
</p>
 </div>
  )
}

export default App
