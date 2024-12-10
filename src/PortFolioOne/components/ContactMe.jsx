import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";

export default function ContactMe({ li }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xovqzwab");

  // if (state.succeeded) {
  //   return <p>Thanks for reaching out! I will contact you soon!</p>;
  // }

  const ref = useRef(null);
  useEffect(() => {
    li(ref);
  }, [li]);

  useEffect(() => {
    // console.log("here");
    if (state.succeeded) {
      setEmail("");
      setMessage("");
      setName("");
    }
  }, [state.succeeded]);

  return (
    <>
      <div ref={ref} className="flex min-h-screen items-center justify-center">
        <div className="flex min-h-screen w-full flex-wrap text-black">
          <div className="flex w-[50%] items-center justify-center bg-white">
            <span className="font-sans text-[50px]">Contact me</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex w-[50%] flex-col items-center justify-center gap-5 bg-black p-20 text-white"
          >
            <div className="flex  h-[50px] w-full">
              <label
                className="text-nowrap overflow-hidden flex w-28 items-center justify-center  border-2 p-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full  px-2 pr-3 text-black outline-none"
                name="name"
                type="text"
                placeholder="enter your name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex  h-[50px] w-full">
              <label
                className="text-nowrap overflow-hidden flex w-28 items-center justify-center  border-2 p-2"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  px-2 pr-3 text-black outline-none"
                name="email"
                type="text"
                placeholder="example@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="lets collab.."
                className="h-[200px]  p-5 text-black outline-none"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="messge"
                errors={state.errors}
              />
            </div>
            <button
              className="flex w-fit min-w-20 items-center justify-center rounded-full border px-4 py-2 font-bold hover:scale-105 active:scale-95"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <div className="size-5 border-2 transition-all ease-in-out animate-spin border-white border-b-black rounded-full "></div>
              ) : (
                "Send"
              )}
            </button>
            {state.succeeded ? (
              <span>Thanks for reaching out! I will contact you soon!</span>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </>
  );
}
