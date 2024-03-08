import { useEffect, useRef } from "react";

export default function ContactMe({ li }) {
  const ref = useRef(null);
  useEffect(() => {
    li(ref);
  }, [li]);

  return (
    <>
      <div ref={ref} className="flex min-h-screen items-center justify-center">
        <div className="flex min-h-screen w-full flex-wrap text-black">
          <div className="flex w-[50%] items-center justify-center bg-white">
            <span className="font-sans text-[50px]">Contact me</span>
          </div>
          <div className="flex w-[50%] flex-col items-center justify-center gap-5 bg-black p-10 text-white">
            <div className="flex  h-[10vh] w-full">
              <label
                className="text-nowrap overflow-hidden flex w-28 items-center justify-center  border-2 p-2"
                htmlFor="mail"
              >
                Your mail
              </label>
              <input
                className="w-full  px-2 pr-3 text-black outline-none"
                name="mail"
                type="text"
                placeholder="example@email.com"
              />
            </div>
            <div className="flex w-full flex-col  border-2">
              <label
                className="flex items-center justify-center py-3"
                htmlFor="message"
              >
                Any message for me
              </label>
              <textarea
                placeholder="lets collab.."
                className="h-[200px]  p-5 text-black outline-none"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              className="flex w-fit rounded-full border px-4 py-2 font-bold hover:bg-white hover:text-black"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
