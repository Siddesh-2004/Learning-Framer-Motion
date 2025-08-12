//example for using variants
"use client";
// import * as motion from 'motion/react-client'
import { motion } from "motion/react";
import { useState } from "react";
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 2, rotateZ: 360 },
  exit: { opacity: 0, scale: 0.5 },
};
export default function Home() {
  const comments = [
   "Hai , Good Morning",
   "Hope you have a nice day"
  ];
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <motion.div
        initial="hidden"
        variants={variants}
        animate={isVisible ? "visible" : "hidden"}
        transition={{
          duration: 0.5,
        }}
        onClick={() => {
          setIsVisible((prev) => !prev);
          if(!isVisible){
            if(index===comments.length-1)
           {
          setIndex(0)
          return;
           }
            setIndex(prev=>prev+1)
          }
        }}
        exit="exit"
        className="box"
      >
        <p className="font-bold font-mono text-center">Siddesh</p>
        <p className="font-bold font-serif text-center">
          {comments[index]}
        </p>
      </motion.div>
    </>
  );
}
