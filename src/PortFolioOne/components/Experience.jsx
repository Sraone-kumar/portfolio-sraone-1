import { useEffect, useRef, useState } from "react";
import info from "../../info";
export default function Experience({ li }) {
  const experience = info.experience.values;
  // const [toggle, setToggle] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    console.log("here in Experience");
    li(ref);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="flex min-h-screen flex-col pb-20 items-center bg-black"
      >
        <div className="my-10 text-3xl text-white">{info.experience.name}</div>

        {experience.map((data, idx) => {
          return <ExperienceCard key={idx} count={idx} data={data} />;
        })}
      </div>
    </>
  );
}

function ExperienceCard({ data, count }) {
  return count % 2 === 0 ? (
    <div className="flex min-h-[30vh] w-[80%] rounded-full">
      <div className="flex flex-col p-3 w-[50%]  bg-white">
        <span className="font-thin text-xs">
          {/* MAR 2023-PRESENT */}
          {data.date}
        </span>

        <span className=" ">{`${data.designation} | ${data.company}`}</span>
        {data.details.map((sentence, idx) => {
          return (
            <span key={idx} className="text-sm mb-2 font-extralight">
              {/* Developed a web dash board that provides status of a security
          application. */}
              {sentence}
            </span>
          );
        })}
      </div>
      <div className="flex w-[50%]"></div>
    </div>
  ) : (
    <div className="flex min-h-[30vh] w-[80%] rounded-full">
      <div className="flex w-[50%] "></div>
      <div className="flex flex-col p-3 w-[50%]  bg-white">
        <span className="font-thin text-sm">
          {/* MAR 2023-PRESENT */}
          {data.date}
        </span>
        <span className=" ">{`${data.designation} | ${data.company}`}</span>
        {data.details.map((sentence, idx) => {
          return (
            <span key={idx} className="text-sm mb-2 font-extralight">
              {/* Developed a web dash board that provides status of a security
          application. */}
              {sentence}
            </span>
          );
        })}
      </div>
    </div>
  );
}
