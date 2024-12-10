import info from "../../info";

export default function SkillsMobile() {
  const { cloud, databases, other, devops, frameworks, languages } =
    info.skills;

  return (
    <>
      <div className="flex min-h-[100mvh] flex-col items-center gap-6 bg-black p-6">
        <div className="text-xl text-white">{info.skills.name}</div>
        <SkillCard data={languages} />
        <SkillCard data={frameworks} />
        <SkillCard data={databases} />
        <SkillCard data={cloud} />
        <SkillCard data={devops} />
        <SkillCard data={other} />
      </div>
    </>
  );
}

function SkillCard({ data }) {
  return (
    <div className="flex h-[20vh] min-h-[100px] w-full flex-col border">
      <div className="flex h-[50vh] items-center justify-center text-md font-light text-white">
        {data.name}
      </div>
      <div className="flex h-[50vh] items-center justify-center bg-white">
        <div className="flex items-center justify-evenly gap-4 rounded-full bg-black p-2 px-4 text-sm font-light text-white">
          {data.values.map((value) => {
            return <span key={value}>{value}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
