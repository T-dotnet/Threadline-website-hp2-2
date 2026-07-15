"use client";

import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { StartButton } from "./StartButton";

const navItems = [
  ["How It Works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["For clinicians", "#clinicians"],
  ["Resources", "#resources"],
  ["Contact us", "#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label="Threadline home">
          <Image
            src="/assets/threadline-logo.svg"
            alt="Threadline"
            width={220}
            height={35}
            priority
          />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={28} /> : <List size={30} />}
        </button>
        <nav
          id="site-navigation"
          className={open ? "site-nav is-open" : "site-nav"}
        >
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <StartButton placement="navigation" />
      </div>
    </header>
  );
}
