export default function ContactMobile() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black">
        <div className="flex h-[50vh] items-center justify-center bg-white">
          <span className="text-3xl">Contact me</span>
        </div>
        <div className="flex h-[50vh] flex-col items-center gap-5 p-5">
          <input
            type="text"
            placeholder="name"
            className="w-full px-2 py-2 outline-none"
          />
          <input
            type="text"
            placeholder="email"
            className="w-full px-2 py-2 outline-none"
          />

          <div className="flex h-[20vh] w-full flex-col border border-white">
            <div className="py-2 text-center text-white">
              any message for me
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-2 outline-none"
              placeholder="Hello..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
