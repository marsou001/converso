"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
]

export default function NavItems() {
  const pathname = usePathname()
  
  return (
    <nav className="flex items-center gap-4">
      {navItems.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.href}
          className={cn(pathname === navItem.href && "text-primary font-semibold")}
        >
          { navItem.label }
        </Link>
      ))}
    </nav>
  )
}