import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { stones, getStoneBySlug, getCanonicalStoneUrl } from "@/data/stones";
import StoneDetails from "@/components/collection/StoneDetails";
import { SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  // Canonical 2-part routes: /collection/marble/statuario-marble, etc.
  stones.forEach((stone) => {
    params.push({ slug: [stone.category, stone.slug] });
  });

  // Legacy / convenience 1-part routes: /collection/statuario-marble, /collection/statuario
  stones.forEach((stone) => {
    params.push({ slug: [stone.slug] });
    const short = stone.slug.replace("-marble", "");
    if (short !== stone.slug) {
      params.push({ slug: [short] });
    }
  });

  // Category shortcuts
  params.push({ slug: ["marble"] });
  params.push({ slug: ["granite"] });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const parts = params.slug;

  if (parts.length === 1 && (parts[0] === "marble" || parts[0] === "granite")) {
    const cat = parts[0];
    const catTitle = cat === "marble" ? "Marble" : "Granite";
    const title = `${catTitle} Collection | ${SITE_NAME}`;
    const description = `Explore premium ${cat} from ${SITE_NAME} in Kishangarh, Ajmer. Available in slabs and blocks for luxury residential, hospitality, commercial and architectural projects.`;
    const canonicalUrl = `https://www.abcstonesindia.com/collection/${cat}`;
    const categoryStone = stones.find((s) => s.category === cat);
    const categoryImage = categoryStone
      ? categoryStone.image
      : cat === "marble"
      ? "/images/marble/statuario.webp"
      : "/images/granite/black-pearl.webp";

    return {
      title,
      description,
      alternates: {
        canonical: `/collection/${cat}`,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: SITE_NAME,
        type: "website",
        images: [
          {
            url: categoryImage,
            width: 1200,
            height: 630,
            alt: `${catTitle} Collection | ${SITE_NAME}`,
          },
        ],
      },
    };
  }

  // Stone slug is the last part
  const stoneSlug = parts[parts.length - 1];
  const stone = getStoneBySlug(stoneSlug);

  if (!stone) return { title: `Stone Not Found | ${SITE_NAME}` };

  const title = `${stone.name} | ${SITE_NAME}`;
  const originPart = stone.origin ? ` sourced from ${stone.origin}` : "";
  const description = `${stone.name} — premium natural ${stone.category}${originPart} by ${SITE_NAME}. Available in slabs and blocks for luxury residential, hospitality, commercial and architectural projects.`;
  const canonicalUrl = `https://www.abcstonesindia.com${getCanonicalStoneUrl(stone)}`;

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalStoneUrl(stone),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: stone.image,
          width: 1200,
          height: 630,
          alt: `${stone.name} ${stone.category} stone`,
        },
      ],
    },
  };
}

export default function StoneRoutePage({
  params,
}: {
  params: { slug: string[] };
}) {
  const parts = params.slug;

  // Handle /collection/marble or /collection/granite
  if (parts.length === 1 && (parts[0] === "marble" || parts[0] === "granite")) {
    redirect(`/collection?category=${parts[0]}`);
  }

  const stoneSlug = parts[parts.length - 1];
  const stone = getStoneBySlug(stoneSlug);
  if (!stone) notFound();

  // If accessed via 1 part e.g. /collection/statuario-marble, redirect to canonical /collection/marble/statuario-marble
  if (parts.length === 1) {
    redirect(getCanonicalStoneUrl(stone));
  }

  // Breadcrumb Structured Data Schema for Search Engines
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.abcstonesindia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${stone.category.charAt(0).toUpperCase() + stone.category.slice(1)} Collection`,
        item: `https://www.abcstonesindia.com/collection?category=${stone.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: stone.name,
        item: `https://www.abcstonesindia.com${getCanonicalStoneUrl(stone)}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <StoneDetails stone={stone} />
    </>
  );
}
