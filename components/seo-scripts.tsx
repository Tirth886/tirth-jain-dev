import { contact, analytics } from '@/config/site-config'
import Script from 'next/script'

interface SEOScriptsProps {
  url?: string
  title?: string
  description?: string
}

export default function SEOScripts({ 
  url = 'https://tirthj.dev',
  title = 'Tirth Jain | Full Stack Developer & Software Engineer',
  description = 'Professional full-stack developer with 6+ years experience in React, Next.js, Node.js, PHP. Available for international projects and consulting.'
}: SEOScriptsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tirth Jain",
    "jobTitle": "Full Stack Developer & Software Engineer",
    "description": description,
    "url": url,
    "email": contact.email,
    "telephone": contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Gujarat"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "MCA (Master In Computer Application)"
      }
    ],
    "knowsAbout": [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PHP", "Laravel", 
      "MongoDB", "MySQL", "AWS", "Full Stack Development", "Software Engineering"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": "Software Development",
      "description": "Full-stack web development, API development, database design, and software consulting services"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tirthjaindev",
      "https://github.com/Tirth886/"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tirth Jain Development Services",
    "description": "Professional software development and consulting services",
    "founder": {
      "@type": "Person",
      "name": "Tirth Jain"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "Complete web application development using modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development",
            "description": "RESTful API design and development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Database Design",
            "description": "Database architecture and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Consulting",
            "description": "Software architecture and technology consulting"
          }
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalytics}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics.googleAnalytics}', {
              page_title: '${title}',
              page_location: '${url}'
            });
          `,
        }}
      />

      {/* Hotjar Tracking */}
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${analytics.hotjar},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* Google Ads Conversion Tracking */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAds}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics.googleAds}');
          `,
        }}
      />
    </>
  )
}