import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import info from "../../info";
// const data = [
//   { id: 1, value: 1 },
//   { id: 2, value: 2 },
//   { id: 3, value: 3 },
//   { id: 4, value: 4 },
//   { id: 5, value: 5 },
// ];

const useContainerDimensions = (myRef) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};

export default function ProjectsMobileV2() {
  const data = info.projects.values;

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const containerRef = useRef(null);
  const elementRef = useRef(null);

  const containerDimesions = useContainerDimensions(containerRef);
  const elementDimensions = useContainerDimensions(elementRef);

  const [current, setCurrent] = useState(0);

  const [x, setX] = useState(0);
  const [slide, setSlide] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
    if (isLeftSwipe) {
      handleClick("Inc");
    } else if (isRightSwipe) {
      handleClick("Dec");
    }
  };

  useEffect(() => {
    console.log("width container:", containerDimesions.width);
    console.log("slide value:", slide);

    if (!slide) {
      setSlide(Math.round(elementDimensions.width / 2));
    }
    setX(Math.round(containerDimesions.width / 2) - slide);
  }, [slide, containerDimesions.width, elementDimensions]);

  const handleClick = (action) => {
    if (action === "Inc") {
      if (current + 1 < data.length) {
        console.log("its here");
        setCurrent(current + 1);
        setX(x - elementDimensions.width);
        setSlide(slide + elementDimensions.width);
      }
      //  else {
      //   setCurrent(0);
      //   setX(containerRef.current.offsetWidth / 2 - 100);
      //   setSlide(Math.round(elementDimensions.width / 2));
      // }
    } else if (action === "Dec") {
      if (current - 1 >= 0) {
        setCurrent(current - 1);
        setX(x + elementDimensions.width);
        setSlide(slide - elementDimensions.width);
      }
      // else {

      //   setCurrent(data.length - 1);
      //   setX(
      //     -data.length * elementDimensions.width + 2 * elementDimensions.width
      //   );
      //   setSlide(
      //     data.length * elementDimensions.width -
      //       Math.round(elementDimensions.width / 2)
      //   );
      // }
    }
  };

  return (
    <div className="min-h-screen items-center w-full bg-black flex flex-col">
      <div className="text-xl mb-10 text-white">{info.projects.name}</div>
      <div className="flex p-2 w-full items-center justify-between">
        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onClick={() => handleClick("Dec")}
          className="flex items-center justify-center cursor-pointer bg-white w-fit p-4  text-white rounded-full"
        >
          <ChevronLeftIcon className="size-8 text-black" />
        </motion.div> */}

        <div
          ref={(el) => {
            containerRef.current = el;
            touchStart.current = el;

            touchEnd.current = el;
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          id="show-container"
          className="flex flex-grow items-center justify-start w-[300px] overflow-x-hidden min-h-[500px] "
        >
          <motion.div
            animate={{ x: x }}
            id=" slide-container"
            className="flex items-center justify-center"
          >
            {data.map((project, idx) => {
              if (current === idx) {
                return (
                  // <motion.div
                  //   animate={{ shadow: 10, opacity: 1 }}
                  //   key={id}
                  //   className="flex flex-col items-center justify-center min-w-[400px] min-h-[350px] rounded-md text-white h-[100px] bg-white"
                  // >
                  //   {/* {value} */}
                  //   <div className="h-1/2 rounded-t-md flex items-center justify-center bg-black w-full">
                  //     {value}
                  //   </div>
                  //   <div className="h-1/2 w-full"></div>
                  // </motion.div>
                  <div key={project.name} ref={elementRef}>
                    <ProjectCard
                      data={project}
                      animate={{ shadow: 10, opacity: 1 }}
                    />
                  </div>
                );
              } else {
                return (
                  // <motion.div
                  //   ref={elementRef}
                  //   animate={{ opacity: 0.1, scale: 0.9 }}
                  //   key={id}
                  //   className="flex flex-col items-center justify-center min-w-[400px] min-h-[350px] rounded-md text-white h-[100px] bg-white"
                  // >
                  //   {/* {value} */}
                  //   <div className="h-1/2 rounded-t-md flex items-center justify-center bg-black w-full">
                  //     {value}
                  //   </div>
                  //   <div className="h-1/2 w-full"></div>
                  // </motion.div>
                  <div key={project.name} ref={elementRef}>
                    <ProjectCard
                      animate={{ opacity: 0.1, scale: 0.9 }}
                      data={project}
                    />
                  </div>
                );
              }
            })}
          </motion.div>
        </div>

        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onClick={() => handleClick("Inc")}
          className="flex items-center justify-center cursor-pointer bg-white w-fit p-4 rounded-full text-white "
        >
          <ChevronRightIcon className="size-8 text-black" />
        </motion.div> */}
      </div>
      <div className="flex gap-2">
        {data.map((_, idx) => {
          return (
            <div
              key={idx}
              className={` size-3 flex ${
                current === idx ? "bg-white" : "bg-white/75"
              } rounded-full`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ animate, data }) {
  const { name, info, tags, livelink, githublink } = data;
  return (
    <motion.div
      animate={animate}
      className="flex h-[600px] w-[20rem] flex-col items-center justify-end  border-2 bg-black"
    >
      <motion.div className="flex h-[50%] w-full text-2xl justify-center items-center rounded-t-3xl p-5 text-center text-white">
        {/* name of the project */}
        {name}
      </motion.div>

      <motion.div className="flex flex-col justify-between h-[50%] w-full  bg-white p-5">
        <motion.ul className="font-light text-sm">
          {info.map((sentence, idx) => {
            return <li key={idx}>{sentence}</li>;
          })}
        </motion.ul>

        <motion.div className="flex flex-wrap py-2 gap-2">
          {/* <div className=" bg-black text-white text-xs font-normal rounded-3xl py-1 px-2 flex items-center justify-center">
            react
          </div> */}
          {tags.map((value, idx) => {
            return (
              <div
                key={idx}
                className=" bg-black text-white text-xs font-normal rounded-3xl py-1 px-2 flex items-center justify-center"
              >
                {value}
              </div>
            );
          })}
        </motion.div>
        <motion.div className="flex  items-center justify-between">
          <a
            href={githublink}
            target="__blank"
            className="flex text-s font-normal items-center gap-2"
          >
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
          </a>
          <a
            href={livelink}
            target="_blank"
            className="flex  text-s font-semibold items-center gap-2"
          >
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
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
