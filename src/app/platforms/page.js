import Platforms from "@/modules/platforms";
import { SITE_URL } from "@/utils/config";
import React from "react";

export const metadata = {
  title: "Forex Trading Platforms | MT4 & MT5 | Sea Global FX",
  description:
    "Trade on powerful forex trading platforms including MT4, MT5, web, and mobile. Sea Global FX offers flexible, reliable platforms built for different trading styles.",
  alternates: {
    canonical: `${SITE_URL}/platforms`,
  },
};
export default function page() {
  return (
    <div>
      <Platforms />
    </div>
  );
}
