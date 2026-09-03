import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import StoneCard from "@/components/collection/StoneCard";
import { applications, getApplicationBySlug } from "@/data/applications";
import { getStoneBySlug } from "@/data/stones";
import { SITE_NAME, PRIMARY_PHONE } from "@/lib/constants";
import { getWhatsappLink, getCallLink } from "@/lib/whatsapp";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  applications.forEach((app) => {
    params.push({ slug: app.slug });
    app.aliases?.forEach((alias) => {
      params.push({ slug: alias });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const app = getApplicationBySlug(params.slug);
  if (!app) return { title: `Application Not Found | ${SITE_NAME}` };

  const title = `${app.title} | ${SITE_NAME}`;
  const description = `${app.description.slice(0, 155)}... Curated natural stone solutions by ${SITE_NAME}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: app.image, alt: app.title }],
      siteName: SITE_NAME,
      type: "article",
    },
  };
}

export default function ApplicationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const app = getApplicationBySlug(params.slug);
  if (!app) notFound();

  const recommendedStones = app.recommendedStoneSlugs
    .map((s) => getStoneBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://abcstonesindia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Applications",
        item: "https://abcstonesindia.com/applications",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: app.name,
        item: `https://abcstonesindia.com/applications/${app.slug}`,
      },
    ],
  };

  return (
    <article className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/applications" className="hover:text-gold transition-colors">
            Applications
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">{app.name}</span>
        </nav>

        {/* Header and Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <div className="lg:col-span-6">
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Application Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium leading-[1.08]">
              {app.title}
            </h1>

            <p className="mt-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              {app.description}
            </p>

            {app.pairedStoneName && (
              <div className="mt-6 p-4 bg-white border-l-2 border-gold border border-charcoal/10">
                <span className="text-[0.65rem] tracking-wider uppercase text-gold font-semibold block mb-1">
                  Verified Stone Pairing
                </span>
                <p className="text-xs sm:text-sm text-charcoal font-medium">
                  {app.pairedStoneName} is among the most distinguished selections for {app.name.toLowerCase()}.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsappLink({
                  stoneName: `${app.name} Application Enquiry`,
                  message: `I am inquiring about natural stone for ${app.name.toLowerCase()}.`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
              >
                <MessageCircle size={14} className="text-emerald-400" />
                ENQUIRE VIA WHATSAPP
              </a>

              <a
                href={getCallLink(PRIMARY_PHONE)}
                className="inline-flex items-center gap-2 border border-charcoal/30 hover:border-gold hover:bg-gold/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all"
              >
                <Phone size={13} className="text-gold" />
                CALL US
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/15 shadow-md">
              <Image
                src={app.image}
                alt={`${app.title} — ${SITE_NAME}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Architectural Design Tips */}
        {app.designTips && app.designTips.length > 0 && (
          <div className="bg-white border border-charcoal/10 p-6 sm:p-8 mb-14 shadow-xs">
            <h2 className="font-serif text-2xl text-charcoal font-medium mb-4">
              Architectural &amp; Specification Tips
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-charcoal/80">
              {app.designTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommended Stones for this Application */}
        {recommendedStones.length > 0 && (
          <div className="pt-6 border-t border-charcoal/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-1">
                  Curated Selections
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                  Recommended Stones for {app.name}
                </h2>
              </div>
              <Link
                href="/collection"
                className="text-xs uppercase tracking-wider text-charcoal hover:text-gold font-semibold"
              >
                View Full Collection →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {recommendedStones.map((stone) => (
                <StoneCard key={stone.slug} stone={stone} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
