import CodeEditor from "@/components/CodeEditor";
import { Page } from "@/components/Page";
import { SectionTitle } from "@/components/ui";
import { experienceHighlight, homeHero, skills } from "@/content";

export default function HomePage() {
  return (
    <Page title={homeHero.title} subtitle={homeHero.subtitle}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-10">
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            {homeHero.intro}
          </p>

          <div className="space-y-6">
            <SectionTitle>Expertises</SectionTitle>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="bordered-item">
                  <h3 className="font-medium text-white">{skill.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          <div>
            <p className="text-lg font-medium text-white">
              {experienceHighlight.years}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {experienceHighlight.description}
            </p>
          </div>
        </div>

        <div className="h-96 w-full sm:h-112 lg:h-150">
          <CodeEditor />
        </div>
      </div>
    </Page>
  );
}
