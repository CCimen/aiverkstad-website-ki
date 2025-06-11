"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Hem", path: "/" },
    { name: "Om Eneo", path: "/eneo" },
    { name: "Plattform", path: "/platform" },
  ]

  return (
    <header className="border-b border-nordic-cloud bg-nordic-snow/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container flex h-[65px] items-center justify-center px-4 md:px-10 relative">
        {/* Logo - positioned absolute on left */}
        <div className="absolute left-4 md:left-10">
          <Link href="/" className="flex items-center group">
            <span className="font-bold text-base md:text-lg text-nordic-ink hover:text-nordic-forest transition-colors">AI-verkstaden</span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors ${
                mounted && pathname === item.path ? "text-nordic-forest" : "text-nordic-ink hover:text-nordic-graphite"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - positioned absolute on right */}
        <div className="absolute right-4 md:right-10">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-nordic-cloud bg-nordic-snow">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    mounted && pathname === item.path ? "text-nordic-forest" : "text-nordic-ink hover:text-nordic-graphite"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      )}
    </header>
  )
}
