// lib/seo.js
// Configure these values based on your app's information
const config = {
  appName: "ShipFast",
  appDescription: "The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes.",
  domainName: "https://shipfa.st",
};

export function getSEOTags({ title, description = config.appDescription, canonicalUrlRelative, imageUrl }) {
  const fullTitle = title ? `${title} | ${config.appName}` : config.appName;
  const canonicalUrl = config.domainName + canonicalUrlRelative;

  return {
    title: fullTitle,
    description: description,
    canonicalUrl: canonicalUrl,
    openGraph: {
      url: canonicalUrl,
      title: fullTitle,
      description: description,
      image: imageUrl,
      type: 'website',
      site_name: config.appName,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@shipfast',
      creator: '@webdevluis',
      title: fullTitle,
      description: description,
      image: imageUrl,
    }
  };
}

// This function can be further customized to add more structured data
export function renderSchemaTags() {
  const schema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": config.appName,
    "description": config.appDescription,
    "url": config.domainName,
    // Add additional structured data properties here
  };

  // Use 'dangerouslySetInnerHTML' to prevent React from escaping the JSON string
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
