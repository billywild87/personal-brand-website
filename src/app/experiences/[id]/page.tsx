import {
  ArrowLeftIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  MapPinIcon,
} from "@/components/icons";
import { Badge, Link, SectionTitle } from "@/components/ui";
import { Heading, Text } from "@/components/ui/Typography";
import {
  getAllExperienceIds,
  getExperienceDetail,
} from "@/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllExperienceIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = getExperienceDetail(id);

  if (!experience) {
    return { title: "Experience not found" };
  }

  return {
    title: `${experience.role} @ ${experience.company}`,
    description: experience.context[0],
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = getExperienceDetail(id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Link
          href="/experience"
          variant="muted"
          size="sm"
          className="mb-12 inline-flex items-center gap-2 transition-colors hover:text-primary"
        >
          <ArrowLeftIcon size={16} />
          Retour aux expériences
        </Link>

        <header className="mb-16 sm:mb-20">
          <SectionTitle className="mb-4">{experience.company}</SectionTitle>

          <Heading level="h1" className="mb-6">
            {experience.role}
          </Heading>

          <Text
            color="muted"
            size="lg"
            leading="relaxed"
            className="mb-8 max-w-2xl"
          >
            {experience.companyDescription}
          </Text>

          <div className="flex flex-wrap items-center gap-6">
            <div className="meta-item">
              <MapPinIcon size={16} className="meta-icon" />
              <Text size="sm" color="subtle">
                {experience.location}
              </Text>
            </div>
            <div className="meta-item">
              <BriefcaseIcon size={16} className="meta-icon" />
              <Text size="sm" color="subtle">
                {experience.type}
              </Text>
            </div>
            <div className="meta-item">
              <CalendarIcon size={16} className="meta-icon" />
              <Text size="sm" color="subtle" className="font-mono">
                {experience.period}
              </Text>
            </div>
          </div>
        </header>

        <div className="space-y-16 sm:space-y-20">
          <section>
            <SectionTitle className="mb-6">Contexte</SectionTitle>
            <div className="space-y-4">
              {experience.context.map((paragraph, i) => (
                <Text key={i} color="muted" leading="relaxed">
                  {paragraph}
                </Text>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle className="mb-6">Mon rôle</SectionTitle>
            <Text color="white" weight="medium" size="lg" className="mb-4">
              {experience.roleDescription}
            </Text>
            <Text size="sm" color="subtle" className="mb-4">
              Position centrale au sein de l&apos;équipe technique, en lien
              direct avec :
            </Text>
            <div className="flex flex-wrap gap-2">
              {experience.collaborations.map((collab, i) => (
                <Badge key={i} size="md">
                  {collab}
                </Badge>
              ))}
            </div>
          </section>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <section>
              <SectionTitle className="mb-6">Responsabilités</SectionTitle>
              <div className="space-y-4">
                {experience.responsibilities.map((item, i) => (
                  <div key={i} className="bordered-item">
                    <Text size="sm" color="muted" leading="relaxed">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle className="mb-6">Contributions clés</SectionTitle>
              <div className="space-y-4">
                {experience.contributions.map((item, i) => (
                  <div key={i} className="bordered-item-accent">
                    <Text size="sm" color="muted" leading="relaxed">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {experience.quality && (
            <section>
              <SectionTitle className="mb-6">Qualité & Tests</SectionTitle>
              <div className="grid gap-3 sm:grid-cols-2">
                {experience.quality.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckIcon
                      size={16}
                      className="mt-0.5 shrink-0 text-primary-500"
                    />
                    <Text size="sm" color="muted">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <SectionTitle className="mb-6 text-secondary-400">Enjeux techniques</SectionTitle>
            <div className="card-accent-violet p-6">
              <div className="space-y-4">
                {experience.challenges.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="dot-violet mt-2" />
                    <Text size="sm" color="muted" leading="relaxed">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionTitle className="mb-6">Stack & Environnement</SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {experience.stack.map((stackItem, i) => (
                <div key={i}>
                  <Text
                    size="xs"
                    color="subtle"
                    className="mb-2 font-mono tracking-wider uppercase"
                  >
                    {stackItem.category}
                  </Text>
                  <div className="flex flex-wrap gap-1.5">
                    {stackItem.items.map((item, j) => (
                      <Badge key={j} variant="primary" size="sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle className="mb-6">
              Équipe ({experience.team.total} personnes)
            </SectionTitle>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {experience.team.breakdown.map((member, i) => (
                <div key={i} className="meta-item">
                  <span className="dot-sm" />
                  <Text size="sm" color="muted">
                    {member}
                  </Text>
                </div>
              ))}
            </div>
          </section>

          <div className="divider-center" />

          <section>
            <SectionTitle className="mb-6 text-secondary-400">
              Ce que cette expérience m&apos;a apporté
            </SectionTitle>
            <div className="space-y-3">
              {experience.learnings.map((learning, i) => (
                <div key={i} className="learning-item">
                  <div className="check-icon-box">
                    <CheckIcon size={12} className="text-secondary-400" />
                  </div>
                  <Text color="muted" leading="relaxed">
                    {learning}
                  </Text>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
