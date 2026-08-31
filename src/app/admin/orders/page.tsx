import { Button } from "@/components";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";

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
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-foreground/10" />
          <div className="aspect-video rounded-xl bg-foreground/10" />
          <div className="aspect-video rounded-xl bg-foreground/10" />
        </div>
        <div className="min-h-screen flex-1 rounded-xl bg-foreground/10 md:min-h-min" />
      </div>
    </>
  );
}
