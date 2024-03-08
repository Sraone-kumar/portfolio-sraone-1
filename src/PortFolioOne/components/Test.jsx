import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  open: { opacity: 0 },
  close: { opacity: 1 },
};

const boxSlideVariants = {
  slideInitial: { y: -300 },
  slideStart: { y: 0 },
};

const transition = { delay: 0.5 };
const textTransition = { delay: 1 };

export default function Test({ isInView }) {
  const animateComp = useAnimation();
  const animateBox = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateBox.start("slideStart");
      animateComp.start("close");
    } else {
      animateBox.set("slideInitial");
      animateComp.set("open");
    }
  }, [isInView]);

  return (
    <>
      {/* <div className="flex items-center justify-center   min-h-screen"> */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut" }}
        className="flex h-[600px] w-[350px] flex-col items-center justify-end  border-2 bg-black"
      >
        <motion.div
          variants={variants}
          initial="open"
          animate={animateComp}
          transition={transition}
          className="flex h-[50%] w-full text-2xl justify-center items-center rounded-t-3xl p-5 text-center text-white"
        >
          Twitter Clone
        </motion.div>

        <motion.div
          variants={boxSlideVariants}
          initial="slideInitial"
          animate={animateBox}
          transition={{ type: "just", delay: 0.5 }}
          className="flex flex-col justify-between h-[50%] w-full  bg-white p-5"
        >
          <motion.ul
            variants={variants}
            initial="open"
            animate={animateComp}
            transition={textTransition}
            className=" font-thin text-xs"
          >
            <li>
              A simple twitter or X clone with features like posts/tweets,
              profile, chats, group chats.
            </li>
            <li>
              Real time messaging using socket.io and notifications using
              pushnotifications.
            </li>
          </motion.ul>

          <motion.div
            variants={variants}
            initial="open"
            animate={animateComp}
            transition={textTransition}
            className="flex flex-wrap py-2 gap-2"
          >
            <div className=" bg-black text-white text-xs font-normal rounded-3xl py-1 px-2 flex items-center justify-center">
              react
            </div>
            <div className=" bg-black text-white text-xs font-normal rounded-3xl py-1  px-2 flex items-center justify-center">
              node
            </div>
            <div className=" bg-black text-white text-xs font-normal rounded-3xl py-1 px-2 flex items-center justify-center">
              mongodb
            </div>
            <div className=" bg-black text-white text-xs font-normal rounded-3xl py-1 px-2 flex items-center justify-center">
              pug
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="open"
            animate={animateComp}
            transition={textTransition}
            className="flex items-center justify-between"
          >
            <div className="flex text-s font-semibold items-center gap-2">
              <svg
                viewBox="0 30 100 30"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="#000000"
                />
              </svg>
              github
            </div>
            <div className="flex  text-s font-semibold items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              live
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* </div>
       */}
    </>
  );
}
