/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface Categoria {
  id: string;
  nombre: string;
}

const ProductTable = () => {
  const { data: session } = useSession();

  const [list, setList] = useState<Categoria[]>([]);

  useEffect(() => {
    if (session?.user?.token) {
      getUserList();
    }
  }, [session?.user?.token]);

  const getUserList = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/categorias`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();

      setList(data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const columns = [
    {
      header: "Id",
      accessorKey: "id" as const,
    },
    {
      header: "Categoria",
      accessorKey: "nombre" as const,
    }
  ];

  const table = useReactTable({
    columns,
    data: list,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="px-2 py-2 m-4">
      <div className="overflow-x-auto">
        {list.length > 0 ? (
          <table className="w-full rounded-xl mb-4">
            <thead className="table-auto bg-secondary-900 text-primary">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className=" border-gray-300">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="text-left py-2 px-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="text-gray-300 hover:bg-secondary-900 hover:text-white"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-2 px-2 sm:py-5 sm:px-5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando datos...</p>
        )}

        {list.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {"Primera página"}
              </button>
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5 disabled:hover:bg-secondary-900 disabled:hover:text-white"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"Anterior"}
              </button>
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {"Siguiente"}
              </button>
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {"Ultima página"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
