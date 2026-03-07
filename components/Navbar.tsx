"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { isSignedIn, user } = useUser(); // check signed in state

  return (
    <header className="w-full fixed z-50 bg-('--bg-primary')">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="flex gap-0.5 items-center">
          <Image
            src={"/assets/logo.png"}
            alt="Lectra AI"
            width={42}
            height={26}
          />
          <span className="logo-text">Lectra AI</span>
        </Link>

        {/* Navigation */}
        <nav className="w-fit flex gap-7 items-center">
          {navItems.map(({ label, href }) => {
            const isActive =
              pathName === href || (href !== "/" && pathName.startsWith(href));

            return (
              <Link
                href={href}
                key={label}
                className={cn(
                  "nav-link-base",
                  isActive ? "nav-link-active" : "text-black hover:opacity-70"
                )}
              >
                {label}
              </Link>
            );
          })}

          {/* Conditional rendering for Clerk authentication */}
          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <UserButton />
              {user?.firstName && (
                <Link href={"/subscriptions"} className="nav-user-name">
                  {user?.firstName}
                </Link>
              )}
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="btn">Sign In</button>
            </SignInButton>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
