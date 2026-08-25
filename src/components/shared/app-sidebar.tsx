"use client";

import * as React from "react";

import { NavProjects } from "@/components/shared/nav-projects";
import { NavUser } from "@/components/shared/nav-user";
import LogoDarkAlt from "@/assets/Logo-Icon-Dark-Alt.png"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "Jane Matthew",
    email: "janematthew@hotmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Products",
      url: "/admin/products",
      icon: <Package />,
    },
    {
      name: "Orders",
      url: "/admin/orders",
      icon: <ShoppingBag />,
    },
    {
      name: "Analytics",
      url: "/admin/analytics",
      icon: <ChartNoAxesCombined />,
    },
    {
      name: "Settings",
      url: "/admin/settings",
      icon: <Settings />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-black" collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 py-2 min-w-fit">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Image src={LogoDarkAlt} alt="Logo" className="h-4 w-auto" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">House of Neeya</span>
            <span className="truncate text-xs">Admin</span>
          </div>          
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
