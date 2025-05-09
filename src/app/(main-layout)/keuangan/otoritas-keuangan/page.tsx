"use client";

import { useState } from "react";
import { DollarSign, Pencil, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OtoritasKeuanganPage() {
    const router = useRouter();
    const [data, setData] = useState([
        {
            no: 1,
            tanggal: "20 April 2025",
            deskripsi: "Pembelian peralatan Lab",
            nominal: 10500000,
            approval1: "Diterima",
            approval2: "Diterima",
        },
        {
            no: 2,
            tanggal: "11 Maret 2025",
            deskripsi: "Perawatan Mesin",
            nominal: 5000000,
            approval1: "Ditolak",
            approval2: "Diterima",
        },
        {
            no: 3,
            tanggal: "12 Juni 2025",
            deskripsi: "Biaya Registrasi Lomba",
            nominal: 1800000,
            approval1: "Diterima",
            approval2: "Ditolak",
        },
        {
            no: 4,
            tanggal: "12 Juni 2025",
            deskripsi: "Universitas Muhammadiyah Yogyakarta",
            nominal: 5800000,
            approval1: "Diterima",
            approval2: "Diterima",
        },
        {
            no: 5,
            tanggal: "12 Juni 2025",
            deskripsi: "Pengadaan Suku Cadang",
            nominal: 3500000,
            approval1: "Diterima",
            approval2: "Diterima",
        },
        {
            no: 6,
            tanggal: "12 Juni 2025",
            deskripsi: "Pengadaan Material Praktikum",
            nominal: 4000000,
            approval1: "Ditolak",
            approval2: "Ditolak",
        },
    ]);


    const handleApprovalChange = (index: number, field: "approval1" | "approval2", value: string) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };


    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {/* Header */}
            <div className="w-full bg-red-700 h-[300px] px-6 flex justify-center items-start pt-6">
                <div className="w-full max-w-7xl text-white flex justify-between items-center text-xl font-semibold">
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Manajemen Keuangan
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full max-w-7xl -mt-52 z-10 relative space-y-4 px-4 pb-10">
                <h2 className="text-lg font-semibold text-white">Otoritas Keuangan</h2>
                <Input
                    type="text"
                    placeholder="Cari..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 px-4 text-sm text-gray-700 placeholder:text-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent shadow-sm"
                />

                <Card>
                    <CardContent className="overflow-auto px-0">
                        <table className="w-full text-sm text-left">
                            <thead className="text-red-700 font-semibold border-b">
                                <tr>
                                    <th className="p-4">No</th>
                                    <th className="p-4">Tanggal</th>
                                    <th className="p-4">Deskripsi</th>
                                    <th className="p-4">Nominal</th>
                                    <th className="p-4">Approval Pengurus 1</th>
                                    <th className="p-4">Approval Pengurus 2</th>
                                    <th className="p-4">Receipt</th>
                                    <th className="p-4">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) => (
                                    <tr key={item.no} className="border-b hover:bg-gray-50">
                                        <td className="p-4">{item.no}</td>
                                        <td className="p-4">{item.tanggal}</td>
                                        <td className="p-4">{item.deskripsi}</td>
                                        <td className="p-4">Rp {item.nominal.toLocaleString()}</td>
                                        <td className="p-4">
                                            <select
                                                value={item.approval1}
                                                onChange={(e) => handleApprovalChange(i, "approval1", e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 text-sm"
                                            >
                                                <option value="Diterima">Diterima</option>
                                                <option value="Ditolak">Ditolak</option>
                                            </select>
                                        </td>
                                        <td className="p-4">
                                            <select
                                                value={item.approval2}
                                                onChange={(e) => handleApprovalChange(i, "approval2", e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 text-sm"
                                            >
                                                <option value="Diterima">Diterima</option>
                                                <option value="Ditolak">Ditolak</option>
                                            </select>
                                        </td>
                                        <td className="p-4">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="bg-gray-100 hover:bg-gray-200"
                                            >
                                                <Upload size={16} />
                                            </Button>
                                        </td>
                                        <td className="p-4 flex items-center gap-2">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                                            >
                                                <Pencil size={16} />
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="bg-red-100 text-red-600 hover:bg-red-200"
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 py-4">
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-700">
                                &lt;
                            </Button>
                            <Button size="sm" className="bg-red-700 text-white rounded-full h-7 w-7 text-xs font-medium">
                                01
                            </Button>
                            <Button variant="link" size="sm">02</Button>
                            <Button variant="link" size="sm">03</Button>
                            <span className="text-sm text-gray-500">...</span>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-700">
                                &gt;
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
