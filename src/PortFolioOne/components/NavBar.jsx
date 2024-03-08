import { animate, color, motion, spring } from "framer-motion";
import { useEffect } from "react";

export default function NavBar({
  experience,
  contact,
  home,
  projects,
  skills,
}) {
  // useEffect(()=>{
  //   console.log(experience)
  //   console.log(contact)
  // },[experience,contact])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 0.25,
          delay: 2.3,
          ease: "easeInOut",
        }}
        className="fixed top-0 z-30 w-full shadow-md"
      >
        <nav className="flex h-[10vh]  items-center justify-center gap-24 bg-black text-[20px] font-semibold text-white">
          <motion.a
            className=" py-1 border-2 border-black active:scale-95 rounded-full flex items-center justify-center px-5 hover:bg-white hover:text-black"
            // whileHover={{
            //   fontSize: ["20px", "30px"],
            //   transition: { type: "just" },
            // }}
            onClick={(e) => {
              e.preventDefault();
              // console.log("experience clicked");
              home.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#"
          >
            Home
          </motion.a>
          <a
            className=" py-1 border-2 border-black active:scale-95 rounded-full flex items-center justify-center px-5 hover:bg-white hover:text-black"
            onClick={(e) => {
              e.preventDefault();
              // console.log("experience clicked");
              skills.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#"
          >
            skills
          </a>
          <a
            className=" py-1 border-2 border-black active:scale-95 rounded-full flex items-center justify-center px-5 hover:bg-white hover:text-black"
            onClick={(e) => {
              e.preventDefault();
              // console.log("experience clicked");
              projects.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#"
          >
            Projects
          </a>
          <a
            className=" py-1 border-2 border-black active:scale-95 rounded-full flex items-center justify-center px-5 hover:bg-white hover:text-black"
            onClick={(e) => {
              e.preventDefault();
              // console.log("experience clicked");
              console.log(
                experience.current.scrollIntoView({ behavior: "smooth" })
              );
            }}
            href="#"
          >
            Experience
          </a>
          <a
            className=" py-1 border-2 border-black active:scale-95 rounded-full flex items-center justify-center px-5 hover:bg-white hover:text-black"
            onClick={(e) => {
              e.preventDefault();
              contact.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#"
          >
            Contact
          </a>
        </nav>
      </motion.header>
    </>
  );
}
