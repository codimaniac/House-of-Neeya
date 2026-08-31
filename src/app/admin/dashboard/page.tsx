import { Button } from "@/components";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import { Plus } from "lucide-react";

type MonthToStringMap = {
  [key: number]: string;
};

const monthtoStringMap: MonthToStringMap = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
}

export default function Page() {
  const date = new Date()
  const month = monthtoStringMap[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  return (
    <>
      <AdminPageHeader>
        <AdminPageHeader.Content>
          <AdminPageHeader.Meta>Today • {month} {day}, {year}</AdminPageHeader.Meta>
          <AdminPageHeader.Title>Good Morning, Jane</AdminPageHeader.Title>
          <AdminPageHeader.Description>
            Here&apos;s what&apos;s happening at House of Neeya right now.
          </AdminPageHeader.Description>
        </AdminPageHeader.Content>
        <AdminPageHeader.Actions>
          <Button variant="secondary">View Pending Orders</Button>
          <Button><Plus />Add Product</Button>
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
