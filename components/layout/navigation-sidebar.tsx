"use client";

import Link from "next/link";
import { SIDEBAR_NAV } from "@/app/constants/sidebar";
import { Target } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const NavigationSidebar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <div className="sticky top-0 left-0 h-screen flex ">
        <div>
          <div className="w-full flex justify-center mb-12 mt-6">
            <Target size={32} className="text-blue-600" />
          </div>
          <div className="flex flex-col gap-6 px-3">
            {SIDEBAR_NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center justify-center hover:bg-gray-200 p-2 rounded-md ${
                    pathname === item.href ? "bg-gray-300 font-bold" : ""
                  }`}
                >
                  <item.icon
                    size={26}
                    className={`
                      ${
                        pathname === item.href ? "bg-gray-300" : "text-gray-600"
                      }
                    `}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Separator orientation="vertical" />
      </div>
      <div className="px-4 pt-6">{children}</div>
    </div>
  );
};

export default NavigationSidebar;
