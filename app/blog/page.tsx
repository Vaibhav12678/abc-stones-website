import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import TextDrop from "@/components/ui/TextDrop";
import { journalArticles } from "@/data/journal";
import { SITE_NAME } from "@/lib/constants";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: `Stone Journal | ${SITE_NAME}`,
  description: `Expert buying guides, architectural insights, and care tutorials on Italian marble, granite, and natural stone from ${SITE_NAME}.`,
};

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton label="Back" fallbackHref="/" />

        {/* Header */}
        <TextDrop className="max-w-2xl mb-10 sm:mb-14">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Insights &amp; Architectural Guides
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium leading-[1.08]">
            STONE JOURNAL
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            Essential guides, material comparisons, and technical insights prepared by the stone specialists at {SITE_NAME}.
          </p>
        </TextDrop>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {journalArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col bg-white border border-charcoal/10 hover:border-gold shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#FAF8F3]/95 backdrop-blur-xs text-charcoal text-[0.62rem] uppercase tracking-wider px-2.5 py-1 font-semibold border border-charcoal/10">
                  {article.category}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[0.65rem] text-charcoal/50 uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-gold" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-gold" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-gold transition-colors">
                  <span>Read Guide</span>
                  <ArrowRight size={13} className="text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
