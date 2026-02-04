import Stocks from "@/modules/stocks";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Stocks Trading Market Online | Global Stock CFDs | Sea Global FX",
  description:
    "The stocks trading market lets you trade global shares without owning them. Trade stock CFDs with transparent pricing, fast execution, and MT4/MT5.",
  alternates: {
    canonical: `${SITE_URL}/stocks`,
  },
};

export default function page() {
  return (
    <div>
      <Stocks />
    </div>
  );
}
