import { useEffect, useRef } from "react";

export default function Skills({ li }) {
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
        <div className="my-6 text-3xl text-white">SKILLS</div>

        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center text-white">
              Programming Skills
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center bg-white px-2">
              <div className="flex gap-5 rounded-full bg-black px-5 py-2 text-white">
                <span>javascript</span>
                <span>python</span>
                <span>java</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center bg-white">
              Frameworks
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center px-2">
              <div className="flex gap-5 rounded-full bg-white px-5 py-2">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Django</span>
                <span>Android Studio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center text-white">
              Databases
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center bg-white px-2">
              <div className="flex gap-5 rounded-full bg-black px-5 py-2 text-white">
                <span>MySql</span>
                <span>MongoDB</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center bg-white">
              Cloud platforms
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center px-2">
              <div className="flex gap-5 rounded-full bg-white px-5 py-2">
                <span>AWS</span>
                <span>EC2</span>
                <span>S3</span>
                <span>Lambda</span>
                <span>Heroku</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center text-white">
              DevOps Tools
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center bg-white px-2">
              <div className="flex gap-5 rounded-full bg-black px-5 py-2 text-white">
                <span>Git</span>
                <span>GitHub</span>
                <span>Jira</span>
                <span>Jenkins</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 border border-white">
          <div className="flex h-[80px] min-w-[1000px]">
            <div className="flex w-[50%] items-center justify-center bg-white">
              Other Tools
            </div>
            <div className="flex w-[50%] flex-wrap items-center justify-center px-2">
              <div className="flex gap-5 rounded-full bg-white px-5 py-2">
                <span>VScode</span>
                <span>Jest</span>
                <span>Postman</span>
                <span>ChromeDevTools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
