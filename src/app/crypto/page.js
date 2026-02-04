import Crypto from "@/modules/crypto";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Crypto Trading Market | Trade Bitcoin & Crypto CFDs | Sea Global FX",
  description:
    "Trade the crypto trading market with Sea Global FX. Access Bitcoin, Ethereum & top crypto CFDs with fast execution, transparent pricing, and MT4/MT5.",
  alternates: {
    canonical: `${SITE_URL}/crypto`,
  },
};

export default function page() {
  return (
    <div>
      <Crypto />
    </div>
  );
}
