"use client"

import { Button } from "@/components";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import StatCard from "@/features/admin/components/StatCard";
import SummaryTable from "@/features/admin/components/SummaryTable";
import formatCurrency from "@/lib/formatCurrency";
import { ArrowRight, ArrowUp, ClipboardCheck, PackageCheck, PackageX, Plus, ShoppingBag, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const hour = date.getHours()
  let timeOfDay

  switch (true) {
      case (hour >= 5 && hour < 12):
        timeOfDay = "Morning"
        break;

      case (hour >= 12 && hour < 17):
        timeOfDay = "Afternoon"
        break;

      case (hour >= 17 && hour < 21):
        timeOfDay = "Evening"
        break;
    
      default:
        timeOfDay = "Night"
    }

    const router = useRouter()


  return (
    <>
      <AdminPageHeader>
        <AdminPageHeader.Content>
          <AdminPageHeader.Meta>Today • {month} {day}, {year}</AdminPageHeader.Meta>
          <AdminPageHeader.Title>Good {timeOfDay}, Jane</AdminPageHeader.Title>
          <AdminPageHeader.Description>
            Here&apos;s what&apos;s happening at House of Neeya right now.
          </AdminPageHeader.Description>
        </AdminPageHeader.Content>
        <AdminPageHeader.Actions>
          <Button variant="secondary" className="w-fit" onClick={() => router.push("/admin/orders")}>View Pending Orders</Button>
          <Button className="w-fit"><Plus />Add Product</Button>
        </AdminPageHeader.Actions>
      </AdminPageHeader>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-4">
          <StatCard>
            <StatCard.Label>Revenue Today</StatCard.Label>
            <StatCard.Value>{ formatCurrency(142200) }</StatCard.Value>
            <StatCard.Progress><ArrowUp size={12} /> 8.2% vs Yesterday</StatCard.Progress>
          </StatCard>
          <StatCard>
            <StatCard.Label>Orders Today</StatCard.Label>
            <StatCard.Value>9</StatCard.Value>
            <StatCard.Progress><ArrowUp size={12} /> 2 vs Yesterday</StatCard.Progress>
          </StatCard>
          <StatCard>
            <StatCard.Label>Needs Attention</StatCard.Label>
            <StatCard.Value>7</StatCard.Value>
            <StatCard.Progress className="text-accent">3 pending • 2 unfulfilled</StatCard.Progress>
          </StatCard>
          <StatCard>
            <StatCard.Label>Low Stock Items</StatCard.Label>
            <StatCard.Value>4</StatCard.Value>
            <StatCard.Progress className="text-accent">Restock recommended</StatCard.Progress>
          </StatCard>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <SummaryTable>
            <SummaryTable.Header>
              <SummaryTable.Title>Need your attention</SummaryTable.Title>
              <SummaryTable.Action>View all orders <ArrowRight /></SummaryTable.Action>
            </SummaryTable.Header>
            <SummaryTable.Content>
              <SummaryTable.Empty>
                <ClipboardCheck />
                <p className="font-bold">No orders need attention</p>
                <p className="normal-case">You&apos;re all caught up!</p>
              </SummaryTable.Empty>
            </SummaryTable.Content>
          </SummaryTable>
          <SummaryTable>
            <SummaryTable.Header>
              <SummaryTable.Title>Low stock</SummaryTable.Title>
              <SummaryTable.Action>Manage products <ArrowRight /></SummaryTable.Action>
            </SummaryTable.Header>
            <SummaryTable.Content>
              <SummaryTable.Empty>
                <PackageCheck />
                <p className="font-bold">No low stock items</p>
                <p className="normal-case">All products are sufficiently stocked!</p>
              </SummaryTable.Empty>
            </SummaryTable.Content>
          </SummaryTable>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <SummaryTable>
            <SummaryTable.Header>
              <SummaryTable.Title>Recent Orders</SummaryTable.Title>
              <SummaryTable.Action>View all <ArrowRight /></SummaryTable.Action>
            </SummaryTable.Header>
            <SummaryTable.Content>
              <SummaryTable.Empty>
                <ShoppingBag />
                <p className="font-bold">No recent orders</p>
                <p className="normal-case">New orders will appear here when customers places them</p>
              </SummaryTable.Empty>
            </SummaryTable.Content>
          </SummaryTable>
          <SummaryTable>
            <SummaryTable.Header>
              <SummaryTable.Title>Top Product</SummaryTable.Title>
              <SummaryTable.Action>View analytics <ArrowRight /></SummaryTable.Action>
            </SummaryTable.Header>
            <SummaryTable.Content>
              <SummaryTable.Empty>
                <Trophy />
                <p className="font-bold">No top product yet</p>
                <p className="normal-case">Start selling more to get featured!</p>
              </SummaryTable.Empty>
            </SummaryTable.Content>
          </SummaryTable>
        </div>
      </div>
    </>
  );
}
