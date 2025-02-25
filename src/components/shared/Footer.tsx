import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`border-t border-[#dddbdc] bg-[#f5f4f4] ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg text-[#262626]">Account</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Log In
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Redeem a Gift Card
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg text-[#262626]">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Environmental Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Factories
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  DEI
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  International
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg text-[#262626]">Get Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg text-[#262626]">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#262626]">
                  Out Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-[#ffffff] border-[#dddbdc]"
              />
              <Button className="bg-[#262626] text-[#ffffff] hover:bg-[#3a3a3a]">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-[#dddbdc]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                Do Not Sell or Share My Personal Information
              </a>
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                CS Supply Chain Transparency
              </a>
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                Vendor Code of Conduct
              </a>
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                Sitemap Pages
              </a>
              <a
                href="#"
                className="text-sm text-[#737373] hover:text-[#262626]"
              >
                Sitemap Products
              </a>
            </div>
            <div className="text-sm text-[#737373]">
              © 2024 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
