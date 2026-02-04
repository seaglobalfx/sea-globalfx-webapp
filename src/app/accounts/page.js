import Accounts from "@/modules/accounts";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Forex Trading Accounts | Flexible MT5 Accounts | Sea Global FX",
  description:
    "Compare forex trading accounts at Sea Global FX. Choose flexible MT5 accounts with transparent pricing, low deposits, and fast account setup.",
  alternates: {
    canonical: `${SITE_URL}/accounts`,
  },
};

export default function page() {
  return (
    <div>
      <Accounts />
    </div>
  );
}
