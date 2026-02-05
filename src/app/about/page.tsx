import { Page } from "@/components/Page";
import { Badge, Card, SectionTitle, Text } from "@/components/ui";
import {
  aboutHero,
  outsideCode,
  storySections,
  vision,
} from "@/content";

export default function AboutPage() {
  return (
    <Page title={aboutHero.title} subtitle={aboutHero.subtitle}>
      <div className="space-y-16 sm:space-y-20">
        {storySections
          .filter((s) => s.id === "intro")
          .map((section) => (
            <section key={section.id}>
              <div className="bordered-item-highlight">
                <div className="space-y-4">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <Text
                      key={i}
                      size="lg"
                      leading="relaxed"
                      className="text-zinc-200"
                    >
                      {paragraph}
                    </Text>
                  ))}
                </div>
              </div>
            </section>
          ))}

        {storySections
          .filter((s) => s.id !== "intro")
          .map((section) => (
            <section key={section.id}>
              <SectionTitle className="mb-6">{section.title}</SectionTitle>
              <div className="space-y-4">
                {section.content.split("\n\n").map((paragraph, i) => (
                  <Text key={i} size="base" leading="relaxed">
                    {paragraph}
                  </Text>
                ))}
              </div>
            </section>
          ))}

        <section>
          <SectionTitle className="mb-6">{vision.title}</SectionTitle>

          <Card variant="accent" padding="lg">
            <Text size="base" leading="relaxed" className="mb-8 text-zinc-200">
              {vision.intro}
            </Text>

            <div className="grid gap-3 sm:grid-cols-2">
              {vision.values.map((value) => (
                <div key={value} className="value-item">
                  <span className="dot" />
                  <Text size="sm" weight="medium" color="white">
                    {value}
                  </Text>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section>
          <SectionTitle className="mb-6 text-secondary-400">{outsideCode.title}</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {outsideCode.interests.map((interest) => (
              <Badge key={interest} variant="accent" size="lg">
                {interest}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
