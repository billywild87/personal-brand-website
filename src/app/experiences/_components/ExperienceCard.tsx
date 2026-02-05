import { Icon } from "@/components/icons";
import { Badge, Card } from "@/components/ui";
import { Heading, Text } from "@/components/ui/Typography";
import type { Experience } from "@/content/types";
import Link from "next/link";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card
      variant="gradient"
      padding="md"
      className={`relative transition-all group-hover/timeline:border-primary-500/30 lg:p-6 ${
        experience.hasDetail
          ? "cursor-pointer hover:border-primary-500/30 hover:shadow-glow-sm"
          : ""
      }`}
    >
      {experience.hasDetail && (
        <Link
          href={`/experiences/${experience.id}`}
          className="absolute inset-0 z-10"
          aria-label={`Voir les détails de ${experience.company}`}
        />
      )}

      <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <Heading level="h4" variant="mono" className="text-base sm:text-lg">
            {experience.role}
          </Heading>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Text as="span" color="primary" size="sm">
              {experience.company}
            </Text>
            <span className="text-zinc-600">•</span>
            <Text
              as="span"
              color="subtle"
              size="sm"
              className="inline-flex items-center gap-1"
            >
              <Icon name="mapPin" size={12} />
              {experience.location}
            </Text>
            <span className="text-zinc-600">•</span>
            <Text
              as="span"
              color="subtle"
              size="sm"
              className="inline-flex items-center gap-1"
            >
              <Icon name="briefcase" size={12} />
              {experience.type}
            </Text>
          </div>
        </div>
        <Text
          as="span"
          color="subtle"
          size="sm"
          className="inline-flex shrink-0 items-center gap-1.5 font-mono"
        >
          <Icon name="calendar" size={12} />
          {experience.period}
        </Text>
      </div>

      <ul className="mb-4 space-y-1.5">
        {experience.description.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="dot-xs mt-1.5" />
            <Text size="sm" color="muted" leading="relaxed">
              {item}
            </Text>
          </li>
        ))}
      </ul>

      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {experience.technologies.map((tech, i) => (
            <Badge key={i} size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {experience.hasDetail && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-500 transition-all group-hover/timeline:border-primary-500/50 group-hover/timeline:text-primary">
            <Icon name="arrowRight" size={14} />
          </div>
        )}
      </div>
    </Card>
  );
}
