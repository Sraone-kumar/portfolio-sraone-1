import {motion} from "framer-motion"
import { useEffect, useRef } from "react";

export default function Home({li}) {


  const ref = useRef();

  useEffect(()=>{
    li(ref);
  },[ref])

    let width = document.body.scrollWidth;

    return (
      <>
        <motion.div ref={ref}
        className="flex min-h-screen flex-wrap mb-5 text-white">
          <div className="flex w-[50%] items-center justify-center">
            <motion.span 
            
            variants={{

                initial:{opacity:0,y:-50},
                next:{opacity:1,y:0}
            }}
    
            initial = "initial"
            animate="next"
    
            transition={{ type:"spring", duration:0.5,delay:0.5 ,ease:"easeInOut"}}
            
            className="font-sans text-[50px]">Sravan Kumar</motion.span>
          </div>
          <motion.div
          

          variants={{

            initial:{x:-width/2},
            next:{x:0}
        }}

        initial = "initial"
        animate="next"

        transition={{ type:"spring", duration:0.5,delay:0.25 ,ease:"easeInOut"}}
            
          
          className="flex flex-col  w-[50%]  justify-center gap-5 bg-white p-5 text-black">
            <motion.span 
                initial={{
                    opacity:0,y:-50
                }}
        
                animate={{
                    opacity:1,y:0
                }}
        
                transition={{ type:"spring", duration:0.5, delay:0.75, ease:"easeInOut" }}
            
            
            className="font-bold text-3xl">Software Developer</motion.span>
            <motion.span 
            
            initial={{
                opacity:0,y:-50
            }}
    
            animate={{
                opacity:1,y:0
            }}
    
            transition={{ type:"spring", duration:0.5, delay:0.85, ease:"easeInOut" }}
            
            className="font-sans text-[20px] font-thin">
              I'm a sofware developer skilled in React, Node.js, python and Django
              and can build different web applications.
            </motion.span>
          </motion.div>
        </motion.div>
      </>
    );
  }
  