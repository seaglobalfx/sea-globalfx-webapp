const schemaArray = [
  {
    Path: "/",
    Data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I open an account with Sea Global FX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can open an account by completing the online registration form and verifying your identity. Once approved, you can fund your account and start trading.",
          },
        },
        {
          "@type": "Question",
          name: "Are funding and withdrawal requests processed immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Funding is usually instant, while withdrawals are processed as quickly as possible and may take a short time depending on the payment method used.",
          },
        },
        {
          "@type": "Question",
          name: "What is forex trading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Forex trading involves buying one currency and selling another to profit from changes in their exchange rates.",
          },
        },
        {
          "@type": "Question",
          name: "Is MetaTrader 5 good for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MetaTrader 5 is user-friendly, widely used, and offers helpful tools for both beginners and experienced traders.",
          },
        },
        {
          "@type": "Question",
          name: "Why is risk management important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Risk management helps protect trading capital by controlling how much is risked on each trade using tools like stop-loss orders and proper position sizing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest mistake new traders make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is risking too much on a single trade, often due to emotional or overconfident decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Is trading suitable for everyone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trading involves risk and may not be suitable for everyone. It is important to understand the risks and trade responsibly.",
          },
        },
        {
          "@type": "Question",
          name: "What is trading psychology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trading psychology refers to managing emotions such as fear, greed, and stress to make disciplined and rational trading decisions.",
          },
        },
      ],
    },
  },
  {
    Path: "/forex-market",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://seaglobalfx.com/forex-market" },
        { "@type": "ListItem", position: 3, name: "Forex", item: "https://seaglobalfx.com/forex-market" },
      ],
    },
  },
  {
    Path: "/indices-market",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://seaglobalfx.com/indices-market" },
        { "@type": "ListItem", position: 3, name: "Indices", item: "https://seaglobalfx.com/indices-market" },
      ],
    },
  },
  {
    Path: "/commodities",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://seaglobalfx.com/commodities" },
        { "@type": "ListItem", position: 3, name: "Commodities", item: "https://seaglobalfx.com/commodities" },
      ],
    },
  },
  {
    Path: "/stocks",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://seaglobalfx.com/stocks" },
        { "@type": "ListItem", position: 3, name: "Stocks", item: "https://seaglobalfx.com/stocks" },
      ],
    },
  },
  {
    Path: "/crypto",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://seaglobalfx.com/crypto" },
        { "@type": "ListItem", position: 3, name: "Crypto", item: "https://seaglobalfx.com/crypto" },
      ],
    },
  },
  {
    Path: "/etfs",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://seaglobalfx.com/etfs" },
        { "@type": "ListItem", position: 3, name: "ETFs", item: "https://seaglobalfx.com/etfs" },
      ],
    },
  },
  {
    Path: "/accounts",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Trading", item: "https://seaglobalfx.com/accounts" },
        { "@type": "ListItem", position: 3, name: "Accounts", item: "https://seaglobalfx.com/accounts" },
      ],
    },
  },
  {
    Path: "/platforms",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Trading", item: "https://seaglobalfx.com/platforms" },
        { "@type": "ListItem", position: 3, name: "Platforms", item: "https://seaglobalfx.com/platforms" },
      ],
    },
  },
  {
    Path: "/blog",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://seaglobalfx.com/blog" },
      ],
    },
  },
  {
    Path: "/aboutus",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Company", item: "https://seaglobalfx.com/aboutus" },
        { "@type": "ListItem", position: 3, name: "About Us", item: "https://seaglobalfx.com/aboutus" },
      ],
    },
  },
  {
    Path: "/aboutus",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Company", item: "https://seaglobalfx.com/contact-us" },
        { "@type": "ListItem", position: 3, name: "About Us", item: "https://seaglobalfx.com/contact-us" },
      ],
    },
  },
  {
    Path: "/advanced-trading-solutions",
    Data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://seaglobalfx.com/" },
        { "@type": "ListItem", position: 2, name: "Trading", item: "https://seaglobalfx.com/advanced-trading-solutions" },
        { "@type": "ListItem", position: 3, name: "Advanced Trading Solutions", item: "https://seaglobalfx.com/advanced-trading-solutions" },
      ],
    },
  },
];

export const schemaMap = new Map(
  schemaArray.map((item) => [item.Path, item.Data])
);

export const schema = schemaArray;