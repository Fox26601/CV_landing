import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/lib/site";

export function JsonLdPerson() {
  const url = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.tagline,
    url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tel Aviv",
      addressCountry: "IL",
    },
    sameAs: [site.githubUrl, site.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}