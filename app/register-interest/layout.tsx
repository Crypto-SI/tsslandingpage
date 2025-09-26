import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register Interest | TSS Multisports",
  description: "Register your interest with TSS Multisports. Whether you're a partner, parent, or player, find out how we can help you achieve your football goals.",
  keywords: [
    "TSS Multisports register interest",
    "football registration",
    "partner registration",
    "parent registration",
    "player registration",
    "football coaching registration",
    "youth football registration",
    "football academy registration",
    "football development program",
    "football training registration",
    "football course registration",
    "football club registration",
    "football partnership registration",
    "football interest form"
  ],
  openGraph: {
    title: "Register Interest | TSS Multisports",
    description: "Register your interest with TSS Multisports. Whether you're a partner, parent, or player, find out how we can help you achieve your football goals.",
    images: [
      {
        url: "/images/register-interest-og.jpg",
        width: 1200,
        height: 630,
        alt: "TSS Multisports - Register Interest"
      }
    ],
    type: "website",
    locale: "en_GB",
    url: "https://tssmultisports.com/register-interest"
  },
  twitter: {
    card: "summary_large_image",
    title: "Register Interest | TSS Multisports",
    description: "Register your interest with TSS Multisports. Whether you're a partner, parent, or player, find out how we can help you achieve your football goals.",
    images: ["/images/register-interest-og.jpg"],
    creator: "@tssmultisports"
  },
  alternates: {
    canonical: "https://tssmultisports.com/register-interest"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1
    }
  }
}

export default function RegisterInterestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}