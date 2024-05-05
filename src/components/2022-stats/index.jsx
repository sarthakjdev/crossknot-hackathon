import SectionHead from "../sectionHeads";

export default function V1PostEventStats() {
  const stats = [
    {
      title: "Participants",
      number: 1000,
    },
    {
      title: "Teams",
      number: 200,
    },
    {
      title: "Submissions",
      number: 75,
    },
    {
      title: "Sponsors",
      number: 15,
    },
  ];

  return (
    <section className="flex flex-col my-8 mx-20 sm:mx-2 bg-primary_extra_light max-w-[80rem] rounded-2xl py-10 px-8 w-full">
      <SectionHead sectionName={"We hacked well in 2022"} />

      <div className="flex  items-center justify-evenly m-auto gap-6 lg:flex-col-reverse mt-6 max-w-5xl w-full">
        {stats.map((stat, index) => {
          return (
            <div
              className="flex flex-col items-start justify-start"
              key={index}
            >
              <span className="text-5xl font-extrabold text-primary_dark">
                {stat.number}+
              </span>
              <span className="text-2xl font-semibold text-primary">
                {stat.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
