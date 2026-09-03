import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import StoneCard from "@/components/collection/StoneCard";
import { journalArticles, getArticleBySlug } from "@/data/journal";
import { getStoneBySlug } from "@/data/stones";
import { SITE_NAME, PRIMARY_PHONE } from "@/lib/constants";
import { getWhatsappLink, getCallLink } from "@/lib/whatsapp";
import { ArrowLeft, Calendar, Clock, Phone, MessageCircle } from "lucide-react";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: `Article Not Found | ${SITE_NAME}` };

  const title = `${article.title} | ${SITE_NAME}`;
  const description = `${article.excerpt} Read the comprehensive guide from ${SITE_NAME}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: article.image, alt: article.title }],
      siteName: SITE_NAME,
      type: "article",
    },
  };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedStones = article.relatedStoneSlugs
    .map((s) => getStoneBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `https://abcstonesindia.com${article.image}`,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: "https://abcstonesindia.com",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: "https://abcstonesindia.com/images/hero/Background.webp",
      },
    },
  };

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
        name: "Stone Journal",
        item: "https://abcstonesindia.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://abcstonesindia.com/blog/${article.slug}`,
      },
    ],
  };

  return (
    <article className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Container>
        {/* Top-left Back Button */}
        <BackButton label="Back to Stone Journal" fallbackHref="/blog" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">
            Stone Journal
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Article Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <span className="eyebrow text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-2 block">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium leading-[1.12]">
            {article.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/75 leading-relaxed font-serif italic">
            {article.subtitle}
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs text-charcoal/60 uppercase tracking-wider border-y border-charcoal/10 py-3">
            <span className="font-semibold text-charcoal">{SITE_NAME} Editorial</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar size={12} className="text-gold" />
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-gold" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Lead Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-charcoal/15 shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium mb-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-charcoal/80 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Mid-Article CTA */}
        <div className="max-w-3xl mx-auto my-12 bg-white border border-charcoal/15 p-6 sm:p-8 text-center shadow-xs">
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-2">
            Consult on Your Natural Stone Requirements
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/70 max-w-md mx-auto mb-6">
            Speak directly with the stone specialists at {SITE_NAME} for availability, slab viewing, or custom architectural sawing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={getWhatsappLink({
                stoneName: article.title,
                message: `I read your article "${article.title}" and would like to know more about natural stone options.`,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              ENQUIRE ON WHATSAPP
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

        {/* Featured Related Stones */}
        {relatedStones.length > 0 && (
          <div className="max-w-4xl mx-auto pt-10 border-t border-charcoal/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-charcoal font-medium">
                Related Natural Stones Mentioned
              </h2>
              <Link
                href="/collection"
                className="text-xs uppercase tracking-wider text-charcoal hover:text-gold font-semibold"
              >
                Explore All Stones →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedStones.map((stone) => (
                <StoneCard key={stone.slug} stone={stone} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
