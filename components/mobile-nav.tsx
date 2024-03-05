import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// Import useRouter from Next.js

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { Icons } from "@/components/icons"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false) // State to manage menu visibility
  const router = useRouter() // Initialize useRouter

  // Lock body on mount and unlock on unmount
  useLockBody()

  // Function to handle menu close
  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false) // Close the menu when a link is clicked
  }

  return (
    <div>
      {/* Overlay to close menu when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={handleCloseMenu} // Close menu when overlay is clicked
        />
      )}

      {/* Mobile navigation menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
          isOpen ? "" : "hidden" // Hide menu when isOpen is false
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                onClick={handleLinkClick} // Call handleLinkClick on link click
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {children}
        </div>
      </div>

      {/* Hamburger menu button */}
      <button
        className="fixed right-6 top-6 z-50 rounded-md bg-white p-2 shadow-md md:hidden"
        onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
      >
        <Icons.menu />
      </button>
    </div>
  )
}
