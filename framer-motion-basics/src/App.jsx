import React from 'react'
import "./App.css"
import { anticipate, motion, reverseEasing } from "motion/react"
function App() {
  return (
 <motion.div className='box'
 initial={{
  x:0,
  y:0,

 }}
 animate={{
  x:[0,500,800],
  y:[0,500,0],
rotate:360
 }}
 transition={{
  duration:4,
  ease:anticipate
  
 }}
 
 >

 </motion.div>
  )
}

export default App
