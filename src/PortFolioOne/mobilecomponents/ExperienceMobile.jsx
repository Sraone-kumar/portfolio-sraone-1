export default function ExperienceMobile() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-6 bg-black p-6">
        <div className="text-xl text-white">Experience</div>

        <div className="flex w-full flex-col items-center">
          <div className="flex h-[100px] w-full min-w-[200px] flex-col bg-white p-3">
            <span className="text-xs">
              Programmer analyst | JAN 2023 - PRESENT
            </span>
          </div>
          <div className="flex h-[50px] w-0 flex-col border bg-white"></div>
          <div className="flex h-[100px] w-full min-w-[200px] flex-col bg-white p-3">
            <span className="text-xs">
              Programmer analyst | SEP 2022 - DEC 2022
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
