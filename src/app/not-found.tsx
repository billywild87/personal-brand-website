import { ArrowLeftIcon } from "@/components/icons";
import { Page } from "@/components/Page";
import { Link } from "@/components/ui";

export default function NotFound() {
  return (
    <Page title="404" subtitle="Page introuvable">
      <div className="mx-auto max-w-xl">
        <p className="mb-10 text-base leading-relaxed text-zinc-300 sm:text-lg">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="mb-10 h-px bg-linear-to-r from-cyan-500/20 via-violet-500/20 to-transparent" />

        <Link
          href="/"
          variant="muted"
          className="group inline-flex items-center gap-2 transition-colors hover:text-cyan-400"
        >
          <ArrowLeftIcon
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Retour à l&apos;accueil
        </Link>
      </div>
    </Page>
  );
}
