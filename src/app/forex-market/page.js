import ForexMarket from "@/modules/forexMarket";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Forex Trading Market | Tight Spreads & Fast Execution | Sea Global FX",
  description:
    "Trade the forex trading market with Sea Global FX. Access major & minor currency pairs with tight spreads, deep liquidity, fast execution, and MT4/MT5.",
  alternates: {
    canonical: `${SITE_URL}/forex-market`,
  },
};

export default function page() {
  return (
    <div>
      <ForexMarket />
    </div>
  );
}
