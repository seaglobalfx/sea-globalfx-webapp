import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/modules/home";
import { SITE_URL } from "@/utils/config";

export const metadata = {
  title: "Sea Global FX | Low Spread Forex Broker with Fast Execution & MT5",
  description:
    "Trade global markets with a trusted online forex broker. Sea Global FX offers low spreads, fast execution, MT4/MT5 platforms, and secure trading.",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return <HomePage />;
}
