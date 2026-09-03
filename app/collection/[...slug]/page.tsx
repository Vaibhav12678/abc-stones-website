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
    return {
      title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Collection | ${SITE_NAME}`,
      description: `Explore premium ${cat} from ${SITE_NAME}. Available in slabs and blocks for luxury projects.`,
    };
  }

  // Stone slug is the last part
  const stoneSlug = parts[parts.length - 1];
  const stone = getStoneBySlug(stoneSlug);

  if (!stone) return { title: `Stone Not Found | ${SITE_NAME}` };

  const title = `${stone.name} | ${SITE_NAME}`;
  const description = `${stone.name} — Premium natural ${stone.category}${
    stone.origin ? ` sourced from ${stone.origin}` : ""
  }. Slab and block availability for luxury residences and commercial architecture by ${SITE_NAME}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: stone.image,
          alt: `${stone.name} natural stone slab`,
        },
      ],
      siteName: SITE_NAME,
      type: "website",
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

  // Structured Data Schema for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${stone.name} by ${SITE_NAME}`,
    image: `https://abcstonesindia.com${stone.image}`,
    description: stone.description || `${stone.name} premium natural stone`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: stone.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "Price on Enquiry",
      availability: "https://schema.org/InStock",
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
        name: `${stone.category.charAt(0).toUpperCase() + stone.category.slice(1)} Collection`,
        item: `https://abcstonesindia.com/collection?category=${stone.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: stone.name,
        item: `https://abcstonesindia.com${getCanonicalStoneUrl(stone)}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <StoneDetails stone={stone} />
    </>
  );
}
