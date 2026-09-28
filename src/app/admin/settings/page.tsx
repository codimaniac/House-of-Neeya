import { Button } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/TextArea";
import AdminPageContent from "@/features/admin/components/AdminPageContent";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import SettingSubsection from "@/features/admin/components/SettingSubsection";
import formatCurrency from "@/lib/formatCurrency";
import { Edit, Plus, X } from "lucide-react";

export default function Page() {
  return (
    <>
      <AdminPageHeader>
        <AdminPageHeader.Content>
          <AdminPageHeader.Meta>Configuration</AdminPageHeader.Meta>
          <AdminPageHeader.Title>Settings</AdminPageHeader.Title>
          <AdminPageHeader.Description>
            Manage store info, delivery pricing, payments and content.
          </AdminPageHeader.Description>
        </AdminPageHeader.Content>
      </AdminPageHeader>
      <AdminPageContent>
        <SettingSubsection>
          <SettingSubsection.Heading>
            <SettingSubsection.Title>Store Info</SettingSubsection.Title>
            <SettingSubsection.Description>Feeds the footer and contact page across the storefront.</SettingSubsection.Description>
          </SettingSubsection.Heading>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Input
              type="text"
              label="Store Name"
              value="House of Neeya"
              placeholder="Your store name"
              className="min-w-70 text-xs"
            />
            <Input
              type="email"
              label="Contact Email"
              placeholder="johndoe@email.com"
              value="anthoniachiamaka5@gmail.com"
              className="min-w-70 text-xs"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Input
              type="text"
              label="Phone Number"
              value="+234 913 119 9267"
              placeholder="Our Business Phone Number"
              className="min-w-70 text-xs"
            />
            <Input
              type="text"
              label="Address"
              value="Abuja, Nigeria"
              placeholder="Cario, Egypt"
              className="min-w-70 text-xs"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Input
              type="text"
              label="Business Hours"
              value="Mon - Sat, 8am - 8pm WAT"
              placeholder="Our Business Hour"
              className="min-w-70 text-xs"
            />
            <Input
              type="file"
              label="Logo"
              placeholder="Upload logo..."
              className="min-w-70 text-xs"
            />
          </div>
        </SettingSubsection>
        <SettingSubsection>
          <SettingSubsection.Heading>
            <SettingSubsection.Title>Delivery Fees</SettingSubsection.Title>
            <SettingSubsection.Description>Applied once per order at checkout, based on delivery state.</SettingSubsection.Description>
          </SettingSubsection.Heading>
          <div className="grid grid-cols-3 items-center justify-between gap-4 pb-4 text-xs border border-b-foreground/10">
            <p>Abuja, FCT</p>
            <Input
              type="text"
              value={formatCurrency(2000)}
              placeholder="Enter Delivery Fee"
              className="w-35 flex-1 text-xs"
            />
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-4 pb-4 text-xs border border-b-foreground/10">
            <p>Nasarawa</p>
            <Input
              type="text"
              value={formatCurrency(2000)}
              placeholder="Enter Delivery Fee"
              className="w-35 flex-1 text-xs"
            />
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-4 pb-4 text-xs border border-b-foreground/10">
            <p>Kano</p>
            <Input
              type="text"
              value={formatCurrency(2500)}
              placeholder="Enter Delivery Fee"
              className="w-35 flex-1 text-xs"
            />
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-4 pb-4 text-xs border border-b-foreground/10">
            <p>Rivers</p>
            <Input
              type="text"
              value={formatCurrency(3500)}
              placeholder="Enter Delivery Fee"
              className="w-35 flex-1 text-xs"
            />
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-4 pb-4 text-xs border border-b-foreground/10">
            <p>Lagos</p>
            <Input
              type="text"
              value={formatCurrency(3000)}
              placeholder="Enter Delivery Fee"
              className="w-35 flex-1 text-xs"
            />
          </div>
          <Button variant="link" className="w-fit"><Plus /> Add State</Button>
        </SettingSubsection>
        <SettingSubsection>
          <SettingSubsection.Heading>
            <SettingSubsection.Title>Announcement Bar</SettingSubsection.Title>
            <SettingSubsection.Description>The scrolling strip at the very top of the storefront.</SettingSubsection.Description>
          </SettingSubsection.Heading>
          <div className="flex items-center gap-4 pb-4 text-xs border border-b-foreground/10">
            <Input
              type="text"
              value="Free shipping on orders over ₦50,000 🚢"
              placeholder="Enter Delivery Fee"
              className="flex-1 text-xs"
            />
            <button><Edit size={14} /></button>
            <button><X size={14} /></button>
          </div>
          <div className="flex flex-col gap-4 pb-4 text-xs border border-b-foreground/10">
            <p className="uppercase">Message</p>
            <Input
              type="text"
              placeholder="Enter Message"
              className="flex-1 text-xs"
            />
          </div>
          <Button variant="link" className="font-bold w-fit"><Plus /> Add Message</Button>
        </SettingSubsection>
        <SettingSubsection>
          <SettingSubsection.Heading>
            <SettingSubsection.Title>Policies</SettingSubsection.Title>
            <SettingSubsection.Description>Powers the Returns, Shipping, and FAQ content on the Contact page.</SettingSubsection.Description>
          </SettingSubsection.Heading>
          <div className="flex flex-col gap-4 pb-4 text-xs border border-b-foreground/10">
            <p className="uppercase">Return Policy</p>
            <Textarea
              placeholder="Enter Your Return Policy."
              className="flex-1 text-xs min-h-20"
            />
          </div>
          <div className="flex flex-col gap-4 pb-4 text-xs border border-b-foreground/10">
            <p className="uppercase">Shipping Info</p>
            <Textarea
              placeholder="Enter Your Shipping Info."
              className="flex-1 text-xs min-h-20"
            />
          </div>
        </SettingSubsection>
        <SettingSubsection>
          <SettingSubsection.Heading>
            <SettingSubsection.Title>Admin Users</SettingSubsection.Title>
            <SettingSubsection.Description>People with access to this dashboard.</SettingSubsection.Description>
          </SettingSubsection.Heading>
          <div className="flex items-center gap-2 py-2 min-w-fit">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Avatar>
                <AvatarImage src="/avatar" alt="Jane Matthews" />
                <AvatarFallback className="bg-accent text-background">AA</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight tracking-widest">
              <span className="truncate font-medium text-base font-serif">Anthonia Akachukwu</span>
              <span className="truncate text-[10px] font-light">anthoniaakachukwu05@gmail.com</span>
            </div>
            <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs uppercase">Owner</span>
          </div>
          <div className="flex items-center gap-2 py-2 min-w-fit">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Avatar>
                <AvatarImage src="/avatar" alt="Jane Matthews" />
                <AvatarFallback className="bg-accent text-background">JN</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight tracking-widest">
              <span className="truncate font-medium text-base font-serif">Jane Matthews</span>
              <span className="truncate text-[10px] font-light">janematthews@gmail.com</span>
            </div>
            <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs uppercase">Admin</span>
          </div>
          <Button variant="link" className="font-bold w-fit"><Plus />Invite Admin</Button>
        </SettingSubsection>
      </AdminPageContent>
    </>
  );
}
