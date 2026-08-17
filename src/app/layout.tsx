import type { Metadata } from 'next'
import { Bangers, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Where's the Burger | Indian-Fusion Street Food | Brampton, ON",
  description:
    "Handcrafted Indian-fusion burgers, loaded dirty fries, dreamy sandos & thick shakes. 1300 Steeles Ave E, Brampton. Order on Uber Eats or visit us today.",
  keywords: [
    "food truck Brampton",
    "Indian fusion burger Toronto",
    "Where's the Burger",
    "paneer burger",
    "halal food truck Ontario",
    "street food Brampton",
    "brioche burger GTA",
    "best food truck Toronto",
    "1300 Steeles Ave E",
  ],
  openGraph: {
    title: "Where's the Burger | Indian-Fusion Street Food",
    description:
      "Rock-n-roll street food. Indian spices. Canadian brioche. 1300 Steeles Ave E, Brampton.",
    type: 'website',
    images: [
      {
        url: '/images/food/paneer-pioneer.jpeg',
        width: 1200,
        height: 630,
        alt: "Where's the Burger — Paneer Pioneer burger on black background",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Where's the Burger | Indian-Fusion Street Food",
    description:
      "Rock-n-roll street food. Indian spices. Canadian brioche. 1300 Steeles Ave E, Brampton.",
    images: ['/images/food/paneer-pioneer.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://whereistheburger.ca',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FoodEstablishment',
      '@id': 'https://whereistheburger.ca/#establishment',
      name: "Where's the Burger",
      description:
        'Indian-fusion street food serving handcrafted burgers, sides, desserts, and shakes in Brampton, Ontario.',
      telephone: '+1-647-395-9091',
      email: 'info@whereistheburger.ca',
      url: 'https://whereistheburger.ca',
      priceRange: '$$',
      currenciesAccepted: 'CAD',
      paymentAccepted: 'Cash, Credit Card',
      servesCuisine: ['Indian-Fusion', 'Canadian', 'Burgers', 'Street Food'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1300 Steeles Ave E',
        addressLocality: 'Brampton',
        addressRegion: 'ON',
        postalCode: 'L6T 4T2',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.7315,
        longitude: -79.7067,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '00:00', closes: '00:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '00:00', closes: '00:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '15:00', closes: '00:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '15:00', closes: '00:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '15:00', closes: '01:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '15:00', closes: '01:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '15:00', closes: '00:00' },
      ],
      hasMenu: 'https://whereistheburger.ca/#menu',
      potentialAction: {
        '@type': 'OrderAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'https://www.ubereats.com/ca/store/wheres-the-burger/HDMbzKirRs2BntrHkijcgg',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        deliveryMethod: ['http://purl.org/goodrelations/v1#DeliveryModeDirectDownload'],
      },
      sameAs: ['https://www.instagram.com/wherestheburger/'],
    },
    {
      '@type': 'Menu',
      '@id': 'https://whereistheburger.ca/#menu',
      name: "Where's the Burger Menu",
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Veg Burgers',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'Mash Potash', offers: { '@type': 'Offer', price: '11.00', priceCurrency: 'CAD' } },
            { '@type': 'MenuItem', name: 'Green Bean', offers: { '@type': 'Offer', price: '13.00', priceCurrency: 'CAD' } },
            { '@type': 'MenuItem', name: 'Paneer Pioneer', offers: { '@type': 'Offer', price: '13.50', priceCurrency: 'CAD' } },
            { '@type': 'MenuItem', name: 'Little Champ Burger', offers: { '@type': 'Offer', price: '6.00', priceCurrency: 'CAD' } },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Non-Veg Burgers',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'Munchy Crunchy', offers: { '@type': 'Offer', price: '14.00', priceCurrency: 'CAD' } },
            { '@type': 'MenuItem', name: 'Chickly Pickly', offers: { '@type': 'Offer', price: '14.00', priceCurrency: 'CAD' } },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Sides',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'Dirty Fries', offers: { '@type': 'Offer', price: '13.00', priceCurrency: 'CAD' } },
            { '@type': 'MenuItem', name: 'Paneer Popcorn', offers: { '@type': 'Offer', price: '9.50', priceCurrency: 'CAD' } },
          ],
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bangers.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
