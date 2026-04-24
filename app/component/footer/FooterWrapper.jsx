"use client";

import { usePathname } from "next/navigation";
import MainFooter from "./footer";
import ServicesFooter from "../../services-resources=footer/footer/footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Check if the current route is under /services or /resources
  const isServicesOrResources = pathname.startsWith("/services") || pathname.startsWith("/resources");

  if (isServicesOrResources) {
    return <ServicesFooter />;
  }

  return <MainFooter />;
}
