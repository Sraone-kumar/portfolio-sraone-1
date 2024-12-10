import info from "../../info";

export default function ExperienceMobile() {
  const experiences = info.experience.values;
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-6 bg-black p-6">
        <div className="text-xl text-white">{info.experience.name}</div>

        <div className="flex w-full flex-col items-center">
          {experiences.map((experience, idx) => {
            return (
              <>
                <div className="flex min-h-[100px] w-full min-w-[200px] flex-col bg-white p-3">
                  <span className="text-xs font-thin">{experience.date}</span>
                  <span className="text-xs font-semibold">{`${experience.designation} | ${experience.company}`}</span>
                  {experience.details.map((sentence, idx) => {
                    return (
                      <span key={idx} className="text-xs mb-2 font-extralight">
                        {/* Developed a web dash board that provides status of a security
          application. */}
                        {sentence}
                      </span>
                    );
                  })}
                </div>
                {idx < experiences.length - 1 ? (
                  <div className="flex h-[50px] w-0 flex-col border bg-white"></div>
                ) : (
                  ""
                )}
              </>
            );
          })}
          {/* <div className="flex h-[100px] w-full min-w-[200px] flex-col bg-white p-3">
            <span className="text-xs">
              Programmer analyst | SEP 2022 - DEC 2022
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
}
