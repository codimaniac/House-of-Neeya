
import Select from "@/components/ui/SelectInput";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";

export default function Page() {
  return (
    <>
      <AdminPageHeader>
        <AdminPageHeader.Content>
          <AdminPageHeader.Meta>Overview</AdminPageHeader.Meta>
          <AdminPageHeader.Title>Store Performance</AdminPageHeader.Title>
          <AdminPageHeader.Description>
            Revenue, orders and customer activity across House of Neeya.
          </AdminPageHeader.Description>
        </AdminPageHeader.Content>
        <AdminPageHeader.Actions>
        <Select>
          <option value="30 days">Last 30 days</option>
          <option value="60 days">Last 60 days</option>
          <option value="90 days">Last 90 days</option>
          <option value="1 year">This year</option>
        </Select>
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
