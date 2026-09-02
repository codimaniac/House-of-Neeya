import { Button } from "@/components";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import AdminTable from "@/features/admin/components/AdminTable";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <AdminPageHeader>
        <AdminPageHeader.Content>
          <AdminPageHeader.Meta>Catalog</AdminPageHeader.Meta>
          <AdminPageHeader.Title>Products</AdminPageHeader.Title>
          <AdminPageHeader.Description>
            34 products in your catalog. Add new products to your store and manage existing ones.
          </AdminPageHeader.Description>
        </AdminPageHeader.Content>
        <AdminPageHeader.Actions>
          <Button><Plus />Add Product</Button>
        </AdminPageHeader.Actions>
      </AdminPageHeader>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-foreground/10" />
          <div className="aspect-video rounded-xl bg-foreground/10" />
          <div className="aspect-video rounded-xl bg-foreground/10" />
        </div>
        <div className="min-h-screen flex-1 rounded-xl bg-foreground/5 md:min-h-min">
          <AdminTable />
        </div>
      </div>
    </>
  );
}
