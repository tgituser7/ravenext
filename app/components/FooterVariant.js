"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const RAVE_VARIANT_ROUTES = ["/about", "/network", "/career", "/contactus", "/news", "/resources"];

export default function FooterVariant() {
  const pathname = usePathname();
  const variant = RAVE_VARIANT_ROUTES.includes(pathname) ? "rave" : "about";
  return <Footer variant={variant} />;
}
