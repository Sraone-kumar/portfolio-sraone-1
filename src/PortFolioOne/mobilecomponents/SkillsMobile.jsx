export default function SkillsMobile() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-6 bg-black p-6">
        <div className="text-xl text-white">skills</div>
        <div className="flex h-[20vh] min-h-[100px] w-full flex-col border">
          <div className="flex h-[50vh] items-center justify-center text-xs text-white">
            languages
          </div>
          <div className="flex h-[50vh] items-center justify-center bg-white">
            <div className="flex items-center justify-evenly gap-4 rounded-full bg-black p-2 px-4 text-xs text-white">
              <span>java</span>
              <span>python</span>
              <span>javascript</span>
            </div>
          </div>
        </div>
        <div className="flex h-[20vh] min-h-[100px] w-full flex-col border">
          <div className="flex h-[50vh] items-center justify-center text-xs text-white">
            Frameworks
          </div>
          <div className="flex h-[50vh] bg-white"></div>
        </div>
      </div>
    </>
  );
}
