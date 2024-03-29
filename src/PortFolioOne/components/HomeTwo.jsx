import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HomeTwo({ li }) {
  const ref = useRef();

  const [scope, animate] = useAnimate();
  let width = document.body.scrollWidth;

  useEffect(() => {
    async function myAnimation() {
      await animate(
        scope.current,
        { rotate: -45 },
        {
          type: "spring",
          duration: 0.5,
          delay: 0.5,
          ease: "easeInOut",
        }
      );
      await animate(
        scope.current,
        { rotate: 360, x: 0, borderRadius: ["0%", "50%"] },
        {
          type: "spring",
          duration: 1,
          ease: "easeIn",
        }
      );
      await animate(
        scope.current,
        { scale: 1, borderRadius: ["50%", "0%"] },
        {
          type: "spring",
          duration: 0.5,
          ease: "easeInOut",
        }
      );
    }

    myAnimation();
  }, []);

  useEffect(() => {
    li(ref);
  }, [li]);

  return (
    <>
      <motion.div
        ref={ref}
        className="flex min-h-screen flex-wrap mb-5 text-white"
      >
        <div className="flex w-[50%] items-center justify-center">
          <motion.span
            variants={{
              initial: { opacity: 0, y: -50 },
              next: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="next"
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 2.35,
              ease: "easeInOut",
            }}
            className="font-sans text-[50px]"
          >
            Sravan Kumar
          </motion.span>
        </div>
        <motion.div
          ref={scope}
          variants={{
            initial: {
              scale: 0.5,
              x: -width / 2,
            },
            middle1: { rotate: -45 },
            middle2: { rotate: 0 },
            next: { rotate: 360, scale: 1, x: 0 },
          }}
          initial="initial"
          // animate={["middle2", "middle1"]}
          transition={{
            type: "spring",
            duration: 3,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="flex flex-col  w-[50%] justify-center  gap-5 bg-white p-5 text-black"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 2.5,
              ease: "easeInOut",
            }}
            className="font-bold text-3xl"
          >
            Software Developer
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 2.75,
              ease: "easeInOut",
            }}
            className="font-sans text-[20px] font-thin"
          >
            I'm a sofware developer skilled in React, Node.js, python and Django
            and can build different web applications.
          </motion.span>

          {/* <div className="flex h-[100px] items-center gap-10">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                xmlSpace="preserve"
                className="social-link-icon  w-8"
                aria-label="Twitter"
              >
                <path d="M326.3 902.3c-108.9 0-214.8-31-306.3-89.7-8.5-5.5-12.2-16.1-8.8-25.7s13.1-15.7 23.1-14.2c76.7 8.9 156.8-6.7 224-45.1-66.4-20-120.5-71.4-142.3-139.6-2.4-7.4-.7-15.4 4.5-21.1 3.1-3.5 7.3-5.8 11.8-6.8C80.4 520.4 47.6 458 47.6 389.5c0-7.7 4.1-16 10.8-20 6.7-3.9 14.9-5.1 21.6-1.5 1.9 1.1 3.9 2.1 5.8 3.1-23.6-34.8-36.6-76.5-36.6-119.9 0-37.7 10-74.9 29-107.5 3.6-6.2 10-10.2 17.1-10.8 7.1-.5 14 2.4 18.6 7.9C202 248.9 329.6 317.5 467.2 331.6c-.6-6.6-.9-13.3-.9-19.9 0-117.9 96-213.9 213.9-213.9 54.8 0 107.8 21.2 147.3 58.7 36.4-8.3 71.2-22.3 103.8-41.6 7.8-4.5 17.6-3.9 24.7 1.7 7.1 5.7 9.9 15.1 7.2 23.7-6.9 21.7-17.2 41.9-30.4 60.1 9.1-3.1 17.9-6.7 26.7-10.5 8.8-4 19.3-1.6 25.5 5.9 6.2 7.4 6.8 18.1 1.4 26.1-25.3 37.7-56.2 70.6-91.8 97.9.1 4.7.2 9.5.2 14.2 0 279.3-212.7 568.3-568.5 568.3zm-206-85.8c64.8 27.8 134.7 42.2 206.1 42.2 328.5 0 524.9-266.8 524.9-524.9 0-8-.2-16-.5-24-.3-7.3 3.1-14.3 9-18.6 15.7-11.3 30.4-23.8 44-37.4-14.2 3.3-28.6 5.8-43.2 7.5-10.1 1.4-19.9-4.8-23.2-14.6-3.3-9.7.6-20.4 9.4-25.7 17.3-10.4 32.5-23.6 44.9-38.9-21.7 8.3-44.1 14.8-67 19.3-7.3 1.5-14.9-.9-20.1-6.4-32.1-34.2-77.4-53.8-124.4-53.8-93.9 0-170.3 76.4-170.3 170.3 0 13 1.5 26.1 4.4 38.9 1.5 6.6-.1 13.6-4.5 18.9-4.4 5.2-10.9 8.8-17.8 7.8-148.7-7.5-288.8-73.6-389.4-182.9-6.4 18.2-9.8 37.5-9.8 56.9 0 57.2 28.3 110.1 75.7 141.8 8.1 5.4 11.6 15.5 8.7 24.7-3 9.2-12.2 14.8-21.4 15.2-20.8-.7-41.4-4.4-61.1-11 13.5 67.5 65.4 121 133.1 134.6 9.9 2 17.2 10.5 17.5 20.6s-6.3 19.1-16 21.8c-18.8 5.1-38.5 8-57.8 7.6 29.2 51.6 84 85.2 145.2 86.4 9.2.2 17.3 6.2 20.2 14.9s0 18.4-7.2 24.1c-61.3 48.1-133 76.9-209.4 84.7z"></path>
              </svg>
            </a>

            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="social-link-icon  w-8"
                aria-label="LinkedIn"
              >
                <path d="m437 0h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75zm45 437c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45v-362c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45zm0 0"></path>
                <path d="m91 422h90v-212h-90zm30-182h30v152h-30zm0 0"></path>
                <path d="m331.085938 210c-.027344 0-.058594 0-.085938 0-10.371094 0-20.472656 1.734375-30 5.101562v-5.101562h-90v212h90v-107c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v107h90v-117.3125c0-48.546875-39.382812-94.640625-89.914062-94.6875zm59.914062 182h-30v-77c0-24.8125-20.1875-45-45-45s-44.996094 20.1875-45 44.996094v77.003906h-30v-152h30v30.019531l24.007812-18.03125c10.441407-7.84375 22.886719-11.988281 35.992188-11.988281h.058594c31.929687.03125 59.941406 30.257812 59.941406 64.6875zm0 0"></path>
                <path d="m91 180h90v-90h-90zm30-60h30v30h-30zm0 0"></path>
              </svg>
            </a>

            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="social-link-icon h-12 w-8"
                aria-label="GitHub"
              >
                <path d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"></path>
              </svg>
            </a>

            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="512"
                viewBox="0 0 512 512"
                className="social-link-icon w-8"
                aria-label="E-mail"
              >
                <path d="m451 144.425v-82.426h-110.106l-84.894-61.998-84.894 61.998h-110.106v82.426l-61 45v322.574h512v-322.574zm-251.004 230.107-169.996 96.68v-241.7zm29.971 17.467h52.066l158.25 90h-368.566zm82.037-17.467 169.996-145.02v241.701zm160.884-176.68-21.888 18.672v-34.82zm-216.888-160.703 34.027 24.85h-68.053zm165 54.85v150.118l-140.529 119.882h-48.942l-140.529-119.882v-150.118zm-360 124.525-21.888-18.673 21.888-16.146z"></path>
                <path d="m256 331.999c11.999 0 23.774-2.011 34.999-5.979l-9.997-28.285c-8.005 2.829-16.417 4.264-25.001 4.264-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75c0 8.271-6.729 15-15 15s-15-6.729-15-15c0-15.946 0-29.34 0-45h-45c-24.813 0-45 20.187-45 45s20.187 45 45 45c11.517 0 22.032-4.354 30-11.495 7.968 7.142 18.483 11.495 30 11.495 24.813 0 45-20.187 45-45 0-57.897-47.103-105-105-105s-105 47.103-105 105 47.102 105 104.999 105zm0-90c-8.271 0-15-6.729-15-15s6.729-15 15-15h15v15c0 8.271-6.729 15-15 15z"></path>
              </svg>
            </a>

            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                className="social-link-icon w-8"
                aria-label="Résumé"
              >
                <path d="M333.205,34.213L330.799,0L9.546,22.591l30.317,431.118l44.011-3.095V512h322.046v-35.276l50.265,5.413l46.27-429.698 L333.205,34.213z M83.874,420.519l-16.17,1.137L41.599,50.432l261.359-18.38l3.359,47.765H83.874V420.519z M375.9,481.979H113.895 V109.838H375.9V481.979z M429.552,449.073l-23.631-2.545V79.817h-69.508l-1.068-15.18l134.049,14.434L429.552,449.073z"></path>
                <rect
                  width="195.796"
                  height="30.021"
                  x="147.003"
                  y="296.746"
                ></rect>
                <rect
                  width="195.796"
                  height="30.021"
                  x="147.003"
                  y="350.143"
                ></rect>
                <rect
                  width="195.796"
                  height="30.021"
                  x="147.003"
                  y="403.54"
                ></rect>
                <path d="M201.384,229.293c-13.238,0-22.154-9.186-22.154-23.64s8.915-23.64,22.154-23.64c8.511,0,15.13,4.053,20.668,11.078 l20.128-17.966c-9.321-12.157-23.911-18.912-42.418-18.912c-30.394,0-52.684,20.398-52.684,49.442s22.289,49.442,52.684,49.44 c18.508,0,33.097-6.754,42.418-18.912l-20.128-17.966C216.514,225.24,209.895,229.293,201.384,229.293z"></path>
                <polygon points="321.075 158.373 297.975 213.624 275.415 158.373 241.102 158.373 281.088 252.934 312.429 252.934 352.414 158.373"></polygon>
              </svg>
            </a>
          </div> */}
        </motion.div>
      </motion.div>
    </>
  );
}
