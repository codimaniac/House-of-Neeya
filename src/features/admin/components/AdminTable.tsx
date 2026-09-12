"use client"

import Checkbox from "@/components/ui/Checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import ProductFormModal from "../products/components/ProductForm/ProductFormModal"
import ProductForm from "../products/components/ProductForm/ProductForm"

const AdminTable = ({ rowHeaders, row }: { rowHeaders: string[] | ReactNode[], row: Record<string, string> }) => {
    const pathname = usePathname();

    return (
        <>
            <ProductFormModal>
                <ProductForm />
            </ProductFormModal>
            <Table className="text-xs!">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        {
                            rowHeaders.map((header, index) => {
                                return (
                                    <TableHead key={index} className="font-semibold">{header}</TableHead>
                                )
                            })
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        <TableRow>
                            {(pathname === "/admin/products" || pathname === "/admin/analytics") && <TableCell><Checkbox label="" /></TableCell>}
                            {
                                Object.keys(row).map((key, index) => {
                                    return (
                                        <TableCell key={index}>{row[key]}</TableCell>
                                    )
                                })
                            }
                            {(pathname === "/admin/products" || pathname === "/admin/analytics") && <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger><MoreHorizontal size={14} className="text-foreground/70" /></DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup>
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <ProductFormModal.Open action="edit"><DropdownMenuItem>Edit</DropdownMenuItem></ProductFormModal.Open>
                                            <DropdownMenuItem>Publish</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            }
                            {
                                pathname === "/admin/orders" && <TableCell className="text-foreground/70 hover:text-foreground hover:underline cursor-pointer">View</TableCell>
                            }
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </>

    )
}

export default AdminTable