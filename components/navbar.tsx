"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Översikt", path: "/" },
    { name: "Plattform", path: "/platform" },
    { name: "Om Eneo", path: "/eneo" },
    { name: "Aktivera", path: "/activate" },
  ]

  return (
    <header className="border-b border-[#CBD5E1] bg-white sticky top-0 z-50">
      <div className="container flex h-[65px] items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-2 md:gap-4 group">
            <div className="h-4 w-4 bg-[#0F172A] rounded-sm group-hover:bg-[#16A34A] transition-colors" />
            <span className="font-bold text-base md:text-lg text-[#0F172A]">AI-verkstaden</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 md:gap-9">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.path ? "text-[#16A34A]" : "text-[#0F172A] hover:text-[#334155]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center max-w-[200px] lg:max-w-[256px] min-w-[160px]">
            <div className="flex items-center bg-[#F1F5F9] rounded-xl overflow-hidden transition-all hover:shadow-md focus-within:shadow-md focus-within:ring-1 focus-within:ring-[#16A34A] w-full">
              <div className="flex items-center justify-center w-10 h-10 bg-[#F1F5F9] pl-4">
                <Search className="h-6 w-6 text-[#475569]" />
              </div>
              <Input
                placeholder="Sök"
                className="border-0 bg-[#F1F5F9] text-[#475569] placeholder:text-[#64748B] h-10 px-2 pr-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Sök"
              />
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-4 h-10 rounded-xl transition-all hover:shadow-md text-sm lg:text-base"
              asChild
            >
              <Link href="/activate">Kom igång</Link>
            </Button>

            <Avatar className="h-10 w-10 ring-offset-background transition-all hover:ring-2 hover:ring-[#16A34A]">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-[#F1F5F9] text-[#475569]">A</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu Button */}
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
        <div className="md:hidden border-t border-[#CBD5E1] bg-white">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    pathname === item.path ? "text-[#16A34A]" : "text-[#0F172A] hover:text-[#334155]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Search */}
            <div className="flex items-center bg-[#F1F5F9] rounded-xl overflow-hidden">
              <div className="flex items-center justify-center w-10 h-10 bg-[#F1F5F9] pl-4">
                <Search className="h-5 w-5 text-[#475569]" />
              </div>
              <Input
                placeholder="Sök"
                className="border-0 bg-[#F1F5F9] text-[#475569] placeholder:text-[#64748B] h-10 px-2 pr-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Sök"
              />
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center justify-between pt-2">
              <Button
                className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-4 h-10 rounded-xl transition-all hover:shadow-md flex-1 mr-4"
                asChild
              >
                <Link href="/activate">Kom igång</Link>
              </Button>

              <Avatar className="h-10 w-10 ring-offset-background transition-all hover:ring-2 hover:ring-[#16A34A]">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-[#F1F5F9] text-[#475569]">A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
