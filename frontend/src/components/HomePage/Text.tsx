import { AnimatePresence, motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useState } from "react";

const Text = () => {
  const heading = "EDUCATION";
  const subHeading = "THE BEST PLACE FOR ";
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isInView) {
      control.start({ opacity: 1, x: 0 });
    }
    intervalId = setInterval(() => {
      control.start({
        x: [-28, 0],
        opacity: [0, 1],
      });
    }, 5000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isInView, control]);

  return (
    <div>
      <div className="w-full h-120 flex ">
        <div className="text-2xl flex-col ml-20 w-full h-20 pr-20 mt-55">
          <h1 className="flex justify-end mr-75 text-black/30 font-light">
            <AnimatePresence>
              {subHeading.split("").map((char, i) => (
                <motion.p
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={control}
                  exit="hidden"
                  transition={{ duration: 0.5, delay: i * 0.01 }}
                  className="text-2xl text-center sm:text-2xl font-bold tracking-tighter md:text-2xl md:leading-[4rem]"
                >
                  {char === " " ? <span>&nbsp;</span> : char}
                </motion.p>
              ))}
            </AnimatePresence>
          </h1>
          <h1 className="flex justify-end text-black/30">
            <AnimatePresence>
              {heading.split("").map((char, i) => (
                <motion.p
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={control}
                  exit="hidden"
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-[100px] md:leading-[4rem]"
                >
                  {char === " " ? <span>&nbsp;</span> : char}
                </motion.p>
              ))}
            </AnimatePresence>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Text;
