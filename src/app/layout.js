import "./globals.css";
import "../scss/main.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floatingWhatsapp";
import "swiper/css";
import ApolloClientProvider from "@/components/ApolloClientProvider";
import PageSchema from "@/utils/PageSchema";
import { Toaster } from "sonner";
export const metadata = {
  title: "SEA GLOBAL",
  description:
    "Trade global markets with a trusted online forex broker. Sea Global FX offers low spreads, fast execution, MT4/MT5 platforms, and secure trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js"></script>
        {/* google-site-verification */}
        <meta name="google-site-verification" content="HfhzTEbm6wRAcIwI_kI4b9O-8zMqScTooOpMJY9C8sI" />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E27QCE3JE1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E27QCE3JE1');
            `,
          }}
        />
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MMKX98B2')
            `,
          }}
        />
        {/* <!-- Meta Pixel Code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '4170972363233509');
                fbq('track', 'PageView');
            `,
          }}
        />
        <noscript><img height="1" width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=4170972363233509&ev=PageView&noscript=1"
        /></noscript>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "SEA Global FX",
                "url": "https://seaglobalfx.com/",
                "logo": "https://blog.seaglobalfx.com/uploads/image_12_66fa566a3b.png",
                "email": "support@seaglobalfx.com",
                "telephone": "+971582619955",
                "identifier": {
                  "@type": "PropertyValue",
                  "propertyID": "Company Registration Number",
                  "value": "2025-00352"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1st Floor, The Sotheby Building, Rodney Bay",
                  "addressLocality": "Gros-Islet",
                  "addressRegion": "Castries",
                  "postalCode": "838",
                  "addressCountry": "LC"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+971582619955",
                  "contactType": "customer support",
                  "email": "support@seaglobalfx.com",
                  "availableLanguage": "English"
                },
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61586171626639",
                  "https://x.com/seaglobalfx",
                  "https://www.youtube.com/@seaglobalfx"
                ]
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://seaglobalfx.com/#website",
              "url": "https://seaglobalfx.com/",
              "name": "SEA Global FX",
              "publisher": {
                "@type": "Organization",
                "@id": "https://seaglobalfx.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://seaglobalfx.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
            `,
          }}
        />
        <PageSchema />
      </head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMKX98B2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ApolloClientProvider>
          <Header />
          {children}
          <Footer />
          <FloatingWhatsapp />
          <Toaster />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
