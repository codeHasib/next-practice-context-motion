"use client";

import { motion, spring } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [hit, setHit] = useState(false);

  const target = { x: 150, y: 50, size: 150 };

  const checkInside = (dragX, dragY) => {
    const isInside =
      dragX > target.x &&
      dragX < target.x + target.size &&
      dragY > target.y &&
      dragY < target.y + target.size;

    if (isInside && !hit) {
      setScore((prev) => prev + 1);
      setHit(true);
    }

    if (!isInside) {
      setHit(false);
    }
  };
  return (
    <>
      <div className="min-h-[60vh] bg-green-300 w-full py-4 px-5 font-extrabold relative">
        <h3 className="text-xl font-bold text-white text-center">
          Score: {score}
        </h3>
        <div
          className="border-8 border-red-500 absolute"
          style={{
            width: target.size,
            height: target.size,
            left: target.x,
            top: target.y,
            position: "absolute",
          }}
        />
        <motion.div
          className="h-15 w-15 rounded-full bg-red-300 flex justify-center items-center text-[14px] absolute"
          initial={{ y: 460, x: 460 }}
          drag
          dragConstraints={{ top: 0, bottom: 450, right: 800, left: 0 }}
          onDrag={(e, info) => {
            checkInside(info.offset.x, info.offset.y);
          }}
        >
          THROW
        </motion.div>
      </div>
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
