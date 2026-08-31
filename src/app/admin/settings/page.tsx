import AdminPageHeader from "@/features/admin/components/AdminPageHeader";

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
