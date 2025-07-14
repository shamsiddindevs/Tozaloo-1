// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export function SEO({ title, description, url, image }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Head>
  );
}
