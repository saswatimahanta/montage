"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { SIDEBAR_NAV } from "@/app/constants/sidebar";
import { Target } from "lucide-react";
import { usePathname } from "next/navigation";

const NavigationSidebar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="px-5 py-6">
          {/* color */}
          <SidebarContent className="bg-white">
            <aside>
              <Target size={50} className="mb-6" />
              <nav aria-label="Sidebar navigation">
                <ul className="flex flex-col gap-4">
                  {SIDEBAR_NAV.map((navItem) => (
                    // color
                    <li
                      key={navItem.label}
                      className={`p-3 rounded-md ${
                        pathname === navItem.href
                          ? "bg-gray-100 text-black"
                          : "text-gray-500"
                      }`}
                    >
                      <Link
                        href={navItem.href}
                        className="flex gap-2 items-center font-bold text-sm"
                      >
                        {navItem.icon && (
                          <navItem.icon size={20} strokeWidth={2.4} />
                        )}
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </SidebarContent>
          <SidebarFooter>Footer Content</SidebarFooter>
        </Sidebar>

        {/* Page content */}
        <SidebarInset>
          <header className="h-14 flex items-center px-4">
            <SidebarTrigger />
          </header>

          <main className="flex-1 p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default NavigationSidebar;
