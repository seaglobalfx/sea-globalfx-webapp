import Commodities from "@/modules/commodities";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Commodities Trading Market | Trade Gold, Metals & Oil | Sea Global FX",
  description:
    "Trade the commodities trading market with Sea Global FX. Access gold, oil, metals & energy markets with transparent pricing, fast execution, and MT4/MT5.",
  alternates: {
    canonical: `${SITE_URL}/commodities`,
  },
};

export default function page() {
  return (
    <div>
      <Commodities />
    </div>
  );
}
