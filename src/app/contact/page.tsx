import { Icon } from "@/components/icons";
import { Page } from "@/components/Page";
import { SectionTitle } from "@/components/ui";
import { contactLinks, contactPage } from "@/content";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Page title={contactPage.title} subtitle={contactPage.subtitle}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-10">
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            {contactPage.intro}
          </p>

          <div className="space-y-6">
            <SectionTitle>Disponibilité</SectionTitle>
            <div className="space-y-5">
              <div className="bordered-item">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot" />
                  <h3 className="font-medium text-white">
                    {contactPage.availability.status}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {contactPage.availability.description}
                </p>
              </div>
              <div className="bordered-item">
                <h3 className="font-medium text-white">
                  {contactPage.location.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {contactPage.location.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <SectionTitle>Me contacter</SectionTitle>
          <div className="space-y-4">
            {contactLinks.map((contact, index) => {
              const isExternal =
                contact.href.startsWith("http") ||
                contact.href.startsWith("mailto:");
              const isDownload = contact.icon === "download";

              return (
                <Link
                  key={index}
                  href={contact.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  download={isDownload ? true : undefined}
                  className="bordered-item group flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-zinc-500 transition-colors group-hover:text-primary">
                      <Icon name={contact.icon} size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white transition-colors group-hover:text-primary">
                        {contact.value}
                      </p>
                      <p className="text-sm text-zinc-500">{contact.label}</p>
                    </div>
                  </div>
                  <div className="text-zinc-600 transition-colors group-hover:text-primary">
                    <Icon name="arrowRight" size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
