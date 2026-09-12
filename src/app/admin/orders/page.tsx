import { Button } from "@/components";
import Input from "@/components/ui/Input";
import AdminPageContent from "@/features/admin/components/AdminPageContent";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import AdminTable from "@/features/admin/components/AdminTable";
import AdminTableTabs, { Tab } from "@/features/admin/components/AdminTableTabs";
import { Search } from "lucide-react";

const rowHeaders = ["order", "customer", "item", "total", "payment", "fulfillment", ""]
const row = {
    order: "ORD-001",
    customer: "John Doe",
    item: "Product A",
    total: "$100.00",
    payment: "Paid",
    fulfillment: "Shipped",
  }
const tableTabs = ["All", "Pending Payment", "Unfulfilled", "Shipped", "Delivered"]

export default function Page() {
  return (
    <>
      <AdminPageHeader>
        <AdminPageHeader.Content>
          <AdminPageHeader.Meta>Fulfillment</AdminPageHeader.Meta>
          <AdminPageHeader.Title>Orders</AdminPageHeader.Title>
          <AdminPageHeader.Description>
            124 orders total. 5 needs action.
          </AdminPageHeader.Description>
        </AdminPageHeader.Content>
        <AdminPageHeader.Actions>
          <Button variant="secondary">Export CSV</Button>
        </AdminPageHeader.Actions>
      </AdminPageHeader>
      <AdminPageContent>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <AdminTableTabs>
            {tableTabs.map((tab) => (
              <Tab key={tab} active={tab === "All"}>
                {tab}
              </Tab>
            ))}
          </AdminTableTabs>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search size={14} className="absolute -translate-y-1/2 top-1/2 left-2.5" />
              <Input type="text" placeholder="Search products..." className="pl-8.5" />
            </div>
          </div>
        </div>
        <div className="min-h-screen flex-1 rounded-xl bg-foreground/5 md:min-h-min">
          <AdminTable rowHeaders={rowHeaders} row={row} />
        </div>
      </AdminPageContent>
    </>
  );
}
