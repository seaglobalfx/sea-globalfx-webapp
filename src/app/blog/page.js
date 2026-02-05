import Blog from "@/modules/blog";
import React from "react";

export const metadata = {
  title: "Sea Global FX Blog | Forex Trading Insights, Market Analysis & Education",
  description:
    "Explore expert forex trading insights, market analysis, platform guides, and educational articles from Sea Global FX to trade smarter and stay ahead of global markets",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function page() {
  return (
    <div>
      <Blog />
    </div>
  );
}
