"use client"

import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/SelectInput";
import AdminPageContent from "@/features/admin/components/AdminPageContent";
import AdminPageHeader from "@/features/admin/components/AdminPageHeader";
import AdminTable from "@/features/admin/components/AdminTable";
import AdminTableTabs, { Tab } from "@/features/admin/components/AdminTableTabs";
import ProductForm from "@/features/admin/products/components/ProductForm/ProductForm";
import ProductFormModal from "@/features/admin/products/components/ProductForm/ProductFormModal";
import { Search } from "lucide-react";

const rowHeaders = [<Checkbox label="" key={1} />, "product", "category", "price", "stock", "badge", "status", ""]
const row = {
    product: "Product A",
    category: "Category A",
    price: "$100.00",
    stock: "In Stock",
    badge: "New",
    status: "Active",
  }
const tableTabs = ["All Products", "Published", "Drafts", "Archived"]

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
          <ProductFormModal.Open action="add" />
        </AdminPageHeader.Actions>
      </AdminPageHeader>
      <AdminPageContent>
        <ProductFormModal>
          <ProductForm />
        </ProductFormModal>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <AdminTableTabs>
            {tableTabs.map((tab) => (
              <Tab key={tab} active={tab === "All Products"}>
                {tab}
              </Tab>
            ))}
          </AdminTableTabs>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search size={14} className="absolute -translate-y-1/2 top-1/2 left-2.5" />
              <Input type="text" placeholder="Search products..." className="pl-8.5" />
            </div>
            <Select className="w-fit h-full text-xs">
              <option value="featured" className="text-xs w-12">
                All Categories
              </option>
              <option value="featured" className="text-xs w-12">
                Men&apos;s Footwear
              </option>
              <option value="featured" className="text-xs w-12">
                Women&apos;s Footwear
              </option>
              <option value="featured" className="text-xs w-12">
                Clothing
              </option>
              <option value="featured" className="text-xs w-12">
                Handbags
              </option>
            </Select>
          </div>
        </div>
        <div className="min-h-screen flex-1 rounded-xl bg-foreground/5 md:min-h-min">
          <AdminTable rowHeaders={rowHeaders} row={row} />
        </div>
      </AdminPageContent>
    </>
  );
}
