import { SITE_NAME, PRIMARY_PHONE, ADDRESS_LINES } from "@/lib/constants";

export default function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: "https://abcstonesindia.com",
    logo: "https://abcstonesindia.com/images/hero/Background.webp",
    description: `${SITE_NAME} — Premium imported marble, granite and natural stone for luxury homes, hospitality, and commercial architecture.`,
    telephone: PRIMARY_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINES[0] + " " + ADDRESS_LINES[1],
      addressLocality: "Kishangarh",
      addressRegion: "Rajasthan",
      postalCode: "305801",
      addressCountry: "IN",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
