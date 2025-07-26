import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Main title for the website, appearing in browser tabs and search results
  title: {
    default: "TozaLoo | Professional Pol Lattalari va Tozalash Mahsulotlari Ishlab Chiqaruvchisi",
    template: "%s | TozaLoo", // Allows individual page titles to be appended to " | TozaLoo"
  },
  // Main description for search engines
  description: "TozaLoo - O'zbekistonda yuqori sifatli pol lattalari va tozalash mahsulotlari ishlab chiqaruvchisi. MDH davlatlariga eksport xizmatlari bilan ishonchli hamkor.",
  
  // Keywords (less impactful now, but can still provide context)
  keywords: [
    "pol latta",
    "tozalash mahsulotlari",
    "tozaloo",
    "o'zbekiston",
    "toshkent",
    "eksport",
    "MDH",
    "gilam tozalash",
    "professional tozalash",
    "uy uchun tozalash",
    "ofis uchun tozalash",
    "sifatli tozalash vositalari",
    "floor mop",
    "cleaning products",
    "uzbekistan",
    "tashkent",
    "export",
    "CIS countries",
    "professional cleaning",
  ],

  // Open Graph metadata for social media sharing
  openGraph: {
    title: "TozaLoo | Professional Pol Lattalari va Tozalash Mahsulotlari Ishlab Chiqaruvchisi",
    description: "TozaLoo - O'zbekistonda yuqori sifatli pol lattalari va tozalash mahsulotlari ishlab chiqaruvchisi. MDH davlatlariga eksport xizmatlari bilan ishonchli hamkor.",
    url: "https://www.tozaloo.uz", // Replace with your actual domain
    siteName: "TozaLoo",
    images: [
      {
        url: "https://www.tozaloo.uz/og-image.jpg", // Replace with a high-quality image for social sharing
        width: 1200,
        height: 630,
        alt: "TozaLoo - Professional Cleaning Products and Floor Mops",
      },
    ],
    locale: "uz_UZ", // Primary locale, can be adjusted dynamically if needed
    type: "website",
  },

  // Twitter Card metadata for Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "TozaLoo | Professional Pol Lattalari va Tozalash Mahsulotlari Ishlab Chiqaruvchisi",
    description: "TozaLoo - O'zbekistonda yuqori sifatli pol lattalari va tozalash mahsulotlari ishlab chiqaruvchisi. MDH davlatlariga eksport xizmatlari bilan ishonchli hamkor.",
    creator: "@yourtwitterhandle", // Replace with your company's Twitter handle if available
    images: ["https://www.tozaloo.uz/twitter-image.jpg"], // Replace with a high-quality image for Twitter
  },

  // Viewport for responsive design (already present, but good to ensure)
  viewport: "width=device-width, initial-scale=1",

  // Robots meta tag to guide search engine crawlers
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL for preventing duplicate content issues
  alternates: {
    canonical: "https://www.tozaloo.uz", // Asosiy/afzal URL
    languages: {
      'uz-UZ': 'https://www.tozaloo.uz/uz', // O'zbekcha versiya URL
      'ru-RU': 'https://www.tozaloo.uz/ru', // Ruscha versiya URL
      'en-US': 'https://www.tozaloo.uz/en', // Inglizcha versiya URL
      'x-default': 'https://www.tozaloo.uz/uz', // Afzal qilingan til aniqlanmaganda yoki boshqa hududlar uchun standart
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz"> {/* Set default language to Uzbek */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}