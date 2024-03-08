import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HomeTwo({ li }) {
  const ref = useRef();

  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate(
      scope.current,
      { rotate: -45 },
      {
        type: "spring",
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }
    );
    await animate(
      scope.current,
      { rotate: 360, x: 0, borderRadius: ["0%", "50%"] },
      {
        type: "spring",
        duration: 1,
        ease: "easeIn",
      }
    );
    await animate(
      scope.current,
      { scale: 1, borderRadius: ["50%", "0%"] },
      {
        type: "spring",
        duration: 0.5,
        ease: "easeInOut",
      }
    );
  }

  useEffect(() => {
    myAnimation();
  }, []);

  useEffect(() => {
    li(ref);
  }, [li]);

  let width = document.body.scrollWidth;

  return (
    <>
      <motion.div
        ref={ref}
        className="flex min-h-screen flex-wrap mb-5 text-white"
      >
        <div className="flex w-[50%] items-center justify-center">
          <motion.span
            variants={{
              initial: { opacity: 0, y: -50 },
              next: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="next"
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 2.35,
              ease: "easeInOut",
            }}
            className="font-sans text-[50px]"
          >
            Sravan Kumar
          </motion.span>
        </div>
        <motion.div
          ref={scope}
          variants={{
            initial: { scale: 0.5, x: -width / 2 },
            middle1: { rotate: -45 },
            middle2: { rotate: 0 },
            next: { rotate: 360, scale: 1, x: 0 },
          }}
          initial="initial"
          // animate={["middle2", "middle1"]}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="flex flex-col  w-[50%]  justify-center gap-5 bg-white p-5 text-black"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 2.5,
              ease: "easeInOut",
            }}
            className="font-bold text-3xl"
          >
            Software Developer
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 2.75,
              ease: "easeInOut",
            }}
            className="font-sans text-[20px] font-thin"
          >
            I'm a sofware developer skilled in React, Node.js, python and Django
            and can build different web applications.
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
