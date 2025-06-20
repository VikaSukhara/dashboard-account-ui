"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  UserGroupIcon,
  UserCircleIcon,
  ClipboardDocumentIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  { label: "Dashboard", path: "/", icon: HomeIcon },
  { label: "Accounts", icon: UserGroupIcon },
  { label: "Brokers", icon: UserCircleIcon },
  { label: "Submissions", icon: ClipboardDocumentIcon },
  { label: "Organizations", icon: BanknotesIcon },
  { label: "Goals & Rules", icon: Cog6ToothIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
  { label: "Admin", icon: KeyIcon },
];

export function NavigationBar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;
    const handleScroll = () => checkScroll();
    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    containerRef.current?.scrollBy({
      left: dir === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
    
      {showLeft && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1e2233] p-1 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeftIcon className="w-5 h-5 text-white" />
        </button>
      )}

    
      <nav
        ref={containerRef}
        className="flex overflow-x-auto gap-2 py-6 scroll-smooth no-scrollbar"
      >
        {navItems.map((item, index) => {
          const path =
            item.path ??
            "/" +
              item.label
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/\s+/g, "-");

          const isActive = pathname === path;
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={path}
              className={cn(
                "flex items-center gap-2 md:px-4 sm:px-5 py-[4px] px-3 rounded-[20px] border text-[12px] transition whitespace-nowrap",
                isActive
                  ? "bg-[#4298F3] text-white border-[#4298F3]"
                  : "bg-[#0c0f17] text-gray-300 border-[#363C4A] hover:bg-[#3181DB] focus:bg-blue-600 focus:text-white"
              )}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {item.label}
            </Link>
          );
        })}
      </nav>

    
      {showRight && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1e2233] p-1 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}
