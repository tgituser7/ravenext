"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TRANSPARENT_ROUTES = ["/distribution"];

const NAV_LINKS = [
  {
    href: "/production",
    label: "Production",
    subLinks: [
      { href: "/production", label: "Film Production" },
      { href: "/production", label: "Television & Broadcast Production" },
      { href: "/production", label: "Digital & Branded Content Production" },
      { href: "/production", label: "Music & Audio Production" },
    ],
  },
  {
    href: "/distribution",
    label: "Distribution",
    subLinks: [
      { href: "/distribution", label: "Theatrical Distribution" },
      { href: "/distribution", label: "OTT & Digital Distribution" },
      { href: "/distribution", label: "Broadcast & Syndication" },
      { href: "/distribution", label: "International Distribution" },
    ],
  },
  {
    href: "/licensing",
    label: "Licensing",
    subLinks: [
      { href: "/licensing", label: "Content Licensing" },
      { href: "/licensing", label: "Music & Sync Licensing" },
      { href: "/licensing", label: "Format Licensing" },
      { href: "/licensing", label: "Rights & Royalty Management" },
    ],
  },
  {
    href: "/publicity-release",
    label: "Publicity & Release",
    subLinks: [
      { href: "/publicity-release", label: "Public Relations & Media Outreach" },
      { href: "/publicity-release", label: "Release Strategy & Planning" },
      { href: "/publicity-release", label: "Premieres, Junkets & Events" },
      { href: "/publicity-release", label: "Crisis & Reputation Management" },
    ],
  },
  {
    href: "/merchandising",
    label: "Merchandising",
    subLinks: [
      { href: "/merchandising", label: "Product & Character Licensing" },
      { href: "/merchandising", label: "Retail Partnerships" },
      { href: "/merchandising", label: "E-commerce & D2C" },
      { href: "/merchandising", label: "Collectibles & Limited Editions" },
    ],
  },
  {
    href: "/brand-partner",
    label: "Brand Partner",
    subLinks: [
      { href: "/brand-partner", label: "Brand Integration & Product Placement" },
      { href: "/brand-partner", label: "Sponsorships & Co-Branded Campaigns" },
      { href: "/brand-partner", label: "Influencer & Talent Partnerships" },
      { href: "/brand-partner", label: "Experiential Marketing" },
    ],
  },
  {
    href: "/projects",
    label: "Studio",
    subLinks: [
      { href: "/projects", label: "Film Studio" },
      { href: "/projects", label: "Recording Studio" },
      { href: "/projects", label: "Photo Studio" },
      { href: "/projects", label: "Digital & Chroma Studio" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [lastSubmenu, setLastSubmenu] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const submenuTimer = useRef(null);

  const showSubmenu = (i) => {
    if (submenuTimer.current) clearTimeout(submenuTimer.current);
    setActiveSubmenu(i);
    setLastSubmenu(i);
  };

  const hideSubmenuDelayed = () => {
    if (submenuTimer.current) clearTimeout(submenuTimer.current);
    submenuTimer.current = setTimeout(() => setActiveSubmenu(null), 200);
  };

  useEffect(() => {
    return () => {
      if (submenuTimer.current) clearTimeout(submenuTimer.current);
    };
  }, []);

  const isTransparentRoute = TRANSPARENT_ROUTES.includes(pathname);

  useEffect(() => {
    if (!isTransparentRoute) return undefined;
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentRoute]);

  const navClassName = `rv-navbar${
    isTransparentRoute && !scrolled && activeSubmenu === null ? " rv-navbar--transparent" : ""
  }`;

  return (
    <header className={navClassName}>
      <div className="rv-navbar-inner">
        <Link href="/" className="rv-navbar-logo" onClick={() => setMobileOpen(false)}>
          <img src="/res/logo.png" alt="Rave" />
        </Link>

        <ul className="rv-navbar-links">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={activeSubmenu === i ? "active" : ""}
              onMouseEnter={() => showSubmenu(i)}
              onMouseLeave={hideSubmenuDelayed}
            >
              <Link href={link.href} className="rv-nav-link">
                {link.label}
                <span className="rv-chevron">▾</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contactus" className="rv-navbar-contact">
          <img src="/res/contact-icon.png" alt="Contact us" />
        </Link>

        <button
          type="button"
          className="rv-navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <img src="/res/menu-icon.png" alt="Menu" />
        </button>
      </div>

      <div
        className={`rv-submenu-panel${activeSubmenu !== null ? " open" : ""}`}
        onMouseEnter={() => showSubmenu(lastSubmenu)}
        onMouseLeave={hideSubmenuDelayed}
      >
        <div className="rv-submenu-inner" key={lastSubmenu}>
          {NAV_LINKS[lastSubmenu].subLinks.map((sub) => (
            <Link key={sub.label} href={sub.href} className="rv-submenu-row">
              {sub.label}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="rv-mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="rv-mobile-link" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
