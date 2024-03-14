import { useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Test from "./Test";

export default function Projects({ li }) {
  const ref = useRef(null);

  const isInView = useInView(ref);

  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start("animateRes");
    } else {
      animate.start("default");
    }
  }, [isInView]);

  useEffect(() => {
    li(ref);
  }, [ref]);

  return (
    <>
      <div
        ref={ref}
        id="project"
        className="flex min-h-screen flex-col items-center bg-black"
      >
        <div className="my-7 text-3xl mb-10 text-white">Projects</div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* <motion.div
            
            variants={{
              default:{opacity:0,x:-50},
              animateRes:{opacity:1,x:0}
            }}

            initial="default"
            animate={animate}

            transition={{type:"spring",duration:0.2,delay:0.15}}
            
            className="flex h-[400px] w-[250px] flex-col items-center justify-evenly  border bg-black duration-100 ease-in hover:scale-95">
              <div className="flex h-[50%] w-full items-center rounded-t-3xl p-5 text-center text-white">
                project one - can insert img if possible
              </div>
              <div className="h-[50%] w-full  bg-white p-5">
                Write some thing like what is this project is about..
              </div>
            </motion.div>
  
            <motion.div
            
            variants={{
              default:{opacity:0,y:-50},
              animateRes:{opacity:1,y:0}
            }}

            initial="default"
            animate={animate}

            transition={{ type:"spring" ,duration:0.25,delay:0.35}}
            
            className="flex h-[400px] w-[250px] flex-col items-center justify-evenly  border bg-black duration-100 ease-in hover:scale-95">
              <div className="flex h-[50%] w-full items-center rounded-t-3xl p-5 text-center text-white">
                project one - can insert img if possible
              </div>
              <div className="h-[50%] w-full  bg-white p-5">
                Write some thing like what is this project is about..
              </div>
            </motion.div>
  
            <motion.div
            
            variants={{
              default:{opacity:0,x:50},
              animateRes:{opacity:1,x:0}
            }}

            initial="default"
            animate={animate}

            transition={{type:"spring",duration:0.25,delay:0.45}}
            
            className="flex h-[400px] w-[250px] flex-col items-center justify-evenly  border bg-black duration-100 ease-in hover:scale-95">
              <div className="flex h-[50%] w-full items-center rounded-t-3xl p-5 text-center text-white">
                project one - can insert img if possible
              </div>
              <div className="h-[50%] w-full  bg-white p-5">
                Write some thing like what is this project is about..
              </div>
            </motion.div> */}

          <Test isInView={isInView} />
          {/* <Test isInView={isInView} /> */}
          {/* <Test isInView={isInView}/> */}
        </div>
      </div>
    </>
  );
}
