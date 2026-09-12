"use client"

import Checkbox from "@/components/ui/Checkbox";
import Select from "@/components/ui/SelectInput";
import AdminPageContent from "@/features/admin/components/AdminPageContent";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import AdminTable from "@/features/admin/components/AdminTable";
import StatCard from "@/features/admin/dashboard/components/StatCard";
import SummaryTable from "@/features/admin/components/SummaryTable";
import formatCurrency from "@/lib/formatCurrency";
import { ArrowRight, ArrowUp, ClipboardCheck, PackageCheck, ShoppingBag, Trophy } from "lucide-react";

const rowHeaders = [<Checkbox label="" key={1} />, "product", "category", "price", "stock", "badge", "status", ""]
const row = {
  product: "Product A",
  category: "Category A",
  price: "$100.00",
  stock: "In Stock",
  badge: "New",
  status: "Active",
}

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
              <SummaryTable.Action href="/admin/orders">View all orders <ArrowRight /></SummaryTable.Action>
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
              <SummaryTable.Action href="/admin/products">Manage products <ArrowRight /></SummaryTable.Action>
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
              <SummaryTable.Action href="/admin/orders">View all <ArrowRight /></SummaryTable.Action>
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
              <SummaryTable.Action href="/admin/products">View analytics <ArrowRight /></SummaryTable.Action>
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
        <div className="min-h-screen flex-1 rounded-xl bg-foreground/5 md:min-h-min">
          <AdminTable rowHeaders={rowHeaders} row={row} />
        </div>
      </AdminPageContent>
    </>
  );
}
