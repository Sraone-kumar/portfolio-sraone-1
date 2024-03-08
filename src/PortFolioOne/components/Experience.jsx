import { useEffect, useRef } from "react";

export default function Experience({li}) {

    const ref = useRef(null);
    useEffect(()=>{
      console.log("here in Experience")
      li(ref);
    },[])

    return (
      <>
        <div ref={ref} className="flex min-h-screen flex-col items-center bg-black">
          <div className="my-10 text-3xl text-white">Experience</div>
  
          <div className="flex h-[30vh] w-[80%] rounded-full">
            <div className="flex flex-col p-3 w-[50%]  bg-white">
              <span className="font-thin text-xs">MAR 2023-PRESENT</span>
              <span className=" font-">Programmer Analyst | cognizant</span>
              <span className="text-sm font-extralight">
                Developed a web dash board that provides status of a security
                application.
              </span>
            </div>
            <div className="flex w-[50%]"></div>
          </div>
  
          <div className="flex h-[30vh] w-[80%] rounded-full">
            <div className="flex w-[50%] "></div>
            <div className="flex flex-col p-3 w-[50%]  bg-white">
              <span className="font-thin text-xs">SEP 2022- MAR 2023</span>
              <span className=" font-">Intern | cognizant</span>
              <span className="text-sm font-extralight">
                Developed a software to automate the process to health check
                security application.
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
  