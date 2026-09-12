import { Button } from "@/components";
import Input from "@/components/ui/Input";
import AdminPageContent from "@/features/admin/components/AdminPageContent";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import SettingSubsection from "@/features/admin/components/SettingSubsection";
import formatCurrency from "@/lib/formatCurrency";
import { Plus } from "lucide-react";

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
      </AdminPageContent>
    </>
  );
}
