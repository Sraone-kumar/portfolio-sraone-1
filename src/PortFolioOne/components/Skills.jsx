import { useEffect, useRef } from "react";
import info from "../../info";

export default function Skills({ li }) {
  const { languages, cloud, frameworks, databases, devops, other } =
    info.skills;

  const ref = useRef(null);
  useEffect(() => {
    li(ref);
  }, [li]);

  return (
    <>
      <div
        ref={ref}
        className="flex min-h-screen flex-col items-center gap-5 bg-black py-5"
      >
        <div className="my-6 text-3xl text-white">{info.skills.name}</div>

        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center text-white">
              {/* Programming Skills */}
              {languages.name}
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center bg-white px-2">
              <div className="flex gap-5 rounded-full bg-black px-5 py-2 text-white">
                {languages.values.map((value) => {
                  return <span key={value}>{value}</span>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center bg-white">
              {/* Frameworks */}
              {frameworks.name}
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center px-2">
              <div className="flex gap-5 rounded-full bg-white px-5 py-2">
                {frameworks.values.map((value) => {
                  return <span key={value}>{value}</span>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center text-white">
              {/* Databases */}
              {databases.name}
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center bg-white px-2">
              <div className="flex gap-5 rounded-full bg-black px-5 py-2 text-white">
                {databases.values.map((value) => {
                  return <span key={value}>{value}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center bg-white">
              {/* Cloud platforms */}
              {cloud.name}
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center px-2">
              <div className="flex gap-5 rounded-full bg-white px-5 py-2">
                {cloud.values.map((value) => {
                  return <span key={value}>{value}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center text-white">
              {/* DevOps Tools */}
              {devops.name}
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center bg-white px-2">
              <div className="flex gap-5 rounded-full bg-black px-5 py-2 text-white">
                {devops.values.map((value) => {
                  return <span key={value}>{value}</span>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center bg-white">
              {/* Other Tools */}
              {other.name}
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center px-2">
              <div className="flex gap-5 rounded-full bg-white px-5 py-2">
                {other.values.map((value) => {
                  return <span key={value}>{value}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
