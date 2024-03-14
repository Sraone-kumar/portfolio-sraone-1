export default function ProjectsMobile() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-6 bg-black p-6">
        <div className="text-xl text-white">Projects</div>
        <div className="flex h-[500px] w-[80%] min-w-[300px] flex-col items-center border">
          <div className="flex h-[50vh] w-full items-center justify-center text-white">
            Twitter
          </div>
          <div className="flex h-[50vh] w-full items-center justify-center bg-white"></div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
          <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
          <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
        </div>
      </div>
    </>
  );
}
