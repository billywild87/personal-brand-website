import { Page } from "@/components/Page";
import { experiences } from "@/content";
import { ExperienceCard } from "./_components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <Page
      title="Experience"
      subtitle="8 ans de développement front-end, de la startup à la scale-up"
    >
      <div className="relative">
        <div
          className="absolute top-0 bottom-0 left-5 hidden w-px sm:block lg:left-7"
          style={{
            background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5), rgba(63, 63, 70, 0.5), transparent)',
          }}
        />

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="group/timeline relative sm:pl-12 lg:pl-16">
              <div className="absolute left-3.5 top-6 hidden h-3 w-3 rounded-full border border-cyan-500/50 bg-zinc-900 transition-all group-hover/timeline:border-cyan-400 group-hover/timeline:bg-cyan-400 group-hover/timeline:shadow-[0_0_12px_rgba(34,211,238,0.5)] sm:block lg:left-5.5" />

              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
