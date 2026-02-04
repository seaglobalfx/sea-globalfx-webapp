import IndicesMarket from "@/modules/indicesMarket";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Indices Trading Market | Global Indices with Fast Execution",
  description:
    "Trade the indices trading market with Sea Global FX. Access major global stock indices with transparent pricing, fast execution, deep liquidity, and MT4/MT5.",
  alternates: {
    canonical: `${SITE_URL}/indices-market`,
  },
};
export default function page() {
  return (
    <div>
      <IndicesMarket />
    </div>
  );
}
