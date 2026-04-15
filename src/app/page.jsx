"use client";

import Image from "next/image";
import { motion, spring } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div className="min-h-screen flex justify-center items-center flex-col gap-[650px] py-50">
        <motion.div
          className="h-90 w-90 bg-white border-8 border-red-400 rounded-4xl"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="h-90 w-90 bg-white border-8 border-red-400 rounded-4xl"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="h-90 w-90 bg-white border-8 border-red-400 rounded-4xl"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>
        <div className="bg-white py-8 px-4 w-full flex justify-center items-center gap-10">
          <motion.div
            className="h-20 w-20 bg-red-400 rounded-full flex justify-center items-center text-4xl font-extrabold"
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              type: spring,
              stiffness: 300,
              damping: 15,
            }}
          >
            1
          </motion.div>
          <motion.div
            className="h-20 w-20 bg-red-400 rounded-full flex justify-center items-center text-4xl font-extrabold"
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              type: spring,
              stiffness: 300,
              damping: 15,
              delay: 0.4,
            }}
          >
            2
          </motion.div>
          <motion.div
            className="h-20 w-20 bg-red-400 rounded-full flex justify-center items-center text-4xl font-extrabold"
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              type: spring,
              stiffness: 300,
              damping: 15,
              delay: 0.8,
            }}
          >
            3
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
