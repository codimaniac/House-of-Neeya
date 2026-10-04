"use client"

import Select from "@/components/ui/SelectInput";
import AdminPageContent from "@/features/admin/components/AdminPageContent";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import StatCard from "@/features/admin/components/StatCard";
import SummaryTable from "@/features/admin/components/SummaryTable";
import formatCurrency from "@/lib/formatCurrency";
import { ArrowUp, ClipboardCheck, PackageCheck, ShoppingBag, Trophy } from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [interval, setInterval] = useState<number>(30)
  const handleClick = (value: number) => {
    setInterval(value)
  }

  console.log(interval)

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
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const value = Number(e.target.value);
              if (!value) return;
              
              handleClick(value);
            }}
          >
            <option value={30}>Last 30 days</option>
            <option value={60}>Last 60 days</option>
            <option value={90}>Last 90 days</option>
            <option value={365}>This year</option>
          </Select>
        </AdminPageHeader.Actions>
      </AdminPageHeader>
      <AdminPageContent>
        <div className="grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-4">
          <StatCard>
            <StatCard.Label>Total Revenue</StatCard.Label>
            <StatCard.Value>{formatCurrency(422000)}</StatCard.Value>
            <StatCard.Progress><ArrowUp size={12} />12.4% vs last month</StatCard.Progress>
          </StatCard>
          <StatCard>
            <StatCard.Label>Orders</StatCard.Label>
            <StatCard.Value>19</StatCard.Value>
            <StatCard.Progress><ArrowUp size={12} />2% vs last month</StatCard.Progress>
          </StatCard>
          <StatCard>
            <StatCard.Label>New Customers</StatCard.Label>
            <StatCard.Value>27</StatCard.Value>
            <StatCard.Progress className="text-accent"><ArrowUp size={12} />7% vs last month</StatCard.Progress>
          </StatCard>
          <StatCard>
            <StatCard.Label>Avg. Order Value</StatCard.Label>
            <StatCard.Value>{formatCurrency(22000)}</StatCard.Value>
            <StatCard.Progress><ArrowUp size={12} />2.4% vs last month</StatCard.Progress>
          </StatCard>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <SummaryTable className="flex-6">
            <SummaryTable.Header>
              <SummaryTable.Title>Revenue trend</SummaryTable.Title>
            </SummaryTable.Header>
            <SummaryTable.Content>
              <SummaryTable.Empty>
                <ClipboardCheck />
                <p className="font-bold">No orders need attention</p>
                <p className="normal-case">You&apos;re all caught up!</p>
              </SummaryTable.Empty>
            </SummaryTable.Content>
          </SummaryTable>
          <SummaryTable className="flex-4">
            <SummaryTable.Header>
              <SummaryTable.Title>New vs returning</SummaryTable.Title>
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
          <SummaryTable className="flex-6">
            <SummaryTable.Header>
              <SummaryTable.Title>Category performance</SummaryTable.Title>
            </SummaryTable.Header>
            <SummaryTable.Content>
              <SummaryTable.Empty>
                <ShoppingBag />
                <p className="font-bold">No recent orders</p>
                <p className="normal-case">New orders will appear here when customers places them</p>
              </SummaryTable.Empty>
            </SummaryTable.Content>
          </SummaryTable>
          <SummaryTable className="flex-4">
            <SummaryTable.Header>
              <SummaryTable.Title>Top Products</SummaryTable.Title>
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
      </AdminPageContent>
      <AdminPageContent>
        <SummaryTable className="flex-4">
          <SummaryTable.Header>
            <SummaryTable.Title>Orders by state</SummaryTable.Title>
          </SummaryTable.Header>
          <SummaryTable.Content>
            <SummaryTable.Empty>
              <Trophy />
              <p className="font-bold">No top selling state yet</p>
              <p className="normal-case">Start selling to get more analysis!</p>
            </SummaryTable.Empty>
          </SummaryTable.Content>
        </SummaryTable>
      </AdminPageContent>
    </>
  );
}
