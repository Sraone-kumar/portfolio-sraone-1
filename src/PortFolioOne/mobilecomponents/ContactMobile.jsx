import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

export default function ContactMobile() {
  const [state, handleSubmit] = useForm("xovqzwab");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      <div className="flex min-h-screen flex-col bg-black">
        <div className="flex min-h-[50vh] items-center justify-center bg-white">
          <span className="text-3xl">Contact me</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex min-h-[50vh] flex-col  items-center gap-5 p-5"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full px-2 py-2 outline-none"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your email"
            name="mail"
            className="w-full px-2 py-2 outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <div className="flex h-[20vh] w-full flex-col border border-white">
            <div className="py-2 text-center text-white">
              Any message for me
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id=""
              cols="30"
              rows="10"
              className="p-2 outline-none"
              placeholder="Hello..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="messge"
              errors={state.errors}
            />
          </div>
          <button
            className="flex text-white w-fit rounded-full border px-4 py-2 font-bold hover:bg-white hover:text-black"
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
            <span className="text-white">
              Thanks for reaching out! I will contact you soon!
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}
