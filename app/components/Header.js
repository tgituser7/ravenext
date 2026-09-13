"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/network", label: "Network" },
  { href: "/studio", label: "Studio" },
  { href: "/news", label: "News" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef(null);

  const closeMenu = () => {
    if (!open) return;
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 1000);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!open) {
      setClosing(false);
      setOpen(true);
    } else {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleBodyClick = () => closeMenu();
    document.body.addEventListener("click", handleBodyClick);
    const handleContextMenu = (e) => e.preventDefault();
    document.body.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
      document.body.removeEventListener("contextmenu", handleContextMenu);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top${open ? " bg-light" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={toggleMenu}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link href="/" onClick={(e) => e.stopPropagation()}>
            <img src="/res/logo.png" className="logo-img" style={{ width: 75 }} alt="Rave" />
          </Link>
          <img src="/res/menu-icon.png" style={{ height: "2rem" }} alt="Menu" />
          <Link href="/contactus" onClick={(e) => e.stopPropagation()}>
            <img
              style={{ height: "3rem" }}
              className="contactusbtn"
              src="/res/contact-icon.png"
              alt="Contact us"
            />
          </Link>
        </div>
      </nav>
      <div
        className={`menu-options bg-light${closing ? " menu-box" : ""}`}
        style={{ display: open ? "block" : "none" }}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
      >
        <div
          className={`mx-4 menu-row${closing ? " menu-options-opacity" : ""}`}
          style={{ display: open ? "flex" : "none" }}
        >
          {NAV_LINKS.map((link, i) => (
            <Fragment key={link.href}>
              <h4>
                <Link href={link.href}>{link.label}</Link>
              </h4>
              {i < NAV_LINKS.length - 1 && <span></span>}
            </Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
